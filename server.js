const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Inicio del sistema de perfiles');
});

// Rutas del panel
app.use('/panel', profileRoutes);

// Puerto dinámico para Railway o 3000 local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});