$(document).ready(function(){

var numGoal;
var wins = 0;
var losses = 0;
var points;
var randomNum;

$("numGoal").text(numGoal);
$('#spanWins').text(wins);
$('#spanLosses').text(losses);
$('#spanPoints').text(points);

var cryMin = 1;
var cryMax = 11;
var goalMin = 19;
var goalMax = 120;
var numOptions = [];
var counter = 0;

var num1 = Math.floor(Math.random()*cryMax+cryMin);
var num2 = Math.floor(Math.random()*cryMax+cryMin);
var num3 = Math.floor(Math.random()*cryMax+cryMin);
var num4 = Math.floor(Math.random()*cryMax+cryMin);

var win = function(){};

var lose = function(){};



for(var i = 0; i < 4; i++){
	var bgem = $(".blue-img");
	var ygem = $(".yellow-img");
	var rgem = $(".red-img");
	var pgem = $(".pink-img");

	bgem.attr("data-crystalvalue", num1);
	ygem.attr("data-crystalvalue", num2);
	rgem.attr("data-crystalvalue", num3);
	pgem.attr("data-crystalvalue", num4);
}

	$(".blue-img").on("click", function(){
		var bValue = ($(this).attr("data-crystalvalue"));
		bValue = parseInt(bValue);
		console.log(bValue);
		counter+=bValue;
		alert("New score: " + counter);
	})

	$(".yellow-img").on("click", function(){
		var yValue = ($(this).attr("data-crystalvalue"));
		yValue = parseInt(yValue);
		console.log(yValue);
		counter+=yValue;
		alert("New score: " + counter);
	})

	$(".red-img").on("click", function(){
		var rValue = ($(this).attr("data-crystalvalue"));
		rValue = parseInt(rValue);
		console.log(rValue);
		counter+=rValue;
		alert("New score: " + counter);
	})

	$(".pink-img").on("click", function(){
		var pValue = ($(this).attr("data-crystalvalue"));
		pValue = parseInt(pValue);
		console.log(pValue);
		counter+=pValue;
		alert("New score: " + counter);
	})


	if (counter === numGoal){
		alert("you win!");
	}
	else if(counter >= numGoal){
		alert("you lose!");
	}
});


