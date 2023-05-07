// Estas funciones son útiles en situaciones en las que se desea pasar una función como argumento a otra función, como en el caso de las devoluciones de llamada (callbacks).  Las funciones anónimas ayudan a evitar la contaminación del espacio de nombres, ya que no se les asigna un nombre específico.

setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
);


setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
);


setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
);
