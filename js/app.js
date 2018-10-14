$(function() {

	"use strict";
	let colourArray = ['#FBFB9B', '#9BFBC7', '#9BD1FB', '#D60000'];
	let clickCounter = 0;

    console.log( 'JS loaded');


    $('.text-box').click(function() {

    	clickCounter++;
	 	changeColour(colourArray[clickCounter % colourArray.length]);
	});

	let changeColour = (newColour) => {

		$('.grid-element').css('background-color', newColour);
	 	$('.text-box').css({'color': newColour, 'border-color': newColour });
	}
});