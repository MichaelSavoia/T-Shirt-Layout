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
var timeStamp = 0;

var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;
var isInCart = false;
var open = false;

var taxN = 0.065;
var text = "";

var timeStart = new Date();

var remove = document.getElementById('remove')
var subTotalBox = document.getElementById("subtotal");
var tax = document.getElementById("tax")
var totalBox = document.getElementById('total');
var quantity = document.getElementById('quantity')
var items = document.getElementById('items')
var shirtPrice = document.getElementById('shirtPrice')

var buttonBlue = document.getElementById('buttonblue');
var buttonPink = document.getElementById('buttonpink');
var buttonOrange = document.getElementById('buttonorange');
var cartButton = document.getElementById('cartIcon');

var cart = document.getElementById('cart');


var blueShirt = {
	color: 'blue',
	price: 29,
	name: "Save My Trees",
	timeStart: 0,
}

var pinkShirt = {
	color: 'pink',
	price: 19,
	name: "Nature Lover",
	timeStart: 0,
}

var orangeShirt = {
	color: 'orange',
	price: 39,
	name: "Forrest Walk",
	timeStart: 0,
}

var carted = [];

// carted.forEach(function(shirt){
// 	subTotal += shirt.price;

// 	console.log(subTotal)
// })

function updateCart(){
	subTotal = 0;
	items.innerHTML ="";
	text= "";
	carted.forEach(function(shirt){
		subTotal += shirt.price;
		date = new Date(shirt.timeStart);
		timeStamp = moment(date).fromNow();
		text += `<div class="item"><span onClick="removeItem('${shirt.name}')" id="remove">x</span><h3 class="shirtName">${shirt.name}</h3><h3 class="shirtPrice">$${shirt.price}</h3><span class="time">added to cart ${timeStamp}</span></div>`;
	});

	items.innerHTML = text;
	quantity.innerHTML = carted.length;
	subTotalBox.innerHTML = subTotal.toFixed(2);
	tax.innerHTML = (subTotal*taxN).toFixed(2);
	totalBox.innerHTML = (subTotal*taxN+subTotal).toFixed(2);
}



function addToCart(price,color){
	items.innerHTML = "";
	text = "";
	if(color==='blue' && isBlueInCart === false)
	{
		// subTotal += price;
		isBlueInCart = true;
		carted.push(blueShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		buttonBlue.className = "active icon icon5";
		date = new Date();
		blueShirt.timeStart = date;
	}

	else if(color==='blue' && isBlueInCart === true){
		// subTotal -= price;
		isBlueInCart = false;
		var pos = carted.indexOf(blueShirt);
		carted.splice(pos,1);
		buttonBlue.className = "icon icon5";
	}

	if(color==='pink' && isPinkInCart === false)
	{
		// subTotal += price;
		isPinkInCart = true;
		carted.push(pinkShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		buttonPink.className = "active icon icon5";
		pinkShirt.timeStart = Date.now();
	}

	else if(color==='pink' && isPinkInCart === true){
		// subTotal -= price;
		isPinkInCart = false;
		var pos = carted.indexOf(pinkShirt);
		carted.splice(pos,1);
		buttonPink.className = "icon icon5";
	}

	if(color==='orange' && isOrangeInCart === false)
	{
		// subTotal += price;
		isOrangeInCart = true;
		carted.push(orangeShirt);
		// carted.forEach(function(shirt){
		// 	subTotal = 0
		// 	subTotal += shirt.price;
		// })
		buttonOrange.className = "active icon icon5";
		orangeShirt.timeStart = Date.now();
	}

	else if(color==='orange' && isOrangeInCart === true){
		// subTotal -= price;
		isOrangeInCart = false;
		var pos = carted.indexOf(orangeShirt);
		carted.splice(pos,1);
		buttonOrange.className = "icon icon5";
	}


	updateCart();


	// console.log(price,color)
	// console.log(subTotal)
	// console.log(shirtName)
	// console.log(shirtPrice)
}


function removeItem(shirt){
	var currentItem = null;
	carted.forEach(function(item){
		if(item.name===shirt){
			var pos = carted.indexOf(item);
			carted.splice(pos,1);
			currentItem = item;
		}
	})
	updateCart();
	if(currentItem.color==='blue'){
		buttonBlue.className = "icon icon5";
	}
	if(currentItem.color==='pink'){
		buttonPink.className = "icon icon5";
	}
	if(currentItem.color==='orange'){
		buttonOrange.className = "icon icon5";
	}
}

cartButton.addEventListener("click",function(){
	if (open === false) {
		cart.className = "animateCartOpen cart";
		open = true;
	}
	else{
		cart.className = "animateCartClose cart";
		open = false;
	}

});

