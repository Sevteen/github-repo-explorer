# Github Finder

Github Finder is a web application built with React JS and Webpack using TypeScript as the programming language. It also utilizes Material UI with Bootstrap for styling and Zustand for state management. The React Hook Form library is used for form handling, and Joi is used for validation. Jest is used for testing modules.


## Features

The main feature of Github Finder is the ability to search for Github users using keywords and view their repositories. The app displays basic user information, such as username, avatar, and bio, along with a list of their public repositories. Search functionality is implemented with React Hook Form and Joi validation, ensuring that all search queries are valid and in the correct format.


## Deployment

To install the Github Finder app, follow these steps:

- Clone this repository to your local machine:

```bash
  git clone https://github.com/ilhamhanif07/github-repo-explorer.git
```

- Navigate into the project directory and install the dependencies using yarn:

```bash
cd github-repo-explorer
yarn install
```

#### Note: Please use Yarn instead of NPM to install dependencies to ensure compatibility with the project.

- Create a new .env file and add your Github access token as ACCESS_TOKEN. You can obtain a Github access token by following these instructions: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

```bash
ACCESS_TOKEN=your_access_token_here
```
## Usage

To start the development server, run the following command:

```bash
  yarn start
```

This will compile the TypeScript code and launch a local development server at http://localhost:7000. The app should automatically open in your web browser. 

To build the app for production, run:


```bash
yarn build

```

This will compile and optimize your code for production, placing the resulting files in the `static` directory.


To run the tests, use the following command:

```bash
yarn test
```

This will launch the Jest test runner in interactive watch mode. You can also use the --coverage flag to generate a coverage report.




    
## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these steps:

    1. Fork this repository to your own account
    2. Create a new branch with your changes: git checkout -b my-new-feature
    3. Commit your changes: git commit -am 'Add some feature'
    4. Push to the branch: git push origin my-new-feature
    5. Submit a pull request through the GitHub website

## Libraries Used

- [@emotion/react](https://emotion.sh/docs/emotion-react) and [@emotion/styled](https://emotion.sh/docs/introduction)
- [Material-UI](https://mui.com/)
- [@octokit/rest](https://octokit.github.io/rest.js/v19)
- [react-hook-form](https://react-hook-form.com/)
- [Joi](https://joi.dev/api/?v=17.4.2)
- [Zustand](https://github.com/pmndrs/zustand#readme)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Hook Testing Library](https://react-hooks-testing-library.com/)
## License

[MIT](https://choosealicense.com/licenses/mit/)

