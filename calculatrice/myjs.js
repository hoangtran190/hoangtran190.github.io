var display = document.getElementById('display');

function addToScreen(str){
	display.value +=str;
	if(str === 'c'){
		display.value = ' ';
	}

}
function answer(){
	if(display.value.length === 0) {display.value = "0"}
	else {x = display.value;
		x = eval(display.value);
		
		display.value = x;}
}
function backspace(){
	if(display.value.length === 0){
		display.value = "";
	}
	else display.value = display.value.slice(0,display.value.length-1);
}
function square(){
	x = display.value;
	x = x * x;
	display.value = x;
}
function sqr(){
	x = display.value;
	x = Math.sqrt(x);
	display.value = x;
}



$('#black').click(function(){
	$('body').css('background-color', 'black');
	$('h1').css('color','white');
	$('.wrap').css('border','solid white 5px');
	$('button').css('color','white');
	$('button').css('background-color','grey');
	$('button').css('border-radius','5px');
	$('.wrap').css('background-color',' #ffff00');
})
$('#origin').click(function(){
	$('body').css('background-color', 'white');
	$('.wrap').css('border','solid black 5px');
	$('h1').css('color','black');
	$('button').css('color','black');
	$('button').css('background-color','white');
	$('button').css('border-radius','5px');
	$('.wrap').css('background-color','grey');
})
$('#magenta').click(function(){
	$('body').css('background-color', '#ffb3ff');
	$('.wrap').css('border','solid black 5px');
	$('h1').css('color','black');
	$('button').css('color','black');
	$('button').css('background-color',' #ffdd99');
	$('button').css('border-radius','5px');
	$('.wrap').css('background-color','#b3ffb3');
})
