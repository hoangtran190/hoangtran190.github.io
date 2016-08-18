var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	["Mi chiamo James", "Ci vediamo", "Buongiorno", "Sono Anna", "C"],
	["Come stai?", "Bene, gracie", "Sono occupato", "A lunedi", "A"],
	["Com'è il tempo?", "Vorrei sortire", "Fa molto freddo", "Vorrei venire con te", "B" ],
	["Com'è il téa?", "È orribile", "È molto interesante", "È certo", "A"],
	["Quanti studenti ci sono della tua classe ", "Ci sono 10", "Certo! Non c'è problema", "Voglio venire alla lezione", "A"],
	["Quanti gatti hai", "Ho 2 carlini", "Ho 5 cuccioli", "Ho 3 mici", "C"],
]
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	if(pos >= questions.length){
		if(correct === 6){
			window.open("http://www.w3schools.com", "_self");
		} else{
			test.innerHTML = "<h3> Hai " + correct + " risposte corrette<br></h3>";
			_("test_status").innerHTML = "Quiz completo"; 
			pos = 0;
			correct = 0;
			return false;
		}
	}
	test = _("test");
	_("test_status").innerHTML = "Quiz italiano numero " + (pos + 1);
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