import { Hono } from 'hono';

const app = new Hono();  // Removed .basePath('/api') since server already mounts at /api

app.all('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  });
});

export default app;
