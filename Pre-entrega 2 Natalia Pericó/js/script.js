
alert('¡Hola te damos la bienvenida a tienda Técnica Taller! \n Por favor ingresa tus datos para comenzar a comprar');


let User = "nombre";
let Pass = "1234";

function login(){
    let access =false;

    let userName = prompt ("Ingresa tu nombre de usuario.");
    while (userName != User){
        alert("No se encuentra registrado.");
        userName = prompt ("Ingresa tu nombre de usuario.");
    }

    let intentos = 3;
    for (let i = intentos ; i > 0 ; i--) {
        let userPass = prompt ("Ingresa tu contraseña para ingresar. Tienes "+i+" intentos.")
        if (userPass === Pass){
            alert("Nos alegra tenerte de vuelta :)");
            access = true;
            break;
        }else{
            alert("Contraseña incorrecta, te quedan "+(i-1)+" intentos.")
        }
    }
    return access;
}
if (login()) {
    
    menu();

}else{
    alert("Error en tu contraseña, intenta de nuevo más tarde.")
}

//MENU INICIAL

alert ('Conoce nuestra tienda');

const menuOptions = [
    { numero:"1", nombre:"Ver lista de productos.", function: menuProductos},
    { numero:"2", nombre:"Cerrar sesión",function: null}
];

const menu = () => {
    let options = "";
    for (const option of menuOptions) {
        options += `${option.numero} - ${option.nombre} \n`;
    }
    const selectOption = prompt (`Selecciona una opción: \n ${options}`)
    
    const selection = menuOptions.find(option => option.numero === selectOption);

    if(selection) {
        
        if(selection.function) {
            selection.function();
        } else {
            alert (`Seleccionaste: ${selection.nombre}`);
        }
        if (selection.numero !== "2") {
            menu();
        } else {
            alert("Vuelve pronto!");
        }
    } else {
        alert('Elegiste una opción inválida. Por favor intenta otra vez.');
        menu();
    }
}
menu();

// ARRAY DE MOSTRAR PRODUCTOS

const opcionesProductos = [
    {numero: "1" , nombre: 'Polera', precio: 9000},
    {numero: "2" , nombre: 'Polerón', precio: 20000},
    {numero: "3" , nombre: 'Bolso', precio: 15000},
    {numero: "4" , nombre: 'Monedero', precio: 5000},
    {numero: "5" , nombre: 'Salir', precio: 0}

];

const menuProductos = ( ) => {
    let opciones = "";
        for (const option of opcionesProductos) {
            opciones += `\n ${option.numero} - ${option.nombre} - ${option.precio}` ;
        }
        const seleccionarOpcion = prompt(`Escoga el número del producto que desea comprar : \n ${opciones} `);

        const seleccion = seleccionarOpcion.find (opcion => opcion.numero === seleccionarOpcion);

        if (seleccion) {

            if (seleccion.function) {
            seleccion.function();
            } else {
            alert(`Ya se encuentra en tu carrito: ${seleccion.nombre}`);
            }
            if (seleccion.numero !== "5") {
            menu();
            } else {
            alert('Hasta luego, vuelve pronto.');
            }
            } 
            else {
            alert('Por favor, selecciona una opcion correcta.');
            menu();
        }
    }
menuProductos();




//FUNCIÓN PAGAR

let tarjeta = '343434';
function pagarProductos(){
    let pagar = false;
    let intentos = 3;
    for(let i =intentos; i > 0 ;i--){
        let usuario = prompt ('Ingresa el número de tu tarjeta. Recuerda que solo son  ' +i+ ' intentos ');
        if( usuario === tarjeta){
            alert('Número de tarjeta correcto / Compra realizada');
            pagar = true;
            break;
        }else {
            alert('Error. Te quedan  ' + (i-1) +  ' intentos ')
        }
    }

}
pagarProductos();


alert('Gracias por visitarnos!! Saludos Técnica Taller');