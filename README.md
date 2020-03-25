# brXM + Next.js = ♥️

Example Next.js SPA using the Bloomreach Experience [React SDK](https://www.npmjs.com/package/@bloomreach/react-sdk).
The app uses unversal framework [Next.js](https://github.com/zeit/next.js) for creating isomorphic React applications.

## Configuration

Copy `.env.dist` file to `.env` and customize it to contain a correct `PUBLIC_URL` path:
```
PUBLIC_URL=
```

In the same `.env` file, also specify the brXM instance to fetch the page model from:
```
API_BASE_URL=http://localhost:8080/site/api/page
CMS_BASE_URL=http://localhost:8080/site
```

Then, build and run the Next.js app as followed:

```bash
npm install
npm run dev
```

The SPA should now be accessible at <http://localhost:3000>.
