$(document).ready(function() {

$('#user-input').keydown(function(e){
        if(e.keyCode == 13){
           var inputToAppend = ($('#user-input').val());
           $('ul').append('<li> <input class="strikethrough" type="checkbox"><span>'+ inputToAppend +'</span> <button class="transparent" type="submit"><i class="fa fa-times-circle"></i></button></li>')
        }
 
 });

});




