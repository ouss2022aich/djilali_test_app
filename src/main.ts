import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

// 1. Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// 2. Middleware & Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript! this is djilali 2222222222222222');
});

// 3. Start Server
app.listen(Number(PORT), HOST, () => {
  console.log(`[server]: Server is running at http://${HOST}:${PORT}`);
});
