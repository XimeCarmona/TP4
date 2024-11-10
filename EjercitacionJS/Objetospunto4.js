//Crea un objeto producto con propiedades como nombre, precio y
//disponible. Usa un bucle for...in para imprimir todas las propiedades y sus valores.

const producto = {
    nombre: 'product',
    precio: '$0000',
    disponible: true,
}

for (let propiedad in producto){
    console.log(`${propiedad}: ${producto[propiedad]}`)
}