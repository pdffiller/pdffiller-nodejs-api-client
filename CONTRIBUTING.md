# Contributing

Fork the repo, develop and test your code changes.

Install all dependencies including development requirements by running:

``` sh
npm install
```

Tests are run using mocha. To run all tests just run:

``` sh
npm test
```

which looks for tests in the `test/` directory.

Your code should honor the Eslint rules. To check your code run:

``` sh
npm lint
```

This command will run every time you will create new commit.  

Submit a pull request. The repo owner will review your request. If it is
approved, the change will be merged. If it needs additional work, the repo
owner will respond with useful comments. 

## Generating Documentation

You can generate the documentation for the APIs by running:

``` sh
npm run generate-docs
```

Documentation will be generated in `docs/`.

## Preparing for release

Before releasing a new version, you should run tests,
bump the version in `package.json` and create a git tag for the release.