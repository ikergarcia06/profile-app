const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());

// Página raíz
app.get('/', (req, res) => {
    res.send('Inicio del sistema de perfiles');
});

// Rutas de la app
app.use('/panel', profileRoutes);

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});
