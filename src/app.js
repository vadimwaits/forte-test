require('./sass/main.scss');
var $ = require('jquery');

var ko = require('knockout');

var json = require("./json/text.json");

$(document).ready(function () {
	//Adaptive nav btn

	$(".hdr-nav").on("click", function (){
		$(this).toggleClass('active');
		$(".hdr-nav > ul").toggleClass('active');
	});

	//tabs switcher
		$('.tabs-bl .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs-bl .tab-link').removeClass('active');
		$('.tabs-bl .tab-inner').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	//portfolio filter
	$('.filter-tabs li a').click(function() {

		var ourClass = $(this).attr('class');

	    $('.filter-tabs li').removeClass('active');
	    $(this).parent().addClass('active');

	    if(ourClass == 'all') {
	      $('.filter-content ul').children('li').show();
	    }
	    else {
	      $('.filter-content ul').children('li:not(.' + ourClass + ')').hide();
	      $('.filter-content ul').children('li.' + ourClass).show();
	    }
	    return false;
	});

	//knockout

	ko.applyBindings(json);

});