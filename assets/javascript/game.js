var numGoal = 50;
var wins = 0;
var losses = 0;

$("spanNumGoal").text(numGoal);

//var spanNumGoal = $('spanNumGoal')[0];
var spanWins = $('spanWins')[0];
var spanLosses = $('spanLosses')[0];
var spanScore = $('spanScore')[0];
var spanPoints = $('spanPoints')[0];

var numOptions = [10, 3, 2, 5];
var counter = 0;

for(var i = 0; i < numOptions.length; i++){
	var gemImg = $(".gem-img");
	gemImg.attr("data-crystalvalue", numOptions[i]);
}

	$(".gem-img").on("click", function(){

	console.log("this has been clicked");

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	counter+=crystalValue;

	alert("New score: " + counter);

	if (counter === numGoal){
		alert("you win!");
	}
	else if(counter >= numGoal){
		alert("you lose!");
	}


})

// var updateNumGoal = function(){


// }



//crystals randomly generated 1-12
//goal number is randomly between 19 and 120
