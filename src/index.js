
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/api/usuarios', require('./routes/usuarios'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});