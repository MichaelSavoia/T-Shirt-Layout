// var bluebutton = document.getElementById(buttonblue);

// var pinkbutton = document.getElementById(buttonpink);

// var orangebutton = document.getElementById(buttonorange);

// var carted = false;


// bluebutton.addEventListener("click",function(){
// 	// alert("You have added " + + " to your cart")

// 	console.log("carted")

// });

// funtion addPrice(){

// }

var subTotal = 0;

var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;
var isInCart = false;

var subTotalBox = document.getElementById("subtotal");
var tax = document.getElementById("tax")
var totalBox = document.getElementById('total');

var buttonBlue = document.getElementById('buttonblue');
var buttonPink = document.getElementById('buttonpink');
var buttonOrange = document.getElementById('buttonorange');



function addToCart(price,color){
	if(color==='blue' && isBlueInCart === false)
	{
		subTotal += price;
		isBlueInCart = true;
		buttonBlue.className = "active icon icon5"
	}

	else if(color==='blue' && isBlueInCart === true){
		subTotal -= price;
		isBlueInCart = false;
		buttonBlue.className = "icon icon5"
	}

	if(color==='pink' && isPinkInCart === false)
	{
		subTotal += price;
		isPinkInCart = true;
		buttonPink.className = "active icon icon5"
	}

	else if(color==='pink' && isPinkInCart === true){
		subTotal -= price;
		isPinkInCart = false;
		buttonPink.className = "icon icon5"
	}

	if(color==='orange' && isOrangeInCart === false)
	{
		subTotal += price;
		isOrangeInCart = true;
		buttonOrange.className = "active icon icon5"
	}

	else if(color==='orange' && isOrangeInCart === true){
		subTotal -= price;
		isOrangeInCart = false;
		buttonOrange.className = "icon icon5"
	}

	subTotalBox.innerHTML = subTotal;
	tax.innerHTML = subTotal*.065;
	totalBox.innerHTML = subTotal*.065+subTotal;

	// console.log(price,color)
	console.log(subTotal)
}

