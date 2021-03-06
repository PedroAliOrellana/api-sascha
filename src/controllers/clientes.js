'use strict';

const ViewClientes  = require('../collections/v_clientes');
const ViewCliente   = require('../models/v_cliente');
const Bookshelf     = require('../commons/bookshelf');
const service       = require("../services");

function getClientes(req, res, next) {
	ViewClientes.query({})
	.fetch({ columns: ['id_cliente', 'cedula', 'nombres', 'apellidos', 
						'telefono', 'genero', 'estado_civil', 'direccion', 
						'fecha_nacimiento', 'tipo_cliente', 'estado', 'rango_edad'] })
	.then(function(clientes) {
		if (clientes.length == 0)
			return res.status(404).json({ 
				error: true, 
				data: { mensaje: 'No hay clientes registrados' } 
			});

		return res.status(200).json({
			error: false,
			data: clientes
		});
	})
	.catch(function (err) {
     	return res.status(500).json({
			error: true,
			data: { mensaje: err.message }
		});
    });
}


function getClienteById(req, res, next) {
	const id = Number.parseInt(req.params.id);
	if (!id || id == 'NaN') 
		return res.status(400).json({ 
			error: true, 
			data: { mensaje: 'Solicitud incorrecta' } 
		});

	ViewCliente.forge({ id_cliente: id })
	.fetch({ columns: ['id_cliente', 'cedula', 'nombres', 'apellidos', 
						'telefono', 'genero', 'estado_civil', 'direccion', 
						'fecha_nacimiento', 'tipo_cliente', 'estado', 'rango_edad'] })
	.then(function(cliente) {
		if(!cliente) 
			return res.status(404).json({ 
				error: true, 
				data: { mensaje: 'Cliente no encontrado' } 
			});
		return res.status(200).json({ 
			error: false, 
			data: cliente  
		});
	})
	.catch(function(err){
		return res.status(500).json({ 
			error: false, 
			data: { mensaje: err.message } 
		})
	});
}


module.exports = {
	getClientes,
	getClienteById
}