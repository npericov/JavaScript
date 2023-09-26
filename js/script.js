
let nombre= prompt('Hola ¿cuál es tu nombre?');
function saludo(nombre){
    alert('¡Hola, '+nombre+ ' te damos la bienvenida a tienda Técnica Taller!');
}
saludo(nombre);

let option = prompt('Puedes escoger entre las siguientes opciones de compra:\n1 - Polera Roja \n2 - Polera Azul  \n3 - Polera Negra ');
let poleraRoja = 5000;
let poleraAzul = 6000;
let poleraNegra = 4000;

function escogerProductos(){
    switch (option) {
        case '1':
            let roja = prompt ('¿Quieres agregar al carrito una Polera Roja? su precio es $' + poleraRoja +':\n1 - Si \n2 - No');
                if (roja == 1){
                    alert ('Tu compras es por $ ' + poleraRoja );
                    }
                    else {
                        alert ('Vuelve cuando quieres, te esperamos :)');
                    }
                    break;
        case '2':
            let azul = prompt ('¿Quieres agregar al carrito una Polera Azul? su precio es $' + poleraAzul +':\n1 - Si \n2 - No');
                if (azul == 1){
                    alert ('Tu compras es por $ ' + poleraAzul );
                    }
                    else {
                        alert ('Vuelve cuando quieres, te esperamos :)');
                    }
                    break;
        case '3':
            let negra = prompt ('¿Quieres agregar al carrito una Polera Negra? su precio es $' + poleraNegra +':\n1 - Si \n2 - No');
                if (negra == 1){
                    alert ('Tu compras es por $ ' + poleraNegra );
                    }
                    else {
                        alert ('Vuelve cuando quieres, te esperamos :)');
                        }
                    break;        
                }
            }

escogerProductos();



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


