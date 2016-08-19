var card_base = ['arrow', 'bubbles', 'bubbles', 'change','cloud', 'create', 'dark', 
	'dash',	'dream', 'earth', 'erase', 'fight', 'fire', 'float', 'flower', 'fly', 
	'freeze', 'glow', 'illusion', 'jump', 'libra', 'libra', 'light', 'little', 'loop', 
	'maze', 'mirror', 'mist', 'move', 'nothing', 'power', 'rain', 'return', 'sand', 
	'shadow', 'shadow', 'shield', 'shot', 'silent', 'sleep', 'snow', 'song', 'storm',
	 'sweet', 'sword', 'through', 'thunder', 'time', 'time', 'twin', 'voice', 'water', 
	'wave', 'wind', 'wood'];
var cards = [];
var count = 0;
var current = [];

function shuffle(array){
	var currentPass = array.length;
	var index, temp;
	while(currentPass > 0){
		index = Math.floor(Math.random() * currentPass);
		currentPass --;
		temp = array[currentPass];
		array[currentPass] = array[index];
		array[index] = temp;
	}
	return array;
}

// total card = 24
function newBoard(){
	cards = shuffle(card_base).slice(0, 12);
	cards = shuffle(cards.concat(cards));
	var output = '';
	for(var i = 0; i < cards.length; i++){
		output += '<div class = "card" data-name =  "'+ cards[i] + '" onclick = "clickoncard(this)">'+
				  '<div class = "front"><img src = "img/' + cards[i] + '.jpg"></div>' +
				  '<div class = "back" ><img src = "img/back.jpg" ></div> </div>';	
	}
	$(".board").html(output);
}

function clickoncard(card){
	$(card).flip();
}


// function flip(card){
// 	$(card).find(".front").css("transform", "rotateY(0deg)");
// 	$(card).find(".back").css("transform", "rotateY(-180deg)");
// }
// function flipBack(card){
// 	$(card).find(".back").css("transform", "rotateY(0deg)");
// 	$(card).find(".front").css("transform", "rotateY(180deg)");
// }
// setTimeout(flipBack, 1000);

// function clickoncard(card){
// 	flip(card);
// 	if(current.length === 0){
// 		current.push($(card));
// 	} 
// 	else {
// 		current.push ($(card));
// 		if(current[0].attr('data-name') !== current[1].attr('data-name')){
			
// 			flipBack(current[0]);
// 			flipBack(current[1]);
// 			current = [];	

// 			console.log('dif');
// 		}else{

// 			console.log("same");
// 			current = [];
// 		}

		
// 	} 
	
// }
