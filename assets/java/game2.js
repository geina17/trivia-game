var total = 6;
var score = 0;
var wrong = 0;
var unan = 0;
//runs timer
var bigben = null;


var clock = {
    time: 60,
    timeleft: 0,
    bigben: null,

    countDown: function() {
        clock.time--;
        $("#timer").html(clock.time);
        clock.stop();
    },
    start: function() {
        clock.bigben = setInterval(clock.countDown, 1000);
    },
    stop: function() {

        if (clock.time > clock.timeleft) {

            $('#timer').html(clock.time + "seconds");

        }

        if (clock.time === clock.timeleft) {
            window.clearInterval(clock.bigben);
            //gameOver();
        }
    },
};
clock.start();
console.log(clock.time);
console.log(clock.start);
clock.countDown();
console.log(clock.stop);

//on click end bttn
$("#submit").on("click", gameOver)
    //function gameOver on submit
function gameOver() {
	setTimeout(function(){bigben;},1000);
    // clearTimeout(bigben);
    $("#board").hide();
    $("#menu").hide();
    $("#quiz").hide();
    $("#resultsPg").show();

    //count correct
    gameOver()
        //results
    $("#resultsPg").append(

    );
};

$("#menu").show();
$("#board").hide();
$("#quiz").hide();
$("#resultsPg").hide();

$("#start").click(function() {
	  clock.start();
    $("#board").show();
    $("#quiz").show();
    $("#resultsPg").hide();
    $("#menu").hide();
});

$("#submit").click(function() {
    $("#board").hide();
    $("#menu").hide();
    $("#quiz").hide();
    $("#resultsPg").show();
});

// function answers() {
//     //user input
//     var q1 = document.forms["quiz forms"]["q1"].value;
//     var q2 = document.forms["quiz forms"]["q2"].value;
//     var q3 = document.forms["quiz forms"]["q3"].value;
//     var q4 = document.forms["quiz forms"]["q4"].value;
//     var q5 = document.forms["quiz forms"]["q5"].value;
//     var q6 = document.forms["quiz forms"]["q6"].value;
// 	   var results = ["b", "b", "d", "d", "d", "b"]
//         //checking answers
//         for (i = 1; i < total; i++) {
//             else if (eval('q' + i) == results[i - 1]) {
//                 score++;
//             } else {
//                 wrong++;
//             }
// 		$("#correctAnswers").html(score);
// 		$("#wrongAnswers").html(wrong);
// 		$("#unanswers").html(unan);
//         };
