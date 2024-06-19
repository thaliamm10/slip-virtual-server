// app.js
const express = require('express');
const setupSwagger = require('./swagger');
const solicitudRoutes = require('./routes/solicitud');

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Incluir rutas
app.use('/api', solicitudRoutes);

// Configurar Swagger
setupSwagger(app);

// Iniciar el servidor
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
