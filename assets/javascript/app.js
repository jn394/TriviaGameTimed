$(document).ready(function () {

    var myQuestions = [

        {
            question: "In the Harry Potter series, what is the name of Harry’s pet owl?",
            answers: {
                a: "Owlbert Einstein",
                b: "Hedwig",
                c: "Ghost",
                d: "Hootie"
            },
            correct: "Hedwig",
            source: "https://media.giphy.com/media/hEnME7syCxHrO/giphy.gif"
        },
        {
            question: "Emma Watson is known for playing which character in Harry Potter?",
            answers: {
                a: "Hermione Granger",
                b: "Luna Lovegood",
                c: "Ginny Weasley",
                d: "Cho Chang"
            },
            correct: "Hermione Granger",
            source: "https://assets.rbl.ms/10639477/980x.gif"
        },
        {
            question: "What is Harry Potter's House in Hogwarts?",
            answers: {
                a: "Ravenclaw",
                b: "Hufflepuff",
                c: "Slytherin",
                d: "Gryffindor"
            },
            correct: "Gryffindor",
            source: "https://media1.tenor.com/images/3a943d0a82fac73aabb9e1bc57b24800/tenor.gif?itemid=5903488"
        },
        {
            question: "In what year was the first Harry Potter movie released?",
            answers: {
                a: "1999",
                b: "2000",
                c: "2001",
                d: "2002"
            },
            correct: "2001",
            source: "http://1.bp.blogspot.com/-LypJblUyzZ0/VSAp9dLeMdI/AAAAAAAAGs8/yMccdXJL0CI/s1600/tumblr_lubwx9inBS1qhjhoao1_500.gif"
        },
        {
            question: "Among the wizarding community, the term Muggle refers to what kind of person?",
            answers: {
                a: "A magical person who is really bad at magic",
                b: "A magical person with only one magical parent",
                c: "A non-magical person from a non-magical family",
                d: "A non-magical person from a magical family"
            },
            correct: "A non-magical person from a non-magical family",
            source: "https://media.giphy.com/media/MRNsTRaOIZJMk/giphy.gif"
        },
        {
            question: "What colour is the Hogwarts Express?",
            answers: {
                a: "Emerald",
                b: "Scarlet",
                c: "Indigo",
                d: "Green"
            },
            correct: "Scarlet",
            source: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1441130072-tumblr-mfr8ykndgp1qmt5mvo1-500-1495311052.gif?crop=1xw:1xh;center,top&resize=480:*"
        },
        {
            question: "How are letters sent in the wizarding world?",
            answers: {
                a: "Via broomstick",
                b: "Via lan line",
                c: "Via postmen",
                d: "Via owls"
            },
            correct: "Via owls",
            source: "https://78.media.tumblr.com/22717e68b1d96864e289158317ec817c/tumblr_p2amy1Ewkj1uokcj7o1_500.gif"
        },
        {
            question: "Who played Lord Voldemort in the movies?",
            answers: {
                a: "Jeremy Irons",
                b: "Tom Hiddleston",
                c: "Gary Oldman",
                d: "Ralph Fiennes"
            },
            correct: "Ralph Fiennes",
            source: "http://24.media.tumblr.com/99a4f2e42870617637aa87924544cb96/tumblr_mla4975vsN1rd5otro1_500.gif"
        },
        {
            question: "What is the golden ball in Quidditch called?",
            answers: {
                a: "Snitch",
                b: "Quaffle",
                c: "Bludger",
                d: "Wiffles"
            },
            correct: "Snitch",
            source: "https://media.giphy.com/media/IlVul9hwHHy9O/giphy.gif"
        },
        {
            question: "From what King's Cross platform does the Hogwarts Express leave?",
            answers: {
                a: "Eight & One-Quarter",
                b: "Nine & Three-Quarters",
                c: "Five & A Half",
                d: "Eleventeen"
            },
            correct: "Nine & Three-Quarters",
            source: "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/1/5/enhanced/webdr14/anigif_enhanced-21684-1441100277-2.gif?downsize=715:*&output-format=auto&output-quality=auto"
        }
    ];

    //Hiding display
    $("#display").hide();

    //Variable timer will hold the setInterval when we start the slideshow
    var intervalId;

    //Variables
    var numberCorrect = 0;
    var numberQuestions = 10;
    var score;
    var correctAnswers = [];

    //for the array or object of questions.
    var count = -1;


    //Two mintue count down.
    var countDown = {

        time: 30,

        //A function that at every second it applys the timeCount function.
        startTimer: function () {
            countDown.time = 30;
            intervalId = setInterval(countDown.timeCount, 1000);
            countDown.displayQuestions();
            
            
        },

        //A function that minuses 1 secound 
        timeCount: function () {
            countDown.time--;
            $("#display").text(countDown.timeConverter(countDown.time));

            //If timer is 0 the answer is revealed
            if (countDown.time <= 0) {
                countDown.time = 30;
                setTimeout(countDown.showResutlsWrong(), 100000);
            }

        },

        //showing the question
        displayQuestions: function () {
            
            //Keeps track of which question the loop is on
            count++;
            setTimeout(countDown.nextQuestion, 1000);

            //If the count is the same as the length of the image array game ends
            if (count === myQuestions.length) {
                clearInterval(intervalId);
                $("#display").hide();
                $("#questions").hide();
                countDown.myResults();
            }
        },

        //Shows the next question
        nextQuestion: function () {
            $("#questions").empty();
            $("#gifs").empty();
            $("#results").empty();
            $("#questions").append(myQuestions[count].question);
            correctAnswers.push(myQuestions[count].correct.replace(/\s/g, ''));
            var innerLoop = myQuestions[count].answers;
            console.log(correctAnswers);

            //This for loop starts a loop in the "answers" object 
            for (var letter in innerLoop) {
                //Adds the answers into the "#questions" div
                console.log(innerLoop[letter]);
                $("#questions").append("<div class='ans' text=" + innerLoop[letter].replace(/\s/g, '') + " >" + innerLoop[letter] + "</div>");

            };

            //When a div with the class .ans is clicked it will trigger an event
            $(".ans").on("click", function () {
                console.log($(this).text());
                var clickedAnswer = $(this).text().replace(/\s/g, '');
                if (correctAnswers.includes(clickedAnswer)) {
                    setTimeout(countDown.showResutlsRight(), 100000);
                    numberCorrect++;
                }
                else {
                    setTimeout(countDown.showResutlsWrong(), 100000);
                };
            })
        },

        //A function that will display something when its correct
        showResutlsRight: function () {
            clearInterval(intervalId);
            $("#results").append("<h3>" + "Correct!!!" + "</h3>");
            $("#questions").empty();
            $("#gifs").append("<img src=" + myQuestions[count].source + ">");
            countDown.startTimer();
        },

        //A function that will display something when its wrong
        showResutlsWrong: function () {
            clearInterval(intervalId);
            $("#results").append("<h3>" + "Wrong!!!" + " The correct answer was: " + myQuestions[count].correct + "</h3>");
            $("#questions").empty();
            $("#gifs").append("<img src=" + myQuestions[count].source + ">");
            countDown.startTimer();
        },

        //Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        timeConverter: function (t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "0";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        },

        //if startment showing percentage of right answers
        myResults: function () {

            $("#results").show();
            $("#gifs").empty();

            score = (numberCorrect / numberQuestions) * 100;
            if (score <= 30) {
                $("#endGifs").append("<img src='https://media.giphy.com/media/XgIvYDNkLh49q/giphy.gif'>");
                $("#endResults").append("<h3>" + "Sorry But You Really Are a Muggle" + "</h3>");
            }
            else if (score > 30 && score <= 50) {
                $("#endGifs").append("<img src='http://mrwgifs.com/wp-content/uploads/2013/04/Daniel-Radcliffe-Crying-Gif-In-Harry-Potter.gif'>");
                $("#endResults").append("<h3>" + "Awww It's Ok Atleast You Tried" + "</h3>");
            }
            else if (score > 50 && score <= 70) {
                $("#endGifs").append("<img src='http://lovelace-media.imgix.net/uploads/62/5889f760-a701-0131-b6c9-4ab1d83132ba.gif?'>");
                $("#endResults").append("<h3>" + "Good Job! You're Pretty Good" + "</h3>");
            }
            else if (score > 70 && score <= 90) {
                $("#endGifs").append("<img src='https://media1.tenor.com/images/e8499a0f268be7bc76f80dd453ad2fe2/tenor.gif?itemid=4794040'>");
                $("#endResults").append("<h3>" + "Amazing! You're Really Good" + "</h3>");
            }
            else if (score = 100) {
                $("#endGifs").append("<img src='http://cdn1.alloy.com/wp-content/uploads/2015/06/harry-potter-wow.gif'>");
                $("#endResults").append("<h3>" + "WOW!!! Somebody Read Their Books! A True Potter Head!" + "</h3>");
            };
            $("#score").append("<h3>" + "You Got " + score + "%" + " Correct!" + "</h3>");
        },
    };

    //When startButton is clicked it reveals all the questions and starts the countDown
    $("#startButton").on("click", function () {
        //show all the question
        $("#startButton").hide();
        $("#display").show();
        countDown.startTimer();

    });

});