$(document).ready(function() {

$( "button" ).click(function( event ) {
  event.preventDefault();
  var inputToAppend = ($('#user-input').val());
  
  $( ".empty-message" ).remove();
  $( "ul" ).append('<li> <input class="strikethrough" type="checkbox"><span>'+ inputToAppend +'</span> <button class="transparent" type="submit"><i class="fa fa-times-circle"></i></button></li>');
 
 });

$('ul').on('click', 'li',function(event){
	this.remove();
})
});




