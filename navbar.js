(function($) {
    document.querySelector('#nav-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
      $('nav ul').toggle();
    });
  }
  )(jQuery);

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navigation");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 56) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}