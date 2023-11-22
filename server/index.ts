import * as dotenv from 'dotenv';
dotenv.config();

import server from "./app";
const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});