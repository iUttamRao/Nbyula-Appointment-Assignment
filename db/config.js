const mongoose = require('mongoose');

const dbUrl = process.env.DBURL || "mongodb://localhost:27017/nybula";

mongoose.connect(dbUrl).then(() => {
  console.log("DATABASE CONNECTED!!");
})
.catch((err) => {
  throw err;
});