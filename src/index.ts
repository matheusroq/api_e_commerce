import express from 'express';
import 'reflect-metadata';
import './database';
import { routes } from './routes';
import { resolve } from 'path'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/uploads/', express.static(resolve(__dirname, '..', 'uploads')))

app.use(routes);

app.listen(8000, () => console.log('Running on port 8000'));
