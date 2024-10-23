# Vite App Template

This is a [Vite app template](vite-app-template.vercel.app) designed to experiment with various features and workflows.


## Table of Contents

- [Vite App Template](#vite-app-template)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
  - [Deployment on Vercel](#deployment-on-vercel)
  - [GitHub Pages Deployment](#github-pages-deployment)
  - [Docker Support](#docker-support)

## Features

- **CI/CD Integration**: Automated workflows using GitHub Actions to build the project and perform checks.
- **Branch Checks**: ESLint, Prettier, and TypeScript checks on commits.
- **Preview Deployments**: Automatic deployment previews on Vercel for branches other than main.
- **Main Branch Deployment**: Direct deployment to Vercel/Github Pages when committing to the main branch.
- **Docker Support**: Build and run the app using Docker, accessible locally via Nginx.

## Installation

### Prerequisites

- Node.js
- Git
- Docker

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/crystallineus/vite-app-template
   ```

2. Navigate to the project directory:
   ```bash
   cd vite-app-template
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To run the project locally:
```bash
npm run dev
```
Open your browser and go to `http://localhost:5173` (or the specified port)

## CI/CD with GitHub Actions
This project uses GitHub Actions to automate the following:

- Build the project: Ensures the application is built on each push.
- Branch Checks: Runs ESLint, Prettier, and TypeScript checks.
- Preview Deployment: If you push to branches other than main, a preview deployment will occur on Vercel.

Go to [/.github/workflows](https://github.com/crystallineus/vite-app-template/tree/main/.github/workflows).

## Deployment on Vercel
To deploy this app on Vercel, you need to set the following secrets in your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel token.
- `VERCEL_ORG_ID`: Your Vercel organization ID.
- `VERCEL_PROJECT_ID`: Your Vercel project ID.

Once these secrets are set, commits to the main branch will trigger a deployment to Vercel.

## GitHub Pages Deployment
If you want to deploy to GitHub Pages, you can follow the instructions:

- Uncomment `github-pages-deply` job in `preview.yml`.
- Update your public url in `preview.yml`, `.env`, and `package.json`.
- Deploy the app either through the workflow, or run the command below:
```bash
npm run deploy
```

## Docker Support
To build and run the app using Docker:

- Build the Docker image:
```bash
docker build -t your-app-name .
```
- Run the Docker container:
```bash
docker run -d -p 80:80 your-app-name
```
Once the container is running, you can access the app locally via Nginx at `http://localhost`.