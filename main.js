const url = 'https://api.github.com/users/yass-brenda/repos?per_page=10&page=1';


fetch(url)
    .then(response => response.json())
    .then(data => recorrer_arreglo(data));


function recorrer_arreglo(array){
    for (let i=0;i<array.length;i++){
        let div1 = document.getElementById("nombre")
        let div = document.createElement('div')
        div.textContent= array[i].name
        div1.appendChild(div)
        console.log(array[i].per_page)
    }
}

function boton_anterior(url){
    let parametros = url.location.search;
    console.log(parametros)
    console.log(url)
    console.log("anterior")
}
function boton_siguiente(url){
    let parametros = url.location.search;
    console.log(parametros)
    console.log(url)
    console.log("siguiente")
}

