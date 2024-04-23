import { cargar_productos } from "./cargar_productos.js";

let lista_productos;

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        lista_productos = data;
        
        //Mi programa
        cargar_productos(lista_productos);



    });