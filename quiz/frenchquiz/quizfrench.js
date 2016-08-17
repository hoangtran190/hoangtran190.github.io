var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	["Je m'appelle", "Au voir", "Bonjour", "Moi, Anna", "C"],
	["Comment vas tu?", "Je vais bien, merci", "Je suis occupé", "A lundi", "A"],
	["Quel temps fait-il?", "Je voudrais sortir", "Il fait beau", "Voudrais vous venir avec moi?", "B" ],
	["Comment est-il, le téa?", "Il est horrible", "Il est très interesant", "Il est sur", "A"],
	["Is there anybody in class?", "Yes but only one", "Sure! No problem", "I want to go to class", "A"],
	["How many cats do you have?", "I have 2 pugs", "I have 5 puppies", "I have 3 kitties", "C"],
]
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	if(pos >= questions.length){
		if(correct === 6){
			window.open("http://www.w3schools.com", "_self");
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