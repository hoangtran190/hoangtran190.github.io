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

function black(){
	$("h1").style = "color: yellow;"
}

$('#black').click(function(){
	$('body').css('background-color', 'black');
	$('h1').css('color','white');
	$('.wrap').css('border','solid white 5px');
	
})
$('#origin').click(function(){
	$('body').css('background-color', 'white');
	$('.wrap').css('border','solid black 5px');
	$('h1').css('color','black');
	
})

