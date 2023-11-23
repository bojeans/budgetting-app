import { Schema } from "mongoose";

export interface Pool {
  date: Date;
  category: string;
  price: number;
}

const pool = new Schema<Pool>({
  date: { type: "date" },
  category: { type: "string", required: true },
  price: { type: "number", required: true },
});

export default pool;
