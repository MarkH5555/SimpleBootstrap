$(function() {

	"use strict";
	let colourArray = ['#FBFB9B', '#9BFBC7', '#9BD1FB'];
	let clickCounter = 0;

    console.log( "JS loaded" );


    $('.text-box').click(function() {

    	clickCounter++;
	 	changeColour(colourArray[clickCounter % 3]);
	});

	let changeColour = (newColour) => {

		$('.grid-element').css('background-color', newColour);
	 	$('.text-box').css('color', newColour);
	 	$('.text-box').css('border-color', newColour);
	}
});