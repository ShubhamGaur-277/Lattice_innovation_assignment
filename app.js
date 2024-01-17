require('dotenv').config();
const express = require("express");
const patientRoutes = require("./modules/patient/routes/patient.routes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/patients', patientRoutes);

app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(3000,()=>{console.log("http://localhost:3000");})