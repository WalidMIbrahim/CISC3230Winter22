window.onload = function (){
    let button = document.getElementById("loadDataButton");
    button.onclick = function(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            let content = document.getElementById('content');
            let orderList = document.createElement('ol');
            content.appendChild(orderList);

            for(let i=0; i<10; i++){
                let bodyText = document.createTextNode(json[i].body);
                let li = document.createElement('li');
                li.appendChild(bodyText)
                orderList.appendChild(li);
            }
        });
        
    }

    let jbutton = document.getElementById("loadjQueryButton");
    jbutton.onclick = function(){
        let url = 'https://jsonplaceholder.typicode.com/posts';
        $.getJSON(url, function(data){
            let content = document.getElementById('content');
            let orderList = document.createElement('ol');
            content.appendChild(orderList);
            for(let i=0; i<15; i++){
                let bodyText = document.createTextNode(data[i].body);
                let li = document.createElement('li');
                li.appendChild(bodyText)
                orderList.appendChild(li);
            }
        });
    }

};