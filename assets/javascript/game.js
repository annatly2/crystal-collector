$(document).ready(function(){

var numGoal;
var wins = 0;
var losses = 0;
var points;
var randomNum;

var cryMin = 1;
var cryMax = 11;
var goalMin = 19;
var goalMax = 120;
var numOptions = [];
var counter = 0;

var newPoints = $('#spanPoints');
var numberGoal = $('#randomNum');

var newRandomNum = Math.floor(Math.random()*(goalMax-goalMin + 1)+goalMin);
numberGoal.text(newRandomNum);


$("numGoal").text(numGoal);
$('#spanWins').text(wins);
$('#spanLosses').text(losses);

var num1 = Math.floor(Math.random()*cryMax+cryMin);
var num2 = Math.floor(Math.random()*cryMax+cryMin);
var num3 = Math.floor(Math.random()*cryMax+cryMin);
var num4 = Math.floor(Math.random()*cryMax+cryMin);
var num5 = Math.floor(Math.random()*cryMax+cryMin);




function winner (){};

function loser (){};


for(var i = 0; i < 5; i++){
	var rgem = $(".red-img");
	var ygem = $(".yellow-img");
	var ggem = $(".green-img");
	var bgem = $(".blue-img");
	var pgem = $(".pink-img");

	rgem.attr("data-crystalvalue", num1);
	ygem.attr("data-crystalvalue", num2);
	ggem.attr("data-crystalvalue", num3);
	bgem.attr("data-crystalvalue", num4);
	pgem.attr("data-crystalvalue", num5);
}



	$(".red-img").on("click", function(){
		var rValue = ($(this).attr("data-crystalvalue"));
		rValue = parseInt(rValue);
		console.log(rValue);
		counter
		+=rValue;
		newPoints.text(counter);
	});

	$(".yellow-img").on("click", function(){
		var yValue = ($(this).attr("data-crystalvalue"));
		yValue = parseInt(yValue);
		console.log(yValue);
		counter+=yValue;
		newPoints.text(counter);
	});


	$(".green-img").on("click", function(){
		var gValue = ($(this).attr("data-crystalvalue"));
		gValue = parseInt(gValue);
		console.log(gValue);
		counter+=gValue;
		newPoints.text(counter);
	});

	$(".blue-img").on("click", function(){
		var bValue = ($(this).attr("data-crystalvalue"));
		bValue = parseInt(bValue);
		console.log(bValue);
		counter+=bValue;
		newPoints.text(counter);
	});

	$(".pink-img").on("click", function(){
		var pValue = ($(this).attr("data-crystalvalue"));
		pValue = parseInt(pValue);
		console.log(pValue);
		counter+=pValue;
		newPoints.text(counter);
	});



	if (counter === numberGoal){
		alert("you win!");
		console.log("you win!");
	}
	else if(counter >= numberGoal){
		alert("you lose!");
		console.log("you lose");
	}
});


