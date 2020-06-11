# cypress-e2e

# Cypress Testing Project

## Setup of cypress project

* Create package.json `npm init -y`
* Install cypress`npm install cypress`
* Create cypress project file structure`npx cypress open`
  * `cypress.json` file created
  * cypress project files created in cypress folder

## Configure cypress project

### Linting config

* Install prettier for linting configuration`npm install prettier`
  * create `.prettierrc` in root of project
  * configure `.prettierrc` with the following:

  ```
  {
  "semi": false,
  "singleQuote": true,
  "useTabs": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5"
  }

### Code completion config

* Configure cypress project with Typescript
  * Create `tsconfig.json` in cypress folder
  * configure `tsconfig.json` with the following:
  ```
  {
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]}

### Custom Test Scripts config

* Include the following in scripts object in `package.json`:
  * `"cy:open": "cypress open"` which will run cypress in UI mode
  * `"cy:run": "cypress run"` which will run cypress in headless mode

## Cypress folder structure

### cypress.json

* `cypress.json` can be used to override default cypress configuration

### fixtures

* fixtures are used as external static data which can be used by our tests.
  * Typically used with the `fixture` command
  * Good for stubbing network requests or for creating test data for scenarios

### integration

* All tests stored here. Such as:
  * basic tests
  * end to end tests
  * visual tests
  * cucumber tests

### plugins

* index.js file where you can setup or enable cypress extensions such as:
  * image snapshot libraries
  * cucumber pre-processor

### support

* `index.js` file in support directory runs before every single spec file
* custom commands can be run here or you can override existing commands from here as well

### run cypress

* To run cypress with browser:
`npm run cy:open`

* To run cypress in headless mode:
`npm run cy:run`

* To run a specific spec file:
`npx cypress run --spec="cypress/integration/examples/testcafe_example/scroll.spec.js"`
