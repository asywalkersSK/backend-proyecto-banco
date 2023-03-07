const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const usuarios = require('../sample.json');

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.post('/', (req, res) => {
    const id = usuarios.length + 1;
    const { nombre_completo, numero_credito, parcialidad, monto } = req.body;
    const nuevoUsuario = { ...req.body, id };
    if (id) {  //&& nombre_completo && numero_credito && parcialidad && monto para usar el select
        usuarios.push(nuevoUsuario);
        res.json(usuarios);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre_completo, numero_credito, parcialidad1,parcialidad2,parcialidad3,parcialidad4, monto,cuenta_liquidada } = req.body;

        _.each(usuarios, (user) => {
            if (user.id == id) {
                user.nombre_completo = nombre_completo;
                user.numero_credito = numero_credito;
                user.parcialidad1= parcialidad1;
                user.parcialidad2= parcialidad2;
                user.parcialidad3= parcialidad3;
                user.parcialidad4= parcialidad4;
                user.monto = monto;
                user.cuenta_liquidada=cuenta_liquidada
            }
        });
        res.json(usuarios);
   
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(usuarios, (usuario, i) => {
            if (usuario.id == id) {
                usuarios.splice(i, 1);
            }
        });
        res.json(usuarios);
    }
});

module.exports = router;