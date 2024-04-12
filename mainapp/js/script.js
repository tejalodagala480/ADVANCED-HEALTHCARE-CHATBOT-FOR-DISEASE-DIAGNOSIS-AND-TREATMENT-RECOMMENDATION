function validateRForm(){
	var fullname = document.myform.fullname
	var email = document.myform.email
	var emailpattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/; // to validate email id
	var contact = document.myform.phone
	var password = document.myform.pwd

	var letter = /[a-z]/;
	var upper = /[A-Z]/;
	var number = /[0-9]/;   
	var image = document.myform.image
	
  
	if (fullname.value.length <= 0) {
	swal(" Name can't be blank", "", "warning");
	fullname.focus();
	return false;
	}
	
	if (email.value.length <= 0) {
		swal("Enter your email ID","", "warning");
		return false;
		
		}
		if(!email.value.match(emailpattern)){
		swal("Invalid Email format","", "warning");           
		return false;
		}

	if (contact.value.length <= 0) {
	swal("Enter your mobile number","", "warning");
	contact.focus();
	return false;
	
	}
	if(isNaN(contact.value)){
	swal("Invalid Mobile number","", "warning");
	return false;
	}
	if(contact.value.length=="" || contact.value.length!=10){
	swal("Invalid Mobile number","", "warning");
	return false;
	}
  
	
	if (password.value.length <= 0) {
	swal("Enter your password","", "warning");
	password.focus();
	return false;
	
	}
	if (!letter.test(password.value)) {
	swal("Please make sure password includes a lowercase letter.","", "warning");
	password.focus();
	return false;
	
	}
	if (!upper.test(password.value)) {
	swal("Please make sure password includes a uppercase letter.","", "warning");
	password.focus();
	return false;
	
	}
	if (!number.test(password.value)) {
	swal("Please make sure password Includes a digit.","", "warning");
	password.focus();
	return false;              
	}
   
  
	if (image.value.length == "") {
	swal("Upload profile Picture","", "warning");
	image.focus();
	return false;
	
	}
  }

  function validateLForm(){

	var email = document.myform.email
	var emailpattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/; // to validate email id
	var password = document.myform.pwd
  
  
	if (email.value.length <= 0) {
	  swal("Email ID missing","Enter your email ID", "warning");
	  return false;  
	  }

	  if(!email.value.match(emailpattern)){
	  swal("Retype your email", "Invalid Email format", "warning");          
	  return false;
	  }

	  if (password.value.length <= 0) {
	  swal("Password missing", "Enter your password", "warning");
	  password.focus();
	  return false;
	  }
	  
	  return true;
	}



(function ($) {

	'use strict';
	
 // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
    }
});
 
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:6,
		        slidesToScroll: 6,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow:4,
		        slidesToScroll: 4
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical:true,
		verticalSwiping:true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:2,
		        slidesToScroll:2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});



	var map;

	function initialize() {
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat span').counterUp({
	      delay: 10,
	      time: 1000
	  });

		
 // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

		
		
})(jQuery);
