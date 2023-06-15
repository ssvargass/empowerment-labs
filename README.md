[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Empowerment Labs - Sergio Vargas
Technical test for Empowerment Labs BE position
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requirements
- Docker
- Docker Compose

## Installation
```bash
// Install libraries
$ yarn install
// Install Dynamo and runn it in Docker
$ docker-compose up
```
In a different console run
```bash
// Migrate intial data
$ yarn init:data
```
Note: If you are in MacOS is possible you need to remove the volume at app service into docker-compose.yaml

## Running the app with Docker (Suggested)
```bash
$ docker-compose up
```

## Dynamo Admin
[http://127.0.0.1:8001](http://127.0.0.1:8001)

## Test
```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Sergio Vargas](https://ssvargass.com)

## License
Nest is [MIT licensed](LICENSE).
