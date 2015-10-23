$( "#first" ).click(function() {
  $( this ).slideUp();
});
$( "#second" ).click(function() {
  $( this ).fadeOut("slow");
});
$( "#third" ).click(function() {
  $( this ).hide();
});

$(function() {
    $( "#draggable" ).draggable();
  });

  $(function() {
    $( "#accordion" ).accordion();
  });

  $(function() {
    $( "#datepicker" ).datepicker();
  });
