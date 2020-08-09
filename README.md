# DevConnector

> Social network for developers

full stack social network application using Node.js, Express, React, Redux and MongoDB. It includes authentication, profiles and forum posts. It uses JWT for user authentication and also uses the Github api to fetch user repos.

![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_51_39.png)
![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_52_16.png)
![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_52_33.png)
![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_52_42.png)
![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_53_00.png)
![Test Image 1](https://github.com/Rohitjk/DevConnect/blob/master/screenshots/Welcome%20to%20DevConnector%20-%20Google%20Chrome%2009-08-2020%2020_53_30.png)

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


