const axios = require('axios');

module.exports = {
    logout: (req,res)=> {
        res.session.destroy();
        res.status(200).json({message: 'Successfully logged out hehe bye bye'});
    },
    handleCallback: (req, res) => {
        exchangeCodeForAccessToken()
            .then(exchangeAccessCodeForUserInfo)
            .then(storeUserInfoInDatabase)
            .catch(error=>{
                console.error('Problem occured in handleCallback',error);
                res.status(500).send('An unexpected error happened on the server oopsie');
            })

        function exchangeCodeForAccessToken(){
            const payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code: req.query.code,
                authorization: 'authorization_code',
                redirect_uri: `http://${req.headers.host}/auth/callback`
            };
            console.log('payload', payload);
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
        }

        function exchangeAccessCodeForUserInfo(accessTokenRes){
            console.log('accessToken', accessTokenRes.data.access_token);
            const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenRes.data.access_token}`;
            console.log('user info url', url);
            return axios.post(url);
        }

        function storeUserInfoInDatabase(userInfoRes){
            const userInfo = userInfoRes.data;
            console.log('userInfo', userInfo);
            return req.app.get('db').get_user({auth0_id: userInfo.sub}).then( users => {
                if(users.length){
                    const user = users[0];
                    req.session.user = user;
                    res.redirect('/cool-couches');
                } else {
                    return req.app.get('db').add_user({auth0_id: userInfo.sub, name: userInfo.name, email: userInfo.email, picture: userInfo.picture})
                    .then(newUsers => {
                        const newUser = newUsers[0];
                        req.session.user = newUser;
                        res.redirect('/cool-couches');
                    }).catch(error => {
                        console.log('error in store info in database', error);
                        res.status(500).json({message: 'Unexpected error on the server womp womp'});
                    })
                }
            })
        }
    }
}