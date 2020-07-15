var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 1){
        console.log("Request prepared");
    }
    if(xhr.readyState === 2){
        console.log('Request sent');
    }
    if(xhr.readyState === 3){
        console.log('Waiting for server response');
    }
    if(xhr.readyState === 4){
        console.log('We got all infos');
        var response = JSON.parse(xhr.responseText);
        let main = document.getElementById('main');
        let rend = '<table>';
        for(let i=0;i<response.length;i++){
            console.log(response[i].name);
            rend += '<tr><td>' + response[i].name + '</td><td>' + response[i].price + '</td></tr>';
        }
        rend += '</table>';
        main.innerHTML = rend;
    }
})

xhr.open('GET','http://127.0.0.1:3000/products/all');
xhr.send(null);

