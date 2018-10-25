module.exports = {
    getCouches: (req, res) => {
        const database = req.app.get('db');
        database.get_couches().then(couches=>{
            res.json(couches);
        }).catch(error=> {
            console.error('Error getting couches', error);
            res.status(500).json({message: 'Something went wrong on the server, sowwy'})
        })
    },
    addCouch: (req,res)=> {
        const database = req.app.get('db');
        database.add_couch({
            user_id: req.session.user.id,
            name: req.body.name,
            price: req.body.name, 
            image: req.body.image
            }).then( couches => {
            res.json(couches[0]);
        }).catch(error=> {
            console.error('Error adding a couch', error);
            res.status(500).json({message: 'blah blah blah'});
        })
    },
}