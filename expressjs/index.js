const express = require('express');
const app = express();
const morgan = require('morgan');

//SETTINGS
app.set('appName', 'Express tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));


//ROUTS
app.all('/user', (req, res, next) => {
    console.log('por aqui paso');
    next();
});

app.get('/', (req, res) => {
    const data = [{name:'Camilo'}, {name: 'Ramiro'}, {name: 'Sebastian'}, {name: 'Lola'}];  
    res.render('index.ejs', {people: data});
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Camilo',
        lastname: 'Erb'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('PETICION POST');
});


app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`Usuario ${req.params.id} actualizado`);
});

app.delete('/user/:userID', (req, res) => {
    res.send( `Usuario ${req.params.userID} ha sido eliminado`);
});


app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
}); 




