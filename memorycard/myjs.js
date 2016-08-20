var card_base = ['arrow', 'bubbles', 'bubbles', 'change','cloud', 'create', 'dark', 
	'dash',	'dream', 'earth', 'erase', 'fight', 'fire', 'float', 'flower', 'fly', 
	'freeze', 'glow', 'illusion', 'jump', 'libra', 'libra', 'light', 'little', 'loop', 
	'maze', 'mirror', 'mist', 'move', 'nothing', 'power', 'rain', 'return', 'sand', 
	'shadow', 'shadow', 'shield', 'shot', 'silent', 'sleep', 'snow', 'song', 'storm',
	 'sweet', 'sword', 'through', 'thunder', 'time', 'time', 'twin', 'voice', 'water', 
	'wave', 'wind', 'wood'];
var cards = [];
var cardNumber = 0;
var current = [];
var count = 0;
var timer = 0;

function askUser(){
	var header = '<h1>Welcome to Memory card game</h1>';
	var ask = '';
	ask += '<p>Choose game mode</p>' +
			'<button type="button" onclick= "game(1)"> NORMAL </button>' +
			'<button type="button" onclick= "game(2)" style = "color: red"> HARD </button>';
	$('.header').html(header);
	$('.board').html(ask);
}

function game(mode){
	if(mode==2){
		cardNumber = 12;
		timer = 800;
		newBoard(); 
		progressBar(timer);
	}
	else {
		cardNumber = 8;
		timer = 600;
		newBoard();
		progressBar(timer);
	}
}

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

function progressBar(timer){
	$('.header').html('<div class="meter"><span id = "progressing" style="width: 100%"></span></div>');
    var elem = document.getElementById("progressing"); 
    var width = 100;
    var id = setInterval(frame, timer);
    function frame() {
        if (count < cards.length && width == 0) {
            clearInterval(id);
            defeat();
        } else {
        	width --; 
            elem.style.width = width + '%'; 
        }
    }
}	


function newBoard(){
	cards = shuffle(card_base).slice(0, cardNumber);
	cards = shuffle(cards.concat(cards));
	var output = '';
	for(var i = 0; i < cards.length; i++){
		output += '<div class = "card" data-name =  "'+ cards[i] + '" onclick = "clickoncard(this)">'+
				  '<div class = "back"><img src = "/memorycard/img/' + cards[i] + '.jpg"></div>' +
				  '<div class = "front"><img src = "/memorycard/img/back.jpg" ></div> </div>';	
	}
	$(".board").html(output);
}

function flip(card){
	$(card).find(".front").css("transform", "rotateY(180deg)");
	$(card).find(".back").css("transform", "rotateY(0deg)");
}

function flipBack(card){
	$(card).find(".front").css("transform", "rotateY(0deg)");
	$(card).find(".back").css("transform", "rotateY(-180deg)");
}

function clickoncard(card){
	flip(card);
	$(card).css('pointer-events', 'none');
	if(current.length === 0){
		current.push($(card));
	} 
	else {
		current.push ($(card));
		if(current[0].attr('data-name') !== current[1].attr('data-name')){
			$('.card').css('pointer-events', 'none');
			setTimeout(function(){
				flipBack(current[0]);
				flipBack(current[1]);
				$(current[0]).css('pointer-events', 'auto');
				$(current[1]).css('pointer-events', 'auto');
				$('.card').css('pointer-events', 'auto');
				current = [];
			}, 800);

		}
		else{
				count += 2;
				if(count === cards.length){
					victory();
				}
				console.log(count);
				$(current[0]).removeClass("card").addClass("lock");
				$(current[1]).removeClass("card").addClass("lock");
				current = [];
			}
	} 

}

function victory(){
	$('.header').html('');
	$(".board").html('<p>YOU WIN</p><img src="/memorycard/img/win.gif"> <br> <button type="button"' + 
		' onclick="askUser()">PLAY AGAIN?</button></div><audio autoplay><source src="/memorycard/win.mp3" '+
		' type="audio/mpeg"></audio>');	
	count = 0;
}

function defeat(){
	$('.header').html('');
	$(".board").html('<p>YOU LOOSE</p><img src="/memorycard/img/cry.gif"> <br>'+
		'<button type="button" onclick="askUser()">PLAY AGAIN?</button>');
	count = 0;
}
