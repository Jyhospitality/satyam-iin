
// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".social-bar").addClass("social-none");
      $(".fixed-top").addClass("nav-flow");
      $(".navbar-brand1").addClass("small-img");
      $(".nav-link").addClass("dark-nav-link");
      $(".fa-bars").addClass("dark-bars");

    } else {
      $(".social-bar").removeClass("social-none");
      $(".fixed-top").removeClass("nav-flow");
      $(".navbar-brand1").removeClass("small-img");
      $(".nav-link").removeClass("dark-nav-link");
      $(".fa-bars").removeClass("dark-bars");
    }
  });


  //  **************  AOS Animation  ***********

  AOS.init({
    easing:'ease',
    duration:1500,
  });



  // **************  For whatsapp  *************

  //Javascript function scrolling up

mybutton=document.getElementById("mybtn");

//When the user scrolls down 20px from top of the document,butoon will appear

window.onscroll = function(){ scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
	mybutton.style.display = "block";
  }
  else{
	mybutton.style.display="none";
  }
}

//When the user click the button,scroll to the top of document

function topfunction(){
  document.body.scrollTop=0;    //for Safari
  document.documentElement.scrollTop=0;    //for chrome,firefox,and other   
}



// NAV LINK HOVER AUDIO
		$(".nav-link")
			.each(function(i) {
			if (i != 0) {
			  $("#hover-audio")
				.clone()
				.attr("id", "hover-audio" + i)
				.appendTo($(this).parent());
			}
			$(this).data("beeper", i);
		}).mouseenter(function() {
			$("#hover-audio" + $(this).data("beeper"))[0].play();
			});
			$("#hover-audio").attr("id", "hover-audio0");

			// SANDWICH MENU AUDIO
			document.getElementById("sandwich-btn").addEventListener('click', function(e) {
			document.getElementById("link").play();
	  	});