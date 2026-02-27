# Production deployment

## Backend

1. Copy `backend/.env.example` to `backend/.env` and set all required values (AWS, `MONGO_URI`, `JWT_SECRET`, email, Stripe, etc.).
2. For production, set:
   - `NODE_ENV=production`
   - `FRONTEND_ORIGIN=https://your-frontend-domain.com` (for CORS; no trailing slash)
   - `REDIS_HOST` / `REDIS_PORT` if Redis is not on localhost
3. Password reset emails use `FRONTEND_ORIGIN` for the reset link (e.g. `https://your-site.com/reset/TOKEN`).
4. Run the server (e.g. `node server.js` or via PM2).

## Frontend

1. Copy `frontend/.env.example` to `frontend/.env`.
2. For production build, set the API base URL before building:
   ```bash
   export VITE_REACT_API_URL=https://your-api-domain.com/api
   npm run build
   ```
3. Serve the `frontend/dist` folder with your static host (Nginx, Vercel, etc.).

## Summary

- All frontend API calls use `src/config.js`, which reads `VITE_REACT_API_URL` at build time.
- Backend uses `FRONTEND_ORIGIN` for CORS and password-reset links.
- In production the backend returns a generic error message (no stack or details) and uses helmet for security headers.
