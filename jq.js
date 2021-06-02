let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let questions = quiz.sort(function () {
    return 0.5 - Math.random();

});

let totalQuestion = questions.length;



$(function () {
    let totalTime = 200;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter;

        $(".timerBox span").text(min + ":" + sec);
        //console.log("min = " + min);
        //console.log("sec = " + sec);
        if (counter == totalTime) {

            alert("Time's up. Press ok to show the result.");
            reuslt();
            clearInterval(timer);
        }

    }, 1000); //timer is set for 1 sec interval

    // print Question
    printQuestion(index);

});

//function print Question

function printQuestion(i) {
    //console.log(questions[0]);
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}

// ans check

function checkAnswer(option) {
    attempt++;

    let optionclicked = $(option).data("opt");

    //console.log(questions[index]);
    if (optionclicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick", "");


}


// to check ans




// for next que start
function showNext() {

    if (index >= questions.length - 1) {
        showResult(0);
        return;

    }

    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick", "checkAnswer(this)");


    printQuestion(index);

}




//for next que end 



// result starts

function showResult(j) {

    if (
        j == 1 &&
        index < questions.length - 1 &&
        !confirm("Quiz has not finished yet. Press ok to skip quiz & get you final result."
        )
    ) {
        return;

    }

    result();

}

// result end

// result fun start

function result() {
    $("#questionScreen").hide();
    $("#resultScreen").show();

$("#totalQuestion").text(totalQuestion);
    $("#attemptquestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}



// result fun end 





