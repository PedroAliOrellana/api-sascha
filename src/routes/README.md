# Informacion sobre las rutas

Informacion sobre el contenido manejado sobre cada rutas de la api-sascha

# Tabla de contenido 
* [Host | Port](#host-port)
* [Modelo Generico](#modelo-generico)
* [Usuarios](#usuarios)
* [Servicios](#servicios)
* [Promociones](#promociones)
* [Dietas](#dietas)
* [Tipo Dietas](#tipo-dietas)
* [Tipo Citas](#tipo-citas)
* [Tipo Criterios](#tipo-criterios)
* [Tipo Incidencias](#tipo-incidencias)
* [Tipo Motivos](#tipo-motivos)
* [Tipo Ordenes](#tipo-ordenes)
* [Tipo Parametros](#tipo-parametros)
* [Tipo Respuestas](#tipo-respuestas)
* [Tipo Unidades](#tipo-unidades)
* [Tipo Valoraciones](#tipo-valoraciones)
* [Unidades](#unidades)
* [Suplementos](#suplementos)
* [Ejercicios](#ejercicios)

# Host | Port

Local con http://localhost:5000/
Heroku con http://api-sascha.heroku.com/

# Usuarios

```
 ├──/
 	├─GET────/usuarios 			* Retorna todos.
    ├─POST───/usuarios 			* Guarda.
    ├─GET────/usuario/:id 		* Retorna por id.
    ├─PUT────/usuario/:id 		* Actualiza.
    ├─DELETE─/usuario/:id 		* Elimina.
	├─JSON 200
	├──{
    		"error": false,
    		"data": []
	}
 ├─POST───/usuarios
    ├─JSON 200
    ├──{
    }
 ├─POST───/login             * Inicia de session.
    ├─JSON 200
    ├──{
            "error": false,
            "data": [{
                mensaje: 'Inicio de sesión exitoso',
                token: service.createToken(usuario)
            }]
    }
```

# Servicios

```
    ├─GET────/servicios 		* Retorna todos.
    ├─POST───/servicios 		* Guarda. 
    ├─GET────/servicio/:id 		* Retorna por id.
    ├─PUT────/servicio/:id 		* Actualiza.
    ├─DELETE─/servicio/:id 		* Elimina.
	├─JSON 200
	├──{
        "error": false,
        "data": [
            {
                "id_servicio": 1,
                "id_plan_dieta": 1,
                "id_plan_ejercicio": 1,
                "id_plan_suplemento": 1,
                "nombre": "nombre del servicio",
                "descripcion": "descripcion del servicio",
                "url_imagen": "url de la imagen",
                "precio": 34,
                "numero_visita": 5,
                "fecha_creacion": "2018-04-06T04:00:00.000Z",
                "fecha_actualizacion": "2018-05-06T04:00:00.000Z",
                "estatus": 1,
                "plan_dieta": {
                    "id_plan_dieta": 1,
                    "id_tipo_dieta": 1,
                    "nombre": "plan dieta",
                    "descripcion": "descripcion",
                    "fecha_creacion": "2018-02-05T04:00:00.000Z",
                    "fecha_actualizacion": "2018-04-05T04:00:00.000Z",
                    "estatus": 1,
                    "tipo_dieta": {
                        "id_tipo_dieta": 1,
                        "nombre": "tipo dieta",
                        "fecha_creacion": "2018-04-02T04:00:00.000Z",
                        "fecha_actualizacion": "2018-05-02T04:00:00.000Z",
                        "estatus": 1
                    }
                },
                "plan_ejercicio": {
                    "id_plan_ejercicio": 1,
                    "nombre": "ejercicio",
                    "descripcion": "descripcion",
                    "fecha_creacion": "2018-05-04T04:00:00.000Z",
                    "fecha_actualizacion": "2018-06-08T04:00:00.000Z",
                    "estatus": 1
                },
                "plan_suplemento": {
                    "id_plan_suplemento": 1,
                    "nombre": "suplemento",
                    "descripcion": "descripcion",
                    "fecha_creacion": "2018-07-04T04:00:00.000Z",
                    "fecha_actualizacion": "2018-07-09T04:00:00.000Z",
                    "estatus": 1
                }
            }
        ]
    }
```

# Promociones

```
    ├─GET────/promociones        * Retorna todos.
    ├─POST───/promociones        * Guarda. 
    ├─GET────/promocion/:id      * Retorna por id.
    ├─PUT────/promocion/:id      * Actualiza.
    ├─DELETE─/promocion/:id      * Elimina.
    ├─JSON 200
    ├──{
    "error": false,
    "data": [
        {
            "id_promocion": 1,
            "nombre": "",
            "descripcion": "",
            "url_imagen": "",
            "precio": 70,
            "fecha_creacion": "",
            "fecha_actualizacion": "",
            "estatus": 1
            }
        ]
    }
```

# Dietas

```
    ├─GET────/dietas         * Retorna todos.
    ├─POST───/dietas         * Guarda. 
    ├─GET────/dieta/:id      * Retorna por id.
    ├─PUT────/dieta/:id      * Actualiza.
    ├─DELETE─/dieta/:id      * Elimina.
    ├─JSON 200
    ├──{
        "error": false,
        "data": [{
            "id_plan_dieta": 1,
            "id_tipo_dieta": 1,
            "nombre": "plan dieta",
            "descripcion": "descripcion",
            "fecha_creacion": "2018-02-05T04:00:00.000Z",
            "fecha_actualizacion": "2018-04-05T04:00:00.000Z",
            "estatus": 1,
            "tipo_dieta": {
                "id_tipo_dieta": 1,
                "nombre": "tipo dieta",
                "fecha_creacion": "2018-04-02T04:00:00.000Z",
                "fecha_actualizacion": "2018-05-02T04:00:00.000Z",
                "estatus": 1
            }
        }]
    }
```

# Tipo Dietas

```
    ├─GET────/tipodietas         * Retorna todos.
    ├─POST───/tipodietas         * Guarda. 
    ├─GET────/tipodieta/:id      * Retorna por id.
    ├─PUT────/tipodieta/:id      * Actualiza.
    ├─DELETE─/tipodieta/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipodietas)

# Tipo Citas

```
    ├─GET────/tipocitas         * Retorna todos.
    ├─POST───/tipocitas         * Guarda. 
    ├─GET────/tipocita/:id      * Retorna por id.
    ├─PUT────/tipocita/:id      * Actualiza.
    ├─DELETE─/tipocita/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipocitas)

# Tipo Criterios

```
    ├─GET────/tipocriterios         * Retorna todos.
    ├─POST───/tipocriterios         * Guarda. 
    ├─GET────/tipocriterio/:id      * Retorna por id.
    ├─PUT────/tipocriterio/:id      * Actualiza.
    ├─DELETE─/tipocriterio/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipocriterios)

# Tipo Incidencias

```
    ├─GET────/tipoincidencias         * Retorna todos.
    ├─POST───/tipoincidencias         * Guarda. 
    ├─GET────/tipoincidencia/:id      * Retorna por id.
    ├─PUT────/tipoincidencia/:id      * Actualiza.
    ├─DELETE─/tipoincidencia/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipoincidencias)

# Tipo Motivos

```
    ├─GET────/tipomotivos         * Retorna todos.
    ├─POST───/tipomotivos         * Guarda. 
    ├─GET────/tipomotivo/:id      * Retorna por id.
    ├─PUT────/tipomotivo/:id      * Actualiza.
    ├─DELETE─/tipomotivo/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipomotivos)

# Tipo Ordenes

```
    ├─GET────/tipoordenes         * Retorna todos.
    ├─POST───/tipoordenes         * Guarda. 
    ├─GET────/tipoorden/:id       * Retorna por id.
    ├─PUT────/tipoorden/:id       * Actualiza.
    ├─DELETE─/tipoorden/:id       * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipoordenes)

# Tipo Parametros

```
    ├─GET────/tipoparametros       * Retorna todos.
    ├─POST───/tipoparametros       * Guarda. 
    ├─GET────/tipoparametro/:id    * Retorna por id.
    ├─PUT────/tipoparametro/:id    * Actualiza.
    ├─DELETE─/tipoparametro/:id    * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipoparametros)

# Tipo Respuestas

```
    ├─GET────/tiporespuestas       * Retorna todos.
    ├─POST───/tiporespuestas       * Guarda. 
    ├─GET────/tiporespuesta/:id    * Retorna por id.
    ├─PUT────/tiporespuesta/:id    * Actualiza.
    ├─DELETE─/tiporespuesta/:id    * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tiporespuestas)

# Tipo Unidades

```
    ├─GET────/tipounidades        * Retorna todos.
    ├─POST───/tipounidades        * Guarda. 
    ├─GET────/tipounidad/:id      * Retorna por id.
    ├─PUT────/tipounidad/:id      * Actualiza.
    ├─DELETE─/tipounidad/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipounidades)

# Tipo Valoraciones

```
    ├─GET────/tipovaloraciones     * Retorna todos.
    ├─POST───/tipovaloraciones     * Guarda. 
    ├─GET────/tipovaloracion/:id   * Retorna por id.
    ├─PUT────/tipovaloracion/:id   * Actualiza.
    ├─DELETE─/tipovaloracion/:id   * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/tipovaloraciones)

# Unidades

```
    ├─GET────/unidades        * Retorna todos.
    ├─POST───/unidades        * Guarda. 
    ├─GET────/unidad/:id      * Retorna por id.
    ├─PUT────/unidad/:id      * Actualiza.
    ├─DELETE─/unidad/:id      * Elimina.
```
[[ver json]](https://api-sascha.herokuapp.com/unidades)

# Suplementos

```
    ├─GET────/suplementos         * Retorna todos.
    ├─POST───/suplementos         * Guarda. 
    ├─GET────/suplemento/:id      * Retorna por id.
    ├─PUT────/suplemento/:id      * Actualiza.
    ├─DELETE─/suplemento/:id      * Elimina.
    ├─JSON 200
    ├──{

    }
```

# Ejercicio

```
    ├─GET────/ejercicios         * Retorna todos.
    ├─POST───/ejercicios         * Guarda. 
    ├─GET────/ejercicio/:id      * Retorna por id.
    ├─PUT────/ejercicio/:id      * Actualiza.
    ├─DELETE─/ejercicio/:id      * Elimina.
    ├─JSON 200
    ├──{
    "error": false,
    "data": [
        {
            "msg": "Registro Creado"
        }
    ]}
```

# Modelo Generico

```
    ├─GET────/objeto          * Retorna todos.
    ├─POST───/objeto          * Guarda. 
    ├─GET────/objeto/:id      * Retorna por id.
    ├─PUT────/objeto/:id      * Actualiza.
    ├─DELETE─/objeto/:id      * Elimina.


 ├─GET────/objetos
    ├─JSON 200
    ├──{
        "error": false,
        "data": [{
            "dato":"volor"
        }]
    }
 ├─POST───/objetos
    ├─JSON 200
    ├──{
    "error": false,
    "data": [
        {
            "msg": "Registro Creado"
        }
    ]}
 ├─GET────/objetos/1
    ├─JSON 200
    ├──{
        
    }
    ├─JSON 400
        ├──´´[{
            "error": true,
        "data": [ msg:"" ]
    }]
├─PUT───/objeto/1
    ├─JSON 200
    ├──{
    "error": false,
    "data": [
        {
            "msg": "Registro actualizado"
        }
    ]}
├─PUT───/objeto/1
    ├─JSON 200
    ├──{
    "error": false,
    "data": [
        {
            "msg": "Registro eliminado"
        }
    ]}
```

