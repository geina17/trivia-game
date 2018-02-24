var total = 6;
var score = 0;
var wrong = 0;
var unanswered = 0;
//runs timer
var bigben = null;


var clock = {
    time: 2,
	timeleft: 0,

    countDown: function() {
        clock.time--;
        $("#timer").html(clock.time);
    },
    start: function() {
        bigben = setInterval(clock.countDown, 1000);
    },
    stop: function() {
    	// clearInterval(intervalId);
    	if (time == timeleft) {
    		clearInterval(bigben);
            // Display countdown
            $('#timer').html(time + "seconds");
            time--
        }
        //end of timer
	   if (time === timeleft) {
	   	clearInterval(bigben);
            gameOver();
        };
	},
 
};
console.log(clock.time);
console.log(clock.start);
clock.countDown();
console.log(clock.stop);

//on click end bttn
$("#submit").on("click", gameOver)
    //function gameOver on submit
function gameOver() {
    clearTimeout(bigben);
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
// var gameOver = ["b", "b", "d", "d", "d", "b"]
		
//         //checking answers
//         for (i = 1; i < total; i++) {
//             else if (eval('q' + i) == answers[i - 1]) {
//                 score++;
//             } else {
//                 wrong++;
//             }
//         };

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

