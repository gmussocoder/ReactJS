/*Esto es lo correspondiente al desafío de la clase 5*/
import React, { useEffect, useState } from "react";
function Showproducto () {
    const [datos, setDatos] = useState([]);

  useEffect(() => {
    let isOk = true;
    const data = [
        {
            id: 1,
            name: "Monitoreo de Entorno",
            devices: 10,
            cost: 20,
        },
        {
            id: 2,
            name: "Macromedición de Agua",
            devices: 20,
            cost: 30,
        },
        {
            id: 3,
            name: "Monitoreo de Transformadores",
            devices: 30,
            cost: 40,
        },
    ];
    let mostrarDatos= (data) => {
      return data;
    }
    let consultaDatos = (time, task) => {
      return new Promise((resolve, reject) => {
        if (isOk) {
          setTimeout(() => {
            resolve(task)
          }, time);
        } 
        else {
          reject("Error")
        }
      });
    }
    consultaDatos(2000, mostrarDatos(data))
     /* .then(respuesta => console.log(respuesta)) */
      .then(respuesta => setDatos(respuesta))
      .catch(error => console.log(error))

  }, [])
    return (
        <>
        {
            datos.map(producto => (
                <div>
                    <div>ID: {producto.id}</div>
                    <div>NOMBRE: {producto.name}</div>
                    <div>DISPOSITIVOS: {producto.devices}</div>
                    <div>PRECIO: {producto.cost}</div>
                </div>
            ))
        }
        </>
    )
}
export default Showproducto;