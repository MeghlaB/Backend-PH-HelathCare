import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000; // The port your express server will be running on.





const bootstrap=()=>{
  try{
    app.listen(5000,()=>{
      console.log(`Server is running on http://localhost:5000`);

    })
  }catch(error){

  }
}


bootstrap()