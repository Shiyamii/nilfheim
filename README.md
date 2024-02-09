# Nilfheim
## Description
This is a web application to do blind test online.

## Installation
```bash
git clone
cd nilfheim
yarn install
```

## Usage
```bash
yarn start
```
or
```bash
yarn start:frontend
yarn start:backend
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Prettier
This project use prettier to format code. You can run it with the following command:
```bash
yarn prettier
```
### Commit message
This project use a commit message convention.
You need to respect the following pattern:
```
<type>(<scope>): <issue-number> <subject>
```
with:
- `type`: the type of the commit (feat, fix, chore, refactor, docs, style, test, perf, ci, build, revert)
- `scope`: the scope of the commit (frontend, backend, ci, ...)
- `issue-number`: the issue number related to the commit
- `subject`: the subject of the commit

## CI/CD
This project use Github Actions to run tests.

## Authors
- Shiyamii(https://github.com/Shiyamii)

## Project status
This project is in development.

## Project structure
- `frontend/` contains the frontend part of the project
- `backend/` contains the backend part of the project
