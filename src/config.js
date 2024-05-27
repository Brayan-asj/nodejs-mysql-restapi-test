import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'leoncampeonA12';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'ujeddb';
export const DB_PORT = process.env.DB_PORT || 3306;

// console.log(PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT);