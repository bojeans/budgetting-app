import { model, connect, disconnect } from "mongoose";
import pool from "./schema";
import { Pool } from "./schema";

const run = async () => {
  await connect("mongodb://127.0.0.1:27017/budget");
};

const closeConnection = async () => {
  await disconnect(); // Assuming disconnect is how you close the connection
};

export const newModel = model<Pool>("newModel", pool, "newModel");
run().catch((err) => console.log(err));
