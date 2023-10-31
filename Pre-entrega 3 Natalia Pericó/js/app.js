document.addEventListener("DOMContentLoaded",cargaInicial);

function cargaInicial(){
    cargarCarritoEnLocalStorage();
    VerProductos();
    VerCarrito();
}

//Array Productos

const Catalogo = [
    {
        "id": 1,
        "name": "Polera Blanca",
        "img":"https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":10000,
    },
    {
        "id": 2,
        "name": "Polera Negra",
        "img":"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":9000,
    },
    {
        "id": 3,
        "name": "Polera Roja",
        "img":"https://images.unsplash.com/photo-1619735007512-34004ec2f348?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":25000,
    },
    {
        "id": 4,
        "name": "Polera Gris",
        "img":"https://images.unsplash.com/photo-1529429649738-cf96fc78378b?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":25000,
    },
    {
        "id": 5,
        "name": "Polera Amarilla",
        "img":"https://plus.unsplash.com/premium_photo-1693161217771-fe5476a38014?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":5000,
    },
    {
        "id": 6,
        "name": "Polera Verde",
        "img":"https://plus.unsplash.com/premium_photo-1690347838523-d35c74ccefb0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D7771-fe5476a38014?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description":"Polera de algodón",
        "price":5000,
    },
]

let Carrito=[]

function VerProductos(){
    const $tienda=document.getElementById("tienda");

    Catalogo.forEach((p)=>{

        let producto = document.createElement('div')
        producto.classList.add("card");

        producto.innerHTML= `
            <img class="card" src="${p.img}" alt="">
            <h5>${p.name}</h5>
            <p>${p.description}</p>
            <p>${p.price}</p>
            <button
            id="${p.id}">Añadir al carrito</button>`

            $tienda.appendChild(producto);

            producto.querySelector('button').addEventListener('click', ()=>{
                agregarAlCarrito(p.id);
        
            })
            
        }) 
    }

    VerProductos();

    function agregarAlCarrito (id){

        let producto= Catalogo.find(producto=>producto.id == id);

        let productoEnCarrito = Carrito.find (producto => producto.id == id)

        if(productoEnCarrito){
            productoEnCarrito.cantidad++;
        }else{
            producto.cantidad = 1 ;
            Carrito.push(producto);
        }
        
        VerCarrito();
        guardarCarritoEnLocalStorage();

    }

function VerCarrito(){
    
    const $carrito =document.getElementById("carrito");

    $carrito.innerHTML = '';
    
    Carrito.forEach((p , index)=>{

        let producto = document.createElement('div')
        producto.classList.add("card");

        producto.innerHTML= `
            <img class="card" src="${p.img}" alt="">
            <h5>${p.name}</h5>
            <p>${p.description}</p>
            <p>${p.cantidad}</p>
            <p>${p.price}</p>
            <button
            id="${p.id}">Eliminar del carrito</button>`

            $carrito.appendChild(producto);

            producto.querySelector('button').addEventListener('click', ()=>{
                eliminarProductoDelCarrito(index);

            })            
        }) 
}

function eliminarProductoDelCarrito(indice) {

    Carrito[indice].cantidad--;

    if(Carrito[indice].cantidad === 0){
        Carrito.splice(indice, 1);
    }
    VerCarrito();
    guardarCarritoEnLocalStorage();

}

function guardarCarritoEnLocalStorage (){
    localStorage.setItem ('carrito',JSON.stringify(Carrito));
}

/*function cargarCarritoEnLocalStorage(){

    if(localStorage.getItem('carrito')!==null){
        Carrito=JSON.parse (localStorage.getItem('carrito'));
    } else {
        Carrito= [];
    }
}*/