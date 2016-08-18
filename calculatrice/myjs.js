var display = document.getElementById('display');

function addToScreen(str){
	// if(str === 'backspace'){
	// 	if(display.value.length === 0){
	// 		display.value = ' ';
	// 	}
	// 	else display.value = display.value.slice(0, display.value.length -1);
	// }


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