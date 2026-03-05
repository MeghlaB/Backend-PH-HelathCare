import express, { Application } from "express";
const app: Application = express();

const bootstrap = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);

    })
  } catch (error) {
    console.log(error)
  }
}


bootstrap()