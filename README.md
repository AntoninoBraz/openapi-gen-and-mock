# OpenapiAutoGenerator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

# Install Procedure

These instructions are meant to be used by a new or old project. Please respect the spirit of the configuration, if at all possible.

## Create folder Structure inside src/ directory

- api
  - specs
    - openapi_spec.json
  - mock
    - Auto generated API Handlers - Ideally DO NOT CHANGE unless required
  - gen
    - Auto generated API Handlers - Ideally DO NOT CHANGE. If required something went realy wrong ask for help.

## Install msw and msw-auto-mock

- npm install msw@latest --save-dev
- npm install msw-auto-mock @faker-js/faker --save-dev

## Generate Handlers and Setup for msw

- npx msw-auto-mock ./src/api/specs/openapi_spec.json -o ./src/api/mock

## Generate the msw service worker and target generation

npx msw init src/api/mock
