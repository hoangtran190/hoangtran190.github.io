var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
	["Tôi tên là Hoàng", "Hẹn gặp lại", "Chào buổi sáng", "Còn tôi là Tùng", "C"],
	["Bạn có khỏe không?", "Cảm ơn, tôi khỏe", "Tôi bận lắm", "Thứ 2 gặp lại", "A"],
	["Thời tiết hôm nay thế nào", "Tôi muốn đi chơi", "Lạnh lắm", "Muốn đến trường cùng tôi không", "B" ],
	["Trà ngon không?", "Không ngon lắm", "Không hay lắm", "Không đẹp lắm", "A"],
	["Lớp bạn có ai không?", "Giờ này thì không", "Tất nhiên rồi", "Tôi muốn đến lớp", "A"],
	["Bạn có bao nhiều con mèo", "Tôi có 2 con chihoahoa", "Tôi có 5 con cún", "Tôi có 3 con mèo nhỏ", "C"],
]
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	if(pos >= questions.length){
		if(correct === 6){
			window.open("https://hoangtran190.github.io/quiz/vietnamquiz/congratulations.html", "_self");
		} else{
			test.innerHTML = "<h3> Bạn có " + correct + " câu trả lời đúng<br></h3>";
			_("test_status").innerHTML = "Hoàn thành quiz"; 
			pos = 0;
			correct = 0;
			return false;
		}
	}
	test = _("test");
	_("test_status").innerHTML = "Quiz tiếng việt số " + (pos + 1);
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