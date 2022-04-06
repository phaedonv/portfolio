require('dotenv').config()

// const user = process.env.USER_ID;

console.log("hello from script.js");


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_b9h4675', 'template_a9wtzdm', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

/*
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.box-1').css('height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
  windowHeight = $(window).innerHeight();
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > windowHeight) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < windowHeight) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
*/