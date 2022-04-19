$(window).load(function(){
	// alert('hi');
	$('select.goog-te-combo > option:first-child').text('EN');

	$('#gallery-slider-home').owlCarousel({
		margin:0,
		loop:true,
		autoWidth:false,
		autoplay:true,
		items:3,
		nav:false,
		dots:false,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1,
				nav:true,
				autoWidth:false,
			},
			600:{
				items:3,
				autoWidth:false,
			},
			768:{
				items:3,
				autoWidth:false,
			},
			1000:{
				items:3,
				autoWidth:false,
			}
		}
	});


	$('#home1-slider').owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:1,
			},
			1000:{
				items:1,
				nav:true,
				loop:true
			}
		}
	});
	$('.owl-carousel #offer-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
	$('#offer-slider').owlCarousel({
		margin:10,
		loop:true,
		items:3,
		autoplay:true,
		responsiveClass:true,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
	$('#rooms-slider').owlCarousel({
		margin:10,
		loop:true,
		items:3,
		nav:true,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
	$('#regenza-special-slider').owlCarousel({
		margin:10,
		loop:true,
		nav:true,
		items:5,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});

	$('#special-slider-regale').owlCarousel({
		margin:10,
		loop:false,
		nav:true,
		items:2,
		autoplay:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	});
	$('#special-slider-paradise').owlCarousel({
		margin:10,
		loop:false,
		nav:true,
		items:2,
		autoplay:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	});
	$('#special-slider').owlCarousel({
		margin:10,
		loop:true,
		nav:true,
		items:3,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
		$('#tunga-int-odc').owlCarousel({
		margin:10,
		loop:true,
		nav:true,
		items:1,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:1,
			},
			1000:{
				items:1,
				nav:true,
				loop:true
			}
		}
	});
	$('#tunga-int-offer-slider').owlCarousel({
		margin:10,
		loop:true,
		nav:true,
		items:3,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
	$('#tunga-offer-slider').owlCarousel({
		margin:10,
		loop:true,
		nav:true,
		items:2,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:2,
				nav:false,
				loop:false
			}
		}
	});
	$('#food-promotion-slider').owlCarousel({
		margin:10,
		loop:true,
		items:4,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:3,
			},
			1000:{
				items:4,
				nav:true,
				loop:false
			}
		}
	});
	$('#banner-slider').owlCarousel({
		loop:true,
		autoplay:true,
		nav:false,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('#rooms-slider-paradise').owlCarousel({
		margin:10,
		loop:true,
		items:2,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	});
	$('#rooms-slider-regale').owlCarousel({
		margin:10,
		loop:true,
		items:2,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});
	$('#dine-banquets-slider-regale').owlCarousel({
		margin:10,
		loop:true,
		items:3,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:false,
				loop:false
			}
		}
	});
	$('#rooms-slider-international').owlCarousel({
		margin:10,
		loop:true,
		items:2,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	});

	$('#regenza-banquet-slider').owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});

	$('#international-dining-slider').owlCarousel({
		margin:10,
		loop:true,
		items:3,
		nav:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:3,
				nav:true

			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
	$('#banquet-slider').owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});
	$('#paradise-dining-slider').owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
	$('#dining-slider').owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			768 : {
				items:2,
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});


	$('.downarrow a').bind('click', function(event) {
		var $tag = $(this);

		$('html, body').stop().animate({
			scrollTop : $($tag.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});

	$(".mCustomScrollbarmodal").mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"light-thick",
		scrollbarPosition:"outside"
	});

	$(function() {
		var $switcher = $('#style_switcher'),
			$switcher_toggle = $('#style_switcher_toggle'),
			$html = $('html'),
			$body = $('body');

			$switcher_toggle.click(function(e) {
				e.preventDefault();
				$switcher.toggleClass('switcher_active');
			});
	});
	function switcheraction()
	{
	  if ($('#style_switcher').hasClass('switcher_active')) {
	    // alert('has');
	    $('#style_switcher').removeClass('switcher_active');
	  }

	}

});
$(function () {
	var _search_api = {
		getSuggestions: function (searchTerm) {
			return $.ajax({
				url: '/ajax-endpoint/search',
				data: {
					q: searchTerm
				},
				type:"GET",
				dataType: 'JSON'
			});
		},
		process :  function(title,data,noCase){
			var html = '<h4>'+title+' <small>('+data.length+')</small></h4>';

			if(!data.length){
				return html += '<p>'+noCase+'</p>';
			}

			html += '<ul class="list-material">';

			for(var c = 0;c < data.length;c++){
				var row = data[c];

				html += '<li data-toggle="tooltip" data-placement="top" data-original-title="'+row.name+'">';
				html +=     '<a href="'+row.path+'" class="visible" style="padding: 0px;">';
				html +=         '<div class="list-content">';
				html +=             '<span class="title">'+row.name+'</span>';
				html +=             '<span class="caption">'+row.date+'</span>';
				html +=         '</div>';
				html +=     '</a>';
				html += '</li>';
			}

			html += '</ul>';


			return html;
		}
	};

	$('#search-input-ourcodeworld').bind("keyup change", OurCodeWorld.debounce(function () {
		var value = $(this).val();

		if (!value) {
			return;
		}

		_search_api.getSuggestions(value).then(function (data) {
			var articles = data.data;
			var group =  {
				left: articles.splice(0, Math.ceil(articles.length/2)),
				right: articles
			};

			$('#search-layout-zone-articles').html(_search_api.process("Articles", group.left ,"No articles were found"));
			$('#search-layout-zone-news').html(_search_api.process("Articles", group.right ,"No articles were found"));
		}, function (err) {
			console.log(err);
		});
	}, 300));

	OurCodeWorld.init();
	Layout.init();
});

$(document).ready(function(){
	$(".contact-x").on('click',function(){
	  //  $('#draggablediv').show();
	   var hello = $(this).attr('data-id');
	   $('.hideDivs').hide();
	   $('.hideDivs1').hide();
	   $('#'+hello).show();
	});
	$(".back-btn, .close1").on('click',function(){
	  //  $('#draggablediv').show();
	   $('.hideDivs').hide();
	   $('.hideDivs1').show();
	});

	 $('[data-toggle="tooltip"]').tooltip();

})
