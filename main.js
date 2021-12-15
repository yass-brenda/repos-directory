const Http = new XMLHttpRequest();
const url = 'http://localhost:3000/posts';
Http.open("GET",url);
Http.send();


Http.open("POST",url);
Http.send();

Http.onreadystatechange = function() {
    if(this.readyState===4 && this.status===200){
        console.log(Http.responseText)
    }
}


