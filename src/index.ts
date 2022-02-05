import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.listen(8000, () => console.log('Running on port 8000'));
