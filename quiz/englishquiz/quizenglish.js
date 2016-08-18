var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	["My name is James", "Bye", "Goodmorning", "I'm Anna", "C"],
	["How are you?", "I'm fine, thanks", "I'm busy", "Bye bye", "A"],
	["What's the weather like?", "I love to go out", "It's sunny", "You want to go with me?", "B" ],
	["How does this coffee taste?", "It's awful", "It's interesting", "It's suitable", "A"],
	["Is there anybody in class?", "Yes but only one", "Sure! No problem", "I want to go to class", "A"],
	["How many cats do you have?", "I have 2 pugs", "I have 5 puppies", "I have 3 kitties", "C"],
]
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	if(pos >= questions.length){
		if(correct === 6){
			window.open("https://hoangtran190.github.io/quiz/englishquiz/congratulations.html", "_self");
		} else{
			test.innerHTML = "<h3> You got " + correct + " correct answer<br></h3>";
			_("test_status").innerHTML = "Test Complete"; 
			pos = 0;
			correct = 0;
			return false;
		}
	}
	test = _("test");
	_("test_status").innerHTML = "English Question number " + (pos + 1);
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<div class= 'inputdiv'><input type= 'radio' name = 'choices' value = 'A' class= 'button'> " + chA + "<br>";
	test.innerHTML += "<input type= 'radio' name = 'choices' value = 'B' class= 'button'> " + chB + "<br>";
	test.innerHTML += "<input type= 'radio' name = 'choices' value = 'C' class= 'button'> " + chC + "<br></div>";
	test.innerHTML += "<button onclick = 'checkAnswer()'> Submit</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice === questions[pos][4]){
		correct ++;
		console.log(correct);
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);