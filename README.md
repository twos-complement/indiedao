# IndieDAO

## Architecture

Based on the 2C vercel client boilerplate.

![Architecture Diagram](/docs/architecture.png)

## Setup

### Development Environment

To use Vercel Next.js, you need the following tools:

- Node.js - [Install Node.js 12](https://nodejs.org/en/), including the npm package management tool. [NVM](https://github.com/nvm-sh/nvm) is recommended.

1. Copy `.env.example` to `.env` and add values below, then source to shell.
2. `npm run dev` - to run the Next.js app locally

Hardhat Commands:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

### Storybook

Install storybook `npm install storybook -g`, then `npm run storybook` to start storybook.

### CI/CD

Vercel deployment setup:

1. [Import git repository on Vercel](https://vercel.com/import/git)
2. Configure any ENV vars for production/preview apps (in web console or using vercel cli)
3. Configure domain for production (set CNAME record to `cname.vercel-dns.com`, and confirm in Vercel console)
4. Configure [integrations](https://vercel.com/integrations), like Slack for notifications

Commits pushed to any branch will automatically build and deploy a `preview` app on Vercel (including PR bot posts).
Commits pushed to `main` branch will automatically build and deploy the `production` app on Vercel.

### Environment Variables

Local development: set values in .env

| Name                   | Default                                       | Description                                                                                                                                                                                                                                  |
| ---------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RINKEBY_GATEWAY        | `` | API Gateway for Rinkeby                  |
| MAINNET_GATEWAY        | `` | API Gateway for Rinkeby                  |
| DEPLOYER_PRIVATE_KEY   | `` | Private key for contract deployments     |
| ETHERSCAN_API_KEY      | `` | Private key for Etherscan to verify code |

#### System Environment Variables

Vercel can add [system environment variables](https://vercel.com/docs/build-step#system-environment-variables). Add `VERCEL_GITHUB_COMMIT_SHA` (at minimum for the /api/version endpoint) and leave the value blank, and Vercel will populate these values.

## Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
