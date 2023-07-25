
# fulltimeforce-test

Home test project for Fulltimeforce


## Run Locally (backend)

Clone the project

```bash
  git clone https://github.com/AlexLMCode/fulltimeforce-test.git
```

Go to the project directory

```bash
  cd fulltimeforce-test
```

Go to the backend project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Run backend project

```bash
  npm run start:dev
```

## Run Locally (frontend)

Go to the project directory

```bash
  cd fulltimeforce-test
```

Go to the frontend project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Run frontend project

```bash
  npm run dev
```

### You MUST run both projects (backend, frontend) at the same time on different terminals in order to get the project up and running


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file inside the backend folder

`OCTOKIT_TOKEN`

`PORT`

`NODE_ENV`

`OWNER_NAME`

`REPOSITORY_NAME`

`API_NAME`

`API_DESCRIPTION`

`API_VERSION`

## API Reference

#### Get repository commits

```http
  GET /commits?perPage=60
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `perPage` | `number` | commits per page |
| `page` | `number` | page number |

#### Get repository info

```http
  GET /repos/info
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ``      | `` |  |

#### Get UI endpoints

```http
  GET /swagger
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ``      | `` |  |

