# Demo app: Teams and employees management
- Fetch and display teams and employee in tree structure
- Add and edit employee via API
- Add team via API
- Written with React functional components and context for holding state

## Installation
1. `npm i`
2. Set API key for communication. Create file `.env.local` with content `VITE_SUPABASE_KEY='string'`. If API calls are not still working, you can replace `import.meta.env.VITE_SUPABASE_KEY` with API key string inside `src/utils/apiClient.ts` file.
3. `npm run dev` to start dev server

## Scripts
- `npm run dev`: Run local dev server
- `npm run build`: Build project for production

## Used tehnology
- [React.js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/material-ui/getting-started/overview/) based on Emotion with Tree view and Date picker packages
- [Vite.js](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/v3/docs/react/overview) for data fetching
- [Formik](https://formik.org/) for forms
- [React router dom](https://reactrouter.com/en/6.10.0) for routing edit modal

This project was bootstrapped with [Create vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Project data
This project is using https://github.com/Naomak/alveno-job API

There are two resources `Team` and `Employee`. Each resource have it´s own context for holding data and manipulating with it. For best usage data are saved also as a map.
- For teams, there is need to hold reference of parent team. There is created `parentTeamToTeamsMap`, where key is 'id' of parent team and value is array of children teams. Top level has key named 'root'.
- For emplyees, there is need to render items based on teamId. There is created `teamToEmployeesMap`, where key is 'id' of parent team and value is array of children employees.