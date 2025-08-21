// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import path from 'path';
// import { fileURLToPath } from 'url';

// import { connectDB } from './config/db.js';
// import userRouter from './routes/userRoutes.js';
// import resumeRouter from './routes/resumeRoutes.js'; // ✅ Correct import

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 8000;

// // ✅ Connect to MongoDB
// connectDB();

// // ✅ Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ Routes
// app.use('/api/auth', userRouter);
// app.use('/api/resume', resumeRouter); // ✅ Correct usage

// // ✅ Serve static files (images)
// app.use(
//   '/uploads',
//   express.static(path.join(__dirname, 'uploads'), {
//     setHeaders: (res, _path) => {
//       res.set('Access-Control-Allow-Origin', 'http://localhost:5173'); // ✅ CORS header for client
//     },
//   })
// );

// // ✅ Test route
// app.get('/', (req, res) => {
//   res.send('API Working Venky.....');
// });

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

//========================

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// MongoDB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', userRouter);
app.use('/api/resume', resumeRouter);

// Serve static files (uploads)
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res, _path) => {
      res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    },
  })
);

// Base route
app.get('/', (req, res) => {
  res.send('API Working Venky.....');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
