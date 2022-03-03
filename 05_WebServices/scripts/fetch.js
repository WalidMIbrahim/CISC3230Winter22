window.onload = function(){
    //plainText
    let button = document.getElementById('plainTextButton');
    button.onclick = function(){
        fetch('../data/test_data.txt')
        .then((resp) => resp.text())
        .then(function  (textData){
            let plainTextDiv = document.getElementById('plainTextDiv');
            plainTextDiv.innerText = textData;
            console.log("Inside function!!")
        })
        .catch( function  (error){
            console.log('Error: ' + error)
        })

        console.log("Function is done!!")
    };

    //JSON
    button = document.getElementById('jsonButton');
    button.onclick = function (){
        fetch('../data/test_data.json')
        .then( (resp) => resp.json())
        .then( function (jsonData){
            let jsonFirstName = document.getElementById('jsonFirstName');
            let jsonLastName = document.getElementById('jsonLastName');
            jsonFirstName.setAttribute('value', jsonData.firstName);
            jsonLastName.setAttribute('value', jsonData['lastName']);
        });
    }

        // comma-separated values
        button = document.getElementById('csvButton');
        button.onclick = function() {
            fetch('test_data.csv')
            .then((response) => response.text())
            .then(function(content) {
                let firstNameField = document.getElementById('csvFirstName');
                let lastNameField = document.getElementById('csvLastName');
                
                let rows = content.split('\n');
                let person = rows[1].split(',');
                firstNameField.setAttribute('value', person[0]);
                lastNameField.setAttribute('value', person[1]);
            });
        };

        // XML
        button = document.getElementById('xmlButton');
        button.onclick = function() {
            fetch('test_data.xml')
            .then((response) => response.text())
            .then(function(rawXML) {
                const parser = new window.DOMParser();
                const xmlDocument = parser.parseFromString(rawXML, 'text/xml');
    
                let firstNameField = document.getElementById('xmlFirstName');
                let lastNameField = document.getElementById('xmlLastName');
    
                let people = xmlDocument.getElementsByTagName('person');
                firstNameField.setAttribute('value', people[1].getAttribute('firstName'));
                lastNameField.setAttribute('value', people[1].getAttribute('lastName'));
            });
        };

};

