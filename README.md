
 ![emporio da cerveja logo](https://raw.githubusercontent.com/anaprzsiczny/emporio-da-cerveja/main/public/assets/logo-nome.svg)

 ![system demo](https://raw.githubusercontent.com/anaprzsiczny/emporio-da-cerveja-admin/main/public/assets/system-demo.gif)

# Admin project

Admin project for the site **[empório da cerveja](https://www.emporiodacerveja.com.br/)**. This project will cover all the **users** and **products** administration. 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See **tests** section for notes on how to test the project locally.

### Prerequisites

To run the project properly you will need the following softwares:

 - [Git](https://git-scm.com/)
 - [Node 14.16.0 LTS](https://nodejs.org/en/)
 - NPM 6.14(Comes along with Node)

## Installing

### Front end

Follow these steps to get the front end project running in a development environment:

1. Clone the project
```sh
git clone https://github.com/anaprzsiczny/emporio-da-cerveja-admin
```

2. Navigate into the project root folder:
```sh
cd emporio-da-cerveja-admin
```

3. Install the node dependencies
```sh
npm install
```

4. Run the project:
```sh
npm start
```

### Back end

Follow these steps to get the back end project running in a development environment:

1. Inside the project, go to the 'api' folder
```sh
cd api
```

2. Install the node dependencies
```sh
npm install
```

3. Run json server on port 4000:
```sh
json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```

## Running the tests

The project currently have unit tests using [jest](https://jestjs.io/), to run the tests in your local environment, just run the command bellow:

```sh
npm test
```

## Using system

When the project is running (back end and front end), you can use the following email and password to access the system:

**admin user**

**email:** helen@facebook.com |
**password:** 123123

**editor user**

**email:** mauricio@google.com |
**password:** 123123

## Built With

* [React](https://reactjs.org/) - The web framework used.
* [TypeScript](https://www.typescriptlang.org/) - Javascript superset for type variables.
* [Jest](https://jestjs.io/) - The test framework.
* [JSON Server](https://github.com/typicode/json-server) - Back end mock.

## Authors

[**Ana Júlia Gomes Przsiczny**](https://github.com/anaprzsiczny)
