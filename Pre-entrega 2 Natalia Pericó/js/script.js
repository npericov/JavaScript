const opcionesProductos = [
  { id: "1", nombre: "Polera", precio: 9000 },
  { id: "2", nombre: "Polerón", precio: 20000 },
  { id: "3", nombre: "Bolso", precio: 15000 },
  { id: "4", nombre: "Monedero", precio: 5000 },
];

alert(
  "¡Hola te damos la bienvenida a tienda Técnica Taller! \n Por favor ingresa tus datos para comenzar a comprar"
);

let User = "nombre";
let Pass = "1234";

function login() {
  let access = false;

  let userName = prompt("Ingresa tu nombre de usuario.");
  let a = 0;
  while (userName != User) {
    alert("No se encuentra registrado.");
    userName = prompt("Ingresa tu nombre de usuario.");
  }

  let intentos = 3;
  for (let i = intentos; i > 0; i--) {
    let userPass = prompt(
      "Ingresa tu contraseña para ingresar. Tienes " + i + " intentos."
    );
    if (userPass === Pass) {
      alert("Nos alegra tenerte de vuelta :)");
      access = true;
      break;
    } else {
      alert("Contraseña incorrecta, te quedan " + (i - 1) + " intentos.");
    }
  }
  return access;
}
if (login()) {
  menu();
} else {
  alert("Error en tu contraseña, intenta de nuevo más tarde.");
}

//MENU INICIAL

function menu() {
  alert("Conoce nuestra tienda");
  const selectOption = prompt(`    
        seleccione una opción:
        1.-ver lista de productos
        2.-cerrar sesión    
    `);

  if (selectOption == "1") {
    menuProductos();
  } else {
    alert("Se cerro tu sesión, Vuelve pronto!");
  }
}
//menu();

// ARRAY DE MOSTRAR PRODUCTOS

function menuProductos() {
  let mensaje = "Seleccione un número para cada producto o cero para salir \n";
  let mensajeProductos = "Ya se encuentra en tu carrito";
  opcionesProductos.forEach((producto) => {
    mensaje +=
      producto.id + ".-" + producto.nombre + "=>" + producto.precio + "\n";
  });
  let seleccionarOpcion = prompt(mensaje);
  while (!esNumeroValido(seleccionarOpcion)) {
    alert("Ingrese un número valido del 1 al 4");
    seleccionarOpcion = prompt(mensaje);
  }
  const busquedaProducto = opcionesProductos.find(
    (producto) => producto.id === seleccionarOpcion
  );
  if (seleccionarOpcion){
      alert(`Tu producto ya se encuentra en el carrito:
        ${busquedaProducto.nombre} $${busquedaProducto.precio}
      `);
      pagarProductos();
  }
}
function esNumeroValido(n) {
  return n == "1" || n == "2" || n == "3" || n == "4";
}

//FUNCIÓN PAGAR


function pagarProductos() {
  let tarjeta = "343434";
  let pagar = false;
  let intentos = 3;
  for (let i = intentos; i > 0; i--) {
    let usuario = prompt(
      "Ingresa el número de tu tarjeta. Recuerda que solo son  " +
        i +
        " intentos "
    );
    if (usuario === tarjeta) {
      alert("Número de tarjeta correcto / Compra realizada");
      pagar = true;
      break;
    } else {
      alert("Error. Te quedan  " + (i - 1) + " intentos ");
    }
  }
}

alert("Gracias por visitarnos!! Saludos Técnica Taller");
