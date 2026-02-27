/**
 * Central config for API and environment-dependent values.
 * Set VITE_REACT_API_URL to your API base (with or without /api):
 *   - With /api: https://example.com/api
 *   - Without: https://example.com  (we append /api)
 * Development defaults to http://localhost:5000 when not set.
 */
const isDev = import.meta.env.DEV;
const raw = (import.meta.env.VITE_REACT_API_URL || "").replace(/\/+$/, "");

const base =
  raw.length > 0
    ? raw
    : isDev
    ? "http://localhost:5000"
    : "https://scottishhindufoundation.com";

export const API_BASE_URL = base.includes("/api") ? base.replace(/\/api\/?$/, "") : base;
export const API_URL = base.includes("/api") ? base : `${base}/api`;
