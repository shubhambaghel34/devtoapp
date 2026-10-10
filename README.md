# DEV.to Articles App

A React app that displays published DEV.to articles for the configured account. Article data is fetched through a server-side API route so the DEV.to API key is not exposed in the browser.

## Local Setup

Install dependencies:

```sh
npm install
```

Copy `.env.example` to `.env.local` and replace the placeholder with your DEV.to API key:

```env
DEVTO_API_KEY=your_devto_api_key
```

`.env.local` is ignored by Git. Do not put the key in React source code or commit it.

Start the app:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000). The Create React App development middleware in `src/setupProxy.js` handles `/api/articles/me/all` locally and calls DEV.to with the server-side key.

## API

The app's custom hook, `src/hooks/useDevToArticles.js`, requests the same-origin URL in every environment:

```text
GET /api/articles/me/all
```

In production, Vercel serves this route from `api/articles/me/all.js`. The function calls `https://dev.to/api/articles/me/all`, returns published articles, and does not cache the response. The browser never calls DEV.to directly, so the API key is not part of the client bundle and no deployment-specific API hostname is needed.

## Deploy to Vercel

1. Import this repository into Vercel and leave the project root at the repository root.
2. Vercel uses `vercel.json` to run `npm run build` and publish the `build/` directory. The `api/` directory is deployed as a serverless function.
3. In **Project Settings → Environment Variables**, add `DEVTO_API_KEY` for Production, Preview, and Development as needed.
4. Redeploy after adding or changing the key. Open the deployed app URL; its `/api/articles/me/all` request is routed to the Vercel function on the same domain.

Do not prefix the key with `REACT_APP_`; that would expose it in the client bundle. Never commit `.env.local` or put the key in frontend source code.

## Scripts

- `npm start` starts the development server. The legacy OpenSSL provider is enabled for compatibility between this project's Create React App 4 / Webpack 4 toolchain and newer Node.js versions.
- `npm test` runs the React test suite.
- `npm run build` creates the production bundle in `build/`.

The Vercel API route requires Vercel's runtime when testing it independently. The local React development server uses `src/setupProxy.js` to provide the same route.