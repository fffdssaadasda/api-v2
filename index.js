/* Packages And Varibles */
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProjectRouter from "./routes/projectRoutes.js"; 

dotenv.config({});
export const app = express();
const dataBase = process.env.DB.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);
/* Packages And Varibles */

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
/* DB Connection */
mongoose
  .connect(dataBase)
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log(err));

/* DB Connection */

/* Middlewares */
app.use(express.json());
app.use(express.static("static"));
app.use("/projects", ProjectRouter);
//- Global Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(404).json(err);
});
//- Global Error Handling Middleware

/* Middlewares */

const server = app.listen(process.env.PORT, () =>
  console.log("app listening to port")
);
 
/* Catch Server Errors */
server.on("error", (err) => {
  console.log(err);
  server.close();
});
/* Catch Server Errors */
// export default app;
