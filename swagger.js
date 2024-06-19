const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Mock Server',
      version: '1.0.0',
      description: 'Mock API for testing',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Asegúrate de apuntar al puerto donde corre tu servidor Express
      },
    ],
  },
  apis: ['./routes/*.js'], // Rutas de tu API
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
