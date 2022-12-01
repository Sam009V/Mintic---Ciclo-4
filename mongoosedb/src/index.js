const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.send('welcome to my api');
})
const port = process.env.port ||8000;
app.listen (port, () => console.log('port is rinning on', port));

const userRoutes = require('./routes/users');
app.use(express.json);
app.use('/api', userRoutes);


require('dotenv').config();


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mintic_ciclo4_dev:3014373748Sd@mintic-ciclo4.pcxqpan.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('conectado a la base de datos'))
.catch((error) => console.log(error));

