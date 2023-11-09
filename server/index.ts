import * as dotenv from 'dotenv';
dotenv.config();

const server = require("./app");
const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});