const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./src/routes/route");
const connectDB = require("./src/db/dbconnect");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
module.exports = app;
app.use(cors())
app.use(routes);
dotenv.config({
  path: ".env",
});
const PORT = process.env.PORT || 3000
connectDB();
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

