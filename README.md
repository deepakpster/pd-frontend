# PD Frontend Boilerplate application
## Typescript, React, Redux/Saga, Bootstrap, Ant Design + Ant Charts, Webpack 5, Scss, Dockers, Jest


A boilerplate application that can be cloned to quickly develop a React based web application

- Typescript
- React
- Redux/Saga
- Bootstrap
- Ant Design
- Ant Charts
- Webpack 5
- Scss
- Dockers
- Jest

## Tech

PD Frontend uses a number of open source projects to work properly:

- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux/Saga](https://redux-saga.js.org/docs/introduction/GettingStarted) - Library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - great UI boilerplate for modern web apps
- [Ant Design](https://ant.design/) - high quality components for building rich, interactive user interfaces.
- [Ant Charts](https://charts.ant.design/en) - high quality charts.
- [Webpack](https://webpack.js.org/) - module bundler
- [Scss](https://sass-lang.com/) - CSS with superpowers
- [Docker](https://www.docker.com/) - Container solution
- [Jest](https://jestjs.io/) - JavaScript testing framework designed to ensure correctness of any JavaScript codebase

## Installation

pd-frontend requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd pd-frontend
npm i
npm run dev
```

For production environments...

```sh
npm install --production
npm run build
```

## Docker

PD Frontend is very easy to install and deploy in a Docker container.

When ready, simply use the Dockerfile to build the image.

For development environment...
```sh
cd pd-frontend
docker build -f dockerfile -t pd-frontend:dev .
```
This will create the development version of pd-frontend image with dev tag and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker:

```sh
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 8080:8080 \
    -e CHOKIDAR_USEPOLLING=true \
    pd-frontend:dev
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8080
```

For production environment...
```sh
cd pd-frontend
docker build -f dockerfile -t pd-frontend:prod .
```
This will create the production version of pd-frontend image with dev tag and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8081 of the host to
port 80 of the Docker:

```sh
docker run -it --rm -p 8081:80 pd-frontend:prod
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8081
```

## License

The source code for the site is licensed under the MIT license.

All graphical assets are licensed under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).
