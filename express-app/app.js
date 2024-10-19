import express from 'express';

//Crear una instancia de Express
const app = express();

//Configurar el puerto en el que el servidor escuchara
const puerto = 3000;

//Ruta basica
app.get('/', (req, res) => {
    res.send('Hola mundo desde Express');
});

//Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`);
    
});

//Ruta GET para el home
//solicitud http://localhost:3000/

app.get('/home', (req, res) => {
    res.send('Bienvenido a la pagina de inicio');
    
});

//Ruta GET para recibir datos simples
//solicitud http://localhost:3000/datos

app.get('/datos', (req, res) => {
    res.send('Hola, soy un dato simple');
});

//Ruta Get con parametro de ruta
//solicitud http://localhost:3000/user/123

app.get('/user/:id', (req, res) =>{
    const userId = req.params.id;
    res.send(`Hola, soy el usuario ${userId}`)
});

//Ruta GET con multiples parametros
//solicitud http://localhost:3000/search?q=javascript

app.get('/search',(req, res)=>{
    const query = req.query.q;
    res.send(`Hola, soy el resultado de la busqueda por ${query}`);
});

//Ruta GET con multiples parametros de consulta
//solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50

app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Hola, soy el resultado de la busqueda por ${type}, con un rango de precios. ${minPrice}-${maxPrice}`);
});

