const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const app = express();
const port = 3010;
const { MongoClient } = require('mongodb');

mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

const userRouter = require('./routes/server');
app.use('/user', userRouter);

app.listen(3010, () => console.log(`Server is listening on port ${port}`));