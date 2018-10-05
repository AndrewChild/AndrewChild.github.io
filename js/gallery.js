var value	//holds tag to be filtered
var i		//indexes tag
var x		//array of tag button elements
var $wrapper

$(document).ready(function(){
	$(".show-tags").click(function(){
		$('.tags').toggle('1000');
    });
	
	$(".show-equipment").click(function(){
		$('.equipment').toggle('1000');
    });
	
	$(".all-tag").click(function(){
		x = document.getElementsByClassName("filter-tag");
		for (i = 0; i < x.length; i++) {
			x[i].classList.remove("disabled");
			x[i].classList.remove("ignore");
			x[i].setAttribute("data-enabled", "e");
		}
		$('.filter').show('1000');
    });
	
	$(".ignore-tag").click(function(){
		x = document.getElementsByClassName("filter-tag");
		for (i = 0; i < x.length; i++) {
			x[i].classList.remove("disabled");
			x[i].classList.add("ignore");
			x[i].setAttribute("data-enabled", "i");
		}
		$('.filter').hide('1000');
    });
	
	$(".new-tag").click(function(){
		this.classList.remove("disabled");
		document.getElementsByClassName("old-tag")[0].classList.add("disabled");
		
		$wrapper = $('.gallery_wrapper');
		$wrapper.find('.gallery_product').sort(function (a, b) {
			return +b.dataset.date - +a.dataset.date;
		})
		.appendTo( $wrapper );
    });
	
	$(".old-tag").click(function(){
		this.classList.remove("disabled");
		document.getElementsByClassName("new-tag")[0].classList.add("disabled");
		
		$wrapper = $('.gallery_wrapper');
		$wrapper.find('.gallery_product').sort(function (a, b) {
			return +a.dataset.date - +b.dataset.date;
		})
		.appendTo( $wrapper );
    });
	
	$(".clear-tag").click(function(){
		x = document.getElementsByClassName("filter-tag");
		for (i = 0; i < x.length; i++) {
			x[i].classList.add("disabled");
			x[i].classList.remove("ignore");
			x[i].setAttribute("data-enabled", "d");
		}
		$('.filter').hide('1000');
    });
	
	$(".filter-tag").click(function(){
		if(this.classList.contains("disabled")){
			this.classList.remove("disabled");
			this.classList.add("ignore");
			this.setAttribute("data-enabled", "i");
		}
		else if(this.classList.contains("ignore")){
			this.classList.remove("ignore");
			this.setAttribute("data-enabled", "e");
		}
		else{
			this.classList.add("disabled");
			this.setAttribute("data-enabled", "d");
		}
		x = document.getElementsByClassName("filter-tag");
		$('.filter').hide();
		for (i = 0; i < x.length; i++) {
			if(x[i].getAttribute("data-enabled") == "e"){
				value = x[i].getAttribute("data-tag");
				$('.filter').filter('.'+value).show('3000');
			}
		}
		for (i = 0; i < x.length; i++) {
			if(x[i].getAttribute("data-enabled") == "i"){
				value = x[i].getAttribute("data-tag");
				$('.filter').filter('.'+value).hide('1000');
			}
		}
    });
});

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main');

		// Lightbox gallery.
		$window.on('load', function() {

			$('#gallery').poptrox({
				// caption: function($a) { return $a.next('h3').text(); },
				overlayColor: '#2c2c2c',
				overlayOpacity: 0.85,
				popupCloserText: '',
				popupLoaderText: '',
				selector: ".gallery_product a.gallery-img",
				usePopupCaption: false,
				usePopupDefaultStyling: false,
				usePopupEasyClose: false,
				usePopupNav: false,
				windowMargin: (skel.breakpoint('small').active ? 0 : 50)
			});

		});

	});

})(jQuery);