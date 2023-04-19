# Demo app: Teams and employee managment
- Fetch and display teams and employee in tree structure
- Add employee to database
- Written with React functional components and context

## Installation
1. `npm i`
2. Set API key for communication. Create file `.env.local` with content `VITE_SUPABASE_KEY='string'`. If API calls are not still working, you can replace `import.meta.env.VITE_SUPABASE_KEY` with API key string inside `src/utils/apiClient.ts` file.

## Used tehnology
- [React.js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/material-ui/getting-started/overview/) based on Emotion with Tree view and Date picker packages
- [Vite.js](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/v3/docs/react/overview) for data fetching
- [Formik](https://formik.org/) for forms
- [React router dom](https://reactrouter.com/en/6.10.0) for routing edit modal

This project was bootstrapped with [Create vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Scripts
`npm run dev`: Run local dev server
`npm run build`: Build project for production
