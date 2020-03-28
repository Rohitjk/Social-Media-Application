# DevConnector

> Social network for developers

This is a MERN stack application. It is a small social network app that includes authentication, profiles and forum posts. It uses JWT for user authentication and also uses the Github api to fetch user repos.

# Quick Start

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Prerequisites

```
node
npm
mongoDB Atlas
```


## Built With

* ReactJS
* NodeJS
* Express


