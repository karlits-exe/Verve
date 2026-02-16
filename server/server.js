import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const corsOption = {
  origin: ["http://localhost:8000", "http://localhost:5173"],
  credential: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

