$('#des').click(function (event) {
   $('#design-content').toggle();
   $('#des').toggle();
    
});
$('#design-content').click(function (event) {
    $('#des').toggle();
    $('#design-content').toggle();
     
 });
 $('#dev').click(function (event) {
     console.log('dev-clicked');
    $('#dev-content').toggle();
    $('#dev').toggle();
     
 });
 $('#dev-content').click(function (event) {
     $('#dev').toggle();
     $('#dev-content').toggle();
    });
$('#prod').click(function (event) {
       $('#product-content').toggle();
       $('#prod').toggle();
        
    });
$('#product-content').click(function (event) {
        $('#prod').toggle();
        $('#product-content').toggle();
       });
    
// let container = $(event.target.parent()).attr("id")
    // $(container +"> p").toggleClass("hidden-content")