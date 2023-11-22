import { model, connect } from 'mongoose';
import pool from './schema';
import { Pool } from './schema';

const run = async () => {
    await connect('mongodb://127.0.0.1:27017/budget');
}

export const newModel = model<Pool>('newModel', pool);
run().catch(err => console.log(err));
