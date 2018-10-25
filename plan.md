# full stack auth review!!!
# front end
## Component structure
* Nav Bar
* Home aka Landing page
* Login page
* Profile page
* Couch browser
* Add couch
* Footer?
* Cart?

# redux
* store
* reducer
    * reducer func
    * initial state
        * user: null
        * couches?
    * action creaters
    * action types strings
* provider in index.js
* connect() in components
* 

# back end
## End points aka routs
* GET, POST /api/couches
* /api/me
* /auth/callback

## controllers
* couches controller
* auth controller
* user controller

## Server
* index.js

## Routing
* / (home)
* /cool-couches
* /profile

* index.js BrowerRouter
* Links
* Routes => routes.js


# Database
## tables
* couches
    * id serial primary key
    * name text
    * price integer
    * img (url) text
* users
    * id serial primary key
    * auth0_id text
    * name text
    * email text
    * picture text
## Queries
* db folder
* select all couches // get_couches.sql
* find user
* create user
* add_couch.sql ? 



# npm packages
* express
* body-parser
* axios
* massive
* react-router-dom
* react-redux
* redux
* dotenv
* http-proxy-middleware
