const url = 'https://api.github.com/users/yass-brenda/repos?per_page=6';
let page=1;

fetch(url)
    .then(response => response.json())
    .then(data => recorrer_arreglo(data));


function recorrer_arreglo(array){
    for (let i=0;i<array.length;i++){
        let contenedor_lista = document.getElementById("lista")
        let div = document.createElement('div')
        div.className += ' items_lista';
        div.textContent= array[i].name
        div.textContent= array[i].description
        div.textContent= array[i].svn_url
        div.textContent= array[i].languages_url
        div.textContent= array[i].created_at
        contenedor_lista.appendChild(div)
    }
}

function boton_anterior(){
    console.log("anterior")
    fetch(url)
        .then(response =>{
            page -= 1;
            console.log(page)
            console.log(url)
            return  page <=1 ? url : `${url}&page=${page}`
        })
        .then(url => devolver_api(url));

}

function boton_siguiente(){
    console.log("siguiente")
    fetch(url)
        .then(response =>{
            page += 1;
            console.log(page)
            console.log(url)
        return `${url}&page=${page}`})
        .then(url => devolver_api(url));
}

function devolver_api(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            limpiar()
            recorrer_arreglo(data)}
            );
}

function limpiar(){
    let contenedor_lista = document.getElementById("nombre");
    while (contenedor_lista.firstChild) {
        contenedor_lista.removeChild(contenedor_lista.firstChild);
    }
}