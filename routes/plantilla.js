// routes/solicitud.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * @swagger
 * /api-slipsautomaticos/slip/solicitud/plantilla/{id}:
 *   get:
 *     summary: Obtener detalle de solicitud de plantilla
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la solicitud de plantilla
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Solicitud de plantilla obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2024-00561-ROB"
 *                 status:
 *                   type: string
 *                   example: "approved"
 *                 amount:
 *                   type: integer
 *                   example: 1000
 *       500:
 *         description: Error al obtener la solicitud de plantilla
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Error fetching data from Mountebank'
 */

router.get('/api-slipsautomaticos/slip/solicitud/plantilla/:id', async (req, res) => {
  try {
    // Obtener el ID de los parámetros de la ruta
    const { id } = req.params;
    
    // Realizar la solicitud al servicio mock en Mountebank
    const response = await axios.get(`http://localhost:3000/api-slipsautomaticos/slip/solicitud/plantilla/${id}`);
    
    // Registrar la respuesta en la consola
    console.log(response.data);
    
    // Responder al cliente con el estado y datos obtenidos
    res.status(response.status).json(response.data);
  } catch (error) {
    // Manejar errores y responder con un mensaje apropiado
    console.error(error);
    res.status(500).json({ error: 'Error fetching data from Mountebank' });
  }
});

module.exports = router;
