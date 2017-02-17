(function () {
	
	'use strict';

	$(document).ready(function() {
		f.init()
	});

	$(window).load(function() {

		// $("ul#tabs").tabs("#tabContent");
		$('.top_two_item').equalHeights();
	});


	$(window).resize(function(){

	});

	var f = {
		init: function() {
			this.initRollovers();
			this.initClickAcc();
			this.initBackToTop();
			this.initSmoothScroll();
			this.initThumbProduct();
			this.initMainVisual();
			this.initBtnMenu();
		},
		initRollovers: function() {
			if (!document.getElementById) {
				return;
			}
			$('a img.imgover').hover(function() {
				$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
			}, function() {
				if (!$(this).hasClass('currentPage')) {
					$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
				}
			});
		},
		initClickAcc: function() {
			if (!document.getElementById) {
				return;
			}
			$('.click__el').on('click', function(e) {
				e.preventDefault();
				//menu open
				$(this).next('.click__box').slideToggle();
				//for open icon etc
				$(this).toggleClass('open');
				//another open menu close
				$('.click__el').not(this).removeClass('open');
				$('.click__el').not(this).next('.click__box').slideUp();
			});
		},
		initBackToTop: function() {
			$("#back-top").hide();
			// fade in #back-top
			
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		},
		initSmoothScroll: function() {
			$('a[href^=#]').click(function() {
				var speed = 900;
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top;
				$("html, body").animate({
						scrollTop: position
				}, speed, "swing");
				return false;
			});
		},
		initThumbProduct: function() {
			if (!document.getElementById) {
				return;
			}
			$('.product__gallery-click').click(function(e){
				e.preventDefault();
				var img = $(this).attr('href');
				$("#targetImg img").attr('src', img);
			});
		},
		initMainVisual: function() {
			if ($('.bxslider').length) {
				$('.bxslider').bxSlider({
					pagerCustom: '.bxthumb',
					auto :true
				});
			}
		},
		initBtnMenu: function() {
			$('.btn_gnav').on("click",function(){
				$(this).toggleClass('opened');
				$('#gnav').slideToggle('slow');
			});
			$('.has-sub').on("click",function(){
				$(this).toggleClass('opened');
				$(this).next('ul').slideToggle('slow');
			});
		}
	};

	// Auto height
	//----------------------------------------------------------------
	$.fn.equalHeights = function() {
		var maxHeight = 0,
			$this = $(this);

		$this.each( function() {
			var height = $(this).innerHeight();

			if ( height > maxHeight ) { maxHeight = height; }
		});
		return $this.css('height', maxHeight);
	};/* End Function */

	// Tabs
	//----------------------------------------------------------------
	$.fn.tabs = function(control){
		var el = $(this);
		control = $(control);

		el.delegate('li', 'click', function(e){
			e.preventDefault();
			// Retrieve tab name
			var tabName = $(this).data('tab');

			// Fire custom event on tab click 
			el.trigger('change.tabs', tabName);
									
		}); 

		// Bind to custom event
		el.bind('change.tabs', function(e, tabName){
			el.find('li').removeClass('active');
			el.find('>[data-tab="' + tabName + '"]').addClass('active');
		}); 

		// Bind to custom event
		el.bind('change.tabs', function(e, tabName){
			control.find('>[data-tab]').removeClass('active');
			control.find('>[data-tab="' + tabName + '"]').addClass('active');
		}); 

		// Activate first tab
		var firstName = el.find('li:first').data('tab');
		el.trigger('change.tabs', firstName);

		return this; 
	};/* End Function */

}());