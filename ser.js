$(document).ready(function(){

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("#header").addClass("active-header");
          $(".menu-link").addClass("active-menu-links");
          $("#header-img").attr("src", "./img/logooo.png");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("#header").removeClass("active-header");
         $(".menu-link").removeClass("active-menu-links");
         $("#header-img").attr("src", "./img/logooo.png");
      }
  });
  
    // Responsive menu
    $("#responsive-nav-bar").hide();
  
    $("#image-button-black").click(function(){
      $("#responsive-nav-bar").slideToggle();
    });
  
    $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
      $("#responsive-nav-bar").slideToggle(200);
    })
  
  
  
  
  
    // Default sections visibility
    $('.product-content').hide();
    $('#product-container-one').show();
  
  
    // Button variables
    var firstButton = $('#first-product-button');
    var secondButton = $('#second-product-button');
    var thirdButton = $('#third-product-button');
    var fourthButton = $('#fourth-product-button');
    var fiveButton = $('#five-product-button');
    var sixButton = $('#six-product-button');
    var SevenButton = $('#Seven-product-button');
    var buttons = $('.product-button');
  
  
  
    // Product variables
    var firstProduct = $('#product-container-one');
    var secondProduct = $('#product-container-two');
    var thirdProduct = $('#product-container-three');
    var fourthProduct = $('#product-container-four');
    var fiveProduct = $('#product-container-five');
    var sixProduct = $('#product-container-six');
    var SevenProduct = $('#product-container-Seven');
  
  
    // Visibility variables
    var firstVisible = firstProduct.is(':visible');
    var secondVisible = secondProduct.is(':visible');
    var thirdVisible = thirdProduct.is(':visible');
    var fourthVisible = fourthProduct.is(':visible');
    var fiveVisible = fiveProduct.is(':visible');
    var sixVisible = sixProduct.is(':visible');
    var SevenVisible = SevenProduct.is(':visible');
  
  
    // Visible and Hidden Sections .click function
    $(firstButton).click(function(){
      $('.product-content').hide();
      $(firstProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      firstButton.addClass('product-button-active');
    });
  
    $(secondButton).click(function(){
      $('.product-content').hide();
      $(secondProduct).fadeIn(600);
      $(secondProduct).css('visibility', 'visible');
      buttons.removeClass('product-button-active');
      secondButton.addClass('product-button-active');
    });
  
    $(thirdButton).click(function(){
      $('.product-content').hide();
      $(thirdProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      thirdButton.addClass('product-button-active');
    });
  
    $(fourthButton).click(function(){
      $('.product-content').hide();
      $(fourthProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      fourthButton.addClass('product-button-active');
    });
  
    $(fiveButton).click(function(){
      $('.product-content').hide();
      $(fiveProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      fiveButton.addClass('product-button-active');
    });
  
    $(sixButton).click(function(){
      $('.product-content').hide();
      $(sixProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      sixButton.addClass('product-button-active');
    });

    $(SevenButton).click(function(){
      $('.product-content').hide();
      $(SevenProduct).fadeIn(600);
      buttons.removeClass('product-button-active');
      SevenButton.addClass('product-button-active');
    });
  
  
  
    // First Button Styling hidden/visible
    if (firstVisible === true) {
      firstButton.addClass('product-button-active');
    }
  
  });
  
  
  
  
  
  
  
  
  
  
  function showText(toggleText) {
    toggleText.classList.toggle("active");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );
  
    var thisElement = $(this);
  
    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
  };
  
  
  $('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
  $('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
  $('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
  $('#number4').jQuerySimpleCounter({end: 246,duration: 2500});
  
  
  
  /* AUTHOR LINK */
   $('.about-me-img').hover(function(){
          $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
      }, function(){
          $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
      });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      const checkbox = document.getElementById("checkbox");
      const professional = document.getElementById("professional");
      const master = document.getElementById("master");
      const basic = document.getElementById("basic");
      
      checkbox.addEventListener("click", () => {
        basic.textContent = basic.textContent === "7,000 EGP" ? "500 EGP" : "7,000 EGP";
        professional.textContent =
          professional.textContent === "15,000 EGP" ? "1,200 EGP " : "15,000 EGP";
        master.textContent = master.textContent === "25,000 EGP" ? "2,000 EGP" : "25,000 EGP";
      });
      