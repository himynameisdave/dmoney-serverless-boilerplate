## 🗺️ dmoney-serverless-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/himynameisdave/dmoney-serverless-boilerplate.svg)](https://greenkeeper.io/)

My personal template/boilerplate for starting JS-based [Serverless](https://github.com/serverless/serverless) projects targeted for deployment on AWS Lambda.

Gets you up and running with a nice foundation, including things like:

- [`serverless-webpack`](https://github.com/serverless-heaven/serverless-webpack) to transpile stuff with Babel.
- [`serverless-offline`](https://github.com/dherault/serverless-offline) so that you can test your lambda locally/don't have deploy to test.
- [ESLint](https://eslint.org/) to keep code clean.
- [Jest](https://github.com/facebook/jest) for unit testing.


### Using this template

First, you must [install `serverless` globally](https://serverless.com/framework/docs/providers/aws/guide/installation/), then login to your to Serverless:

```
npm i -g serverless
sls login
```

You'll also want to [setup your AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) if you haven't already.

You can now use `sls create` with the URL of this GitHub repo to quickly generate your new service:

```
sls create --template-url https://github.com/himynameisdave/dmoney-serverless-boilerplate --path my-service
```

Your new service will be created at `my-service/`.

To simplify the above command, I recommend adding the following to your `.bash_profile`:

```
# You can this whatever you like
slsnew() {
  sls create --template-url https://github.com/himynameisdave/dmoney-serverless-boilerplate --path $1
  cd $1
  npm install
}
```

...which allows you to simply run `slsnew my-service`, and it will create the service and install all the dependencies.

### Development

Start up the local server by running whichever of these you prefer:

```
yarn run start

npm run start
```

Your `main` lambda will now be served at [`localhost:3000/main`](http://localhost:3000/main).

Run your tests with either of these:

```
yarn run test

npm run test

# You can also run
# - test:coverage for coverage report
# - test:watch to run tests in watch mode
```

### Deployment

Run one of the following command to deploy your lambda:

```
yarn run deploy

npm run deploy
```

If you have everything set up correctly, this will deploy your lambda to AWS. You will see the endpoint(s) for your service, so go check it out!
