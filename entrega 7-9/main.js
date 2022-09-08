let presupuesto = parseFloat(prompt("Ingrese el monto máximo que dispone para el pasaje. Nosotros le mostraremos los destinos a su alcance:"));

const destinos = [
    {id: 1, nombre: "Bariloche", precio: 40000},
    {id: 2, nombre: "Cordoba", precio: 30000},
    {id: 3, nombre: "Mendoza", precio: 35000},
    {id: 4, nombre: "Neuquen", precio: 33000},
    {id: 5, nombre: "Mar del Plata", precio: 15000},
    {id: 6, nombre: "Ushuaia", precio: 60000},
];


    const enPresupuesto = destinos.filter(element =>{
        return element.precio <= presupuesto
    })


console.log(enPresupuesto);