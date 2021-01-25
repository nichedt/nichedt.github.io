# Nicholas Tan's website

## Setup

### OS Dependencies

_For Apple Silicon CPUs, run `arch -x86_64 zsh` prior to installing any packages or running any project commands._

Likely move to docker at some point to handle this. Install these OS dependencies if you do not already have them installed.

- [node](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [nvm](https://github.com/nvm-sh/nvm)
- [monogoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Project Dependencies

Once the OS dependencies are installed, install the project packages.

From the project root, run `nvm use` You may be prompted to install a different version of node for this project, `v12.15.0`

Run `yarn install` to install all project dependencies once you've switched to the right node version from `nvm use`.

### Database setup

- [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) if you didn't from the start
- Quick install with brew
  - `brew tap mongodb/brew`
  - `brew install mongodb-community`
  - `brew services start mongodb-community`
- Test that monogoDB is running locally by running `mongo` in terminal. You should enter the mongo CLI tool.
- Run `show dbs`. It should show:

```
admin         0.000GB
config        0.000GB
local         0.000GB
```

MonogoDB is now installed and ready to go.

#### Database commands

Once the backend is running, you'll see a new database when running `show dbs`, `passport-jwt`. Using the mongo CLI tool,
select the database you would like to perform actions on with `use passport-jwt`.

Use `show collections` to see the collections inside of `passport-jwt`. There should just be `users`.

`db.users.find().pretty()` will return a JSON object of all the users in the collection.

### Project commands

`yarn dev` - runs both the backend and frontend in development mode

`yarn dev:backend` - run the backend only in development mode

`yarn dev:frontend` - run the client only in development mode

`yarn build` - builds the entire application

`yarn start` - builds the entire application and runs it in production mode

## TODO

**General**

- Fix build and deploy
- Add / fix frontend dependencies
- Database

**Website**

- Auth backend (Nich)
- Blog posts (Nich / Brandon)
- frontend things (Brandon)
