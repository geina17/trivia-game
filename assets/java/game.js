function submitAnswers() {
	var total=6;
	var score = 0;
	//user input
	var q1 = document.forms["quiz forms"]["q1"].value;
	var q2 = document.forms["quiz forms"]["q2"].value; 
	var q3 = document.forms["quiz forms"]["q3"].value; 
	var q4 = document.forms["quiz forms"]["q4"].value;  
	var q5 = document.forms["quiz forms"]["q5"].value; 
	var q6 = document.forms["quiz forms"]["q6"].value; 

	//validation do for each q
	// if (q1 == null || q1 == ""){
	// 	alert("holy questions Batman you missed one!");
	// 	return false;
	// }
	for (i= 1; i < total; i++ ){
		if (eval('q'+i) == null || eval('q'+i) == ""){
		alert("holy questions Batman you missed one!" + i);
		return false;
	}

	//answers
	var answers = ["b","b","d","d","d","b"];
	//checking answers
	for (i= 1; i <total;i++){
		if (eval('q'+i) == answers [i-1]){
			score++;
	}
	//results
	var results = document.getElementById('results');
	results.innerHTML = "<h3> you scored <span>" +score+"</span> out of <span>"+total+"</span></h3>";
	alert(" "+ scored)
}

function timer(){
	var totalSeconds = 30;
	var seconds =parseInt(totalSeconds%30);

	document.getElementById("timer").innerHTML= "time left:"+seconds+"seconds";
	if (seconds < 0) {
		setTimeout("document.quiz.submit()",1);
	} else {
		totalSeconds=totalSeconds -1;
		seconds=parseInt(seconds%30);
		setTimeout("checkTime()",1000);
	}
}