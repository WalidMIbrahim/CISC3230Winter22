var provinces={
    CA: ['Ontario', 'BC', 'Alberta'],
    US: ['NY', 'Ohio', 'Alaska'],
}

var ready = false;

$(document).ready(function(){

    let content = '';
    $.each(provinces['CA'], function(index, value){
        content += `<option value="${index}"> ${value} </option>`
    });
    $('#province').html(content);

    $('#register').click(function(){
        console.log('Register button is clicked');
        return ready;
    });
    /*$('#register').dblclick(function(){
        console.log('Register button is double clicked');
        return false;
    });*/

    $('#email').mouseenter(function(){
        console.log('Mouse entered Register');
       
    });

    $('#email').mouseleave(function(){
        console.log('Mouse leaved Register');
        
    });

    $('#email').focus(function(){
        console.log('focused Register');
        
    });


    $('#email').change(function(){
        let email = $('#email').val();
        console.log(email);
        if (email === '' || email ===null){
           
            $('#email').css({backgroundColor: 'red'});
            
            //$('#email').attr('class','error');
        }else{
            ready = true;
        }
    });
    

    $('#country').change(function(){
        let country = $('#country').val();
        let provs = provinces[country];

        let content = '';
        $.each(provs, function(index, value){
            content += `<option value="${index}"> ${value} </option>`
        });
        $('#province').html(content);
    });

    $('#svg').html('<svg width="400" height="400"> <line x1="25" y1="10" x2="300" y2="350"  style="stroke:rgb(0,0,0); stroke-width:2" /></svg>'  )
});
