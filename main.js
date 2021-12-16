const url = 'http://localhost:3000/posts';



fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


const data = {body:'UULisses',postId: 9}
fetch(url, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
}).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


fetch(url, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({body:'bienvenida',
        postId: 100})
}).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));