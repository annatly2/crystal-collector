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

var num1 = Math.floor(Math.random()*cryMax+cryMin);
var num2 = Math.floor(Math.random()*cryMax+cryMin);
var num3 = Math.floor(Math.random()*cryMax+cryMin);
var num4 = Math.floor(Math.random()*cryMax+cryMin);
var num5 = Math.floor(Math.random()*cryMax+cryMin);

function winner (){
	alert("You won! You're a cool crystal collector!");
	wins++;
	$("#spanWins").text(wins);
	$("#happy-corgi-img").show();
	$("#sad-corgi-img").hide();
};

function loser (){
	alert("Sorry, you lost. You collected too many crystals.");
	losses++;
	$("#spanLosses").text(losses);
	$("#sad-corgi-img").show();
	$("#happy-corgi-img").hide();
};

function reset(){
	newRandomNum = Math.floor(Math.random()*(goalMax-goalMin + 1)+goalMin);
	$("#randomNum").text(newRandomNum);
	counter = 0;
	$("#spanPoints").text(counter);
	var newNum1 = Math.floor(Math.random()*cryMax+cryMin);
	var newNum2 = Math.floor(Math.random()*cryMax+cryMin);
	var newNum3 = Math.floor(Math.random()*cryMax+cryMin);
	var newNum4 = Math.floor(Math.random()*cryMax+cryMin);
	var newNum5 = Math.floor(Math.random()*cryMax+cryMin);

	rgem.attr("data-crystalvalue", newNum1);
	ygem.attr("data-crystalvalue", newNum2);
	ggem.attr("data-crystalvalue", newNum3);
	bgem.attr("data-crystalvalue", newNum4);
	pgem.attr("data-crystalvalue", newNum5);
}

var newRandomNum = Math.floor(Math.random()*(goalMax-goalMin + 1)+goalMin);
$("#randomNum").text(newRandomNum);
	$("#happy-corgi-img").hide();
	$("#sad-corgi-img").hide();

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
		counter+=rValue;
		$("#spanPoints").text(counter);

		if (counter === newRandomNum){
			winner();
			reset();
		}
		else if(counter >= newRandomNum){
			loser();
			reset();
		}
	});

	$(".yellow-img").on("click", function(){
		var yValue = ($(this).attr("data-crystalvalue"));
		yValue = parseInt(yValue);
		console.log(yValue);
		counter+=yValue;
		$("#spanPoints").text(counter);

		if (counter === newRandomNum){
			winner();
			reset();
		}
		else if(counter >= newRandomNum){
			loser();
			reset();
		}
	});

	$(".green-img").on("click", function(){
		var gValue = ($(this).attr("data-crystalvalue"));
		gValue = parseInt(gValue);
		console.log(gValue);
		counter+=gValue;
		$("#spanPoints").text(counter);

		if (counter === newRandomNum){
			winner();
			reset();
		}
		else if(counter >= newRandomNum){
			loser();
			reset();
		}
	});

	$(".blue-img").on("click", function(){
		var bValue = ($(this).attr("data-crystalvalue"));
		bValue = parseInt(bValue);
		console.log(bValue);
		counter+=bValue;
		$("#spanPoints").text(counter);

		if (counter === newRandomNum){
			winner();
			reset();
		}
		else if(counter >= newRandomNum){
			loser();
			reset();
		}
	});

	$(".pink-img").on("click", function(){
		var pValue = ($(this).attr("data-crystalvalue"));
		pValue = parseInt(pValue);
		console.log(pValue);
		counter+=pValue;
		$("#spanPoints").text(counter);

		if (counter === newRandomNum){
			winner();
			reset();
		}
		else if(counter >= newRandomNum){
			loser();
			reset();
		}
	});
});
