const datosPersonales = {
    nombre : "Roller",
    apellido : "Sosa",
    edad : 32,
    altura : 193,
    isDev : true
}

const edad = datosPersonales.edad
console.log(edad)

const listaDatos = [
    {   nombre : "Pancho",
        apellido : "Villa",
        edad : 30,
        altura : 181,
        isDev : false },
    {
        nombre : "Paco",
        apellido : "Villa",
        edad : 35,
        altura : 178,
        isDev : true }
];

const totalDatos = listaDatos.concat(datosPersonales)
console.log(totalDatos);

const totalEdad = totalDatos.sort((x, y) => y.edad - x.edad)
console.log(totalDatos)
