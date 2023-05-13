# Typed 8thwall Babylon Testbed

[![deploy](https://github.com/drumath2237/typed-8thwall-babylon-testbed/actions/workflows/static.yml/badge.svg)](https://github.com/drumath2237/typed-8thwall-babylon-testbed/actions/workflows/static.yml)

## About

A testbed about 8thwall WebAR application development whitch is focused on
TypeScript integration.

The features is below.

- Code with type
- Self Hosting
- Hot reloading powered by Vite
- CI/CD (GitHub Actions)

Include a hit-test example scene.

https://github.com/drumath2237/typed-8thwall-babylon-testbed/assets/11372210/e1ba5c1f-240a-47a8-b2e6-034d64b83da7

## !!!Note!!!

You need 8thwall's Pro Plan in order to test this in your local environment.

## Environments

- 8thwall 22.1.2.1958
- TypeScript
- Vite
- Babylon.js 6.2.0

## Install & Usage

Create `.env` file in the project root and specify your AppKey like below.

```env
# .env
VITE_API_KEY=xxxxxxxxxxxxxxx
```

Install dependencies and loanch the dev server.

```bash
# install
npm install

# dev server
npm run dev
```

## Author

[にー兄さん@ninisan_drumath](https://twitter.com/ninisan_drumath)
