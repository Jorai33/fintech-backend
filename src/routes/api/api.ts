import express from "express";

export const api = express.Router();

require('./users');
require('./tasks');
require('./projets');
