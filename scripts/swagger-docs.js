const swaggerJsdoc = require('swagger-jsdoc');
const express = require('express');
const fs = require('fs');

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hospital portal',
      version: '1.0.0',
      description: 'API documentation for Lattice innovation Assignment',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);


const swaggerJsonPath = './swagger.json';
fs.writeFileSync(swaggerJsonPath, JSON.stringify(specs, null, 2));

console.log(`Swagger specification saved to ${swaggerJsonPath}`);
