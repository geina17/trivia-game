var total = 6;
var score = 0;
var wrong = 0;
var unanswered = 0;
var countdown = 60;

//game function
$(document).ready(function() {

    $("section").hide();
    $("#resultsPg").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        $("section").show();
        startCountdown();
        return;
    });
    
    // $("#start").on("click",function(){
    // 	//gett sdata attribute
    // 	current = $(this).parents("form:first").data(question);
    // 	next = $(this).parents("form:first").data(question)+1;
    // 	//hide qs
    // 	$("section").hide();
    // })
});

function countDown() {
    count--;
    $("#timer").html(count + "seconds");
    $("#done").on("click", function() {
        count = 0;
    });
    //timedout
    if (count == -1) {
        timeUp();
        $("section").hide();
    }
}

function startCountdown() {
	setInterval(countdown,1000);
}

function timeUp(){
	106
}
// function process(q){
// 	if (q =="q1"){
// 		var submitAnswers = $("input[name=q1]:checked").val();
// 		if (submitAnswers == document.forms){
// 			score++;
// 		} 

// 		$(".answers").html(<h3>final score:"+score+"</h3>);
// 	}
// 	return false
// }

function submitAnswers() {
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
    for (i = 1; i < total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == "") {
            // alert("holy questions Batman you missed one!" + i);
            return false;
        }

        //answers
        var answers = ["b", "b", "d", "d", "d", "b"];
        //checking answers
        for (i = 1; i < total; i++) {
            if (eval('q' + i) == answers[i - 1]) {
                score++;
            }
            //results
            var results = document.getElementById('results');
            results.innerHTML = "<h3> you scored <span>" + score + "</span> out of <span>" + total + "</span></h3>";

        }
        console.log("submitAnswers")