require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const taskRoutes = require('./src/routes/taskRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running en http://localhost:${PORT}`)))
  .catch(err => { console.error(err); process.exit(1); });
