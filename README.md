# Your Clear Way Mobile App

A mobile application that homeowners can use to show progress on making their home more eco-friendly and achieving different levels based on the significance and number of upgrades they make. This app will implement a point rating system behind-the-scenes and have badges and levels to indicate user progress. The application is written with GraphQL, AWS AppSync, & AWS Amplify.

## Technologies

- AWS AppSync
- AWS Amplify
- GraphQL
- React Router
- React Apollo
- Expo

Dependencies you'll need:
* Node 14+
* NPM 6+
* Expo SDK 40

## Screens

WIP

## Running/Developing the App

This project contains an Amplify project (`/amplify`) already configured & ready to be deployed. Deploying this project will create the following resources in your account: an authentication configuration using Amazon Cognito, an AWS AppSync GraphQL API, & a DynamoDB table.

1. Make sure you are on the newest version of the AWS Amplify CLI and Expo CLI

```sh
npm install -g @aws-amplify/cli
```
> You must also have the CLI configured with a user from your AWS account (`amplify configure`). For a walkthrough of how to do this, check out [this](https://www.youtube.com/watch?v=fWbM5DLh25U) video.

```sh
npm install --global expo-cli
```
> For more information with Expo installation, check out [this](https://docs.expo.io/get-started/installation/) documentation.

2. Clone Your Clear Way

```sh
git clone https://github.com/TritonSE/Your-Clear-Way.git
```

3. Install dependencies in the `src` directory

```sh
npm install
```

4. Pull the amplify project with dev environment

```sh
amplify pull --appId dimr97ah3agc5 --envName dev
```

> `amplify pull` is similar to `git pull`, fetching upstream backend environment definition changes from the cloud and updating the local environment to match that definition.

5. After making changes to local schemas, re-generate backend code locally

```sh
amplify api gql-compile
```

6. Configure codegen for frontend

```sh
> amplify configure codegen
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src\graphql\**\*.ts     
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 3
? Enter the file name for the generated code src\API.ts
? Do you want to generate code for your newly created GraphQL API Yes
√ Generated GraphQL operations successfully and saved at src\graphql
√ Code generated successfully and saved in file src\API.ts
```

7. Generate frontend typescript types

```sh
amplify codegen
```

8. Push the new resources/changes to the cloud

```sh
amplify push
```

9. Run the project in the `src` directory

```sh
expo start
```

## Hosting with the AWS Amplify Console

The [AWS Amplify Console](https://console.amplify.aws) provides continuous deployment and hosting for modern web apps (single page apps and static site generators) with serverless backends. Continuous deployment allows developers to deploy updates to either the frontend or backend (Lambda functions, GraphQL resolvers) on every code commit to the Git repository.

1. Push your code to a Git repository of your choice.
1. Login to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home) and choose **Connect app**
1. Connect your repository and branch.
1. Accept the default build settings.
1. Give the Amplify Console permission to deploy backend resources with your frontend. This will allow the Console to detect changes to your backend on every code commit. If you do not have a service role, follow the prompts to create one.
1. Review your changes and then choose **Save and deploy**. You app will now be available at `https://master.unique-id.amplifyapp.com`.

## About

### Schema

This application utilizes 7 database tables:

- User table (stores user's identity information)
- Home table (stores information of a home)
- HomeOwner table (stores relations between users & homes)
- Question table (stores the available questions)
- Response table (stores each home's response for a question)
- Badge table (stores the available badges)
- HomeBadge table (stores relations between home & badges)

## License

WIP