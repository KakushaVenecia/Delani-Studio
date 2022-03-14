// {/* <div class="row" id="we_do"> */}
 // <img src="Images/design_icon.png" id="des"> 
// <h5>DESIGN</h5>
 // <p id="design-content" class="hidden-content">
//     Our design practice offers a full range of services including brand strategy, interaction
//     and visual design and user experience testing.
//     Throughout your project, our designers create and implement visual design and workflows,
//     solicit user feedback and work with you to make sure what gets built is what is needed.
// </p>

$(document).onclick(function() {
    $("hidden-content").click(function() {
      $("design-content").toggle();
      $("hidden-content").toggle();
    });
  });

  document.getElementById('p')