# Nicholas Tan's website

## Setup

### OS Dependencies

Likely move to docker at some point to handle this, but for now:

* [Install Node for MacOS](https://nodejs.org/en/download/)
* [Install Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
* [Install nvm](https://github.com/nvm-sh/nvm)
* [Install MonogoDB for MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Project Dependencies

*  from the project root, run `nvm use`
    * You may be prompted to install a different version of node for this project, `v12.15.0`
* run `yarn install` to install all project dependencies

### Database setup

* [Make sure you have MonogoDB installed](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* Use `brew services start mongo` to start the service in the background. Don't worry about `data/db` for now.
* Test that monogoDB is running locally by running `mongo` in terminal. You should enter the mongo CLI tool.
* Run `show dbs`. It should show:

```
admin         0.000GB
config        0.000GB
local         0.000GB
```

You're good to go.

#### Database commands

Once the backend is running, you'll see a new database when running `show dbs`, `passport-jwt`. Using the mongo CLI tool,
select the database you would like to perform actions on with `use passport-jwt`.

Use `show collections` to see the collections inside of `passport-jwt`. There should just be `users`.

`db.users.find().pretty()` will return a JSON object of all the users in the collection. 

### Project commands

`yarn dev` - runs both the backend and frontend in development mode

`yarn dev:backend` - run the backend only in development mode

`yarn dev:frontend` - run the client only in development mode

`yarn build` - build the entire application (really just the client)

`yarn start` - builds the entire application and runs it in production mode

## TODO

**General**

* Fix build and deploy
* Add / fix frontend dependencies
* Database

**Website**

* Auth backend (Nich)
* Blog posts (Nich / Brandon)
* frontend things (Brandon)
