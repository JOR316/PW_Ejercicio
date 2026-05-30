import 'dotenv/config';
import app from '../src/app.js';
const port = process.env.PORT || 4000;

app.listen(port, () => {

    console.log(`Servidor ejecutándose en http://localhost:${port}`);
    console.log(`Documentación disponible en http://localhost:${port}/docs`);

});