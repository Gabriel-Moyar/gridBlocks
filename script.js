$(document).ready(function() {
    // Create the 4x4 grid of boxes
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        $('#container').append('<div class="box"></div>');
      }
      $('#container').append('<br>');
    }
  
    // Toggle the background color of the clicked box
    $('.box').on('click', function() {
      $(this).toggleClass('clicked');
    });
  });