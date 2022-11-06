
selectedAnswers = {};
MCQOptions = ['a', 'b', 'c', 'd'];

function setAnswer(id) {
    // id is year:set:qno:qtype:answer:selectedAnswer
    data = id.split(":");

    // Get qid
    qid = data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3] + ":" + data[4]
    selectedAnswer = data[5];

    if (data[3] == "mcq") {
        selectedAnswers[qid] = selectedAnswer;

        // Set all buttons to not active.
        // Toggle clicked button.
        MCQOptions.forEach(e => {
            document.getElementById(qid + ":" + e).classList.remove('active');
        });

        document.getElementById(id).classList.add('active');
    } else if (data[3] == "msq") {
        document.getElementById(id).classList.toggle('active');

        // Create selected answer string.
        selectedAnswer = "";
        MCQOptions.forEach(e => {
            if (document.getElementById(qid + ":" + e).classList.contains('active')) {
                selectedAnswer += e;
            }
        });

        if (selectedAnswer == "") {
            // Delete answer
            delete selectedAnswers[qid];
        } else {
            selectedAnswers[qid] = selectedAnswer;
        }

    } else if (data[3] == "nat") {
        correctAnswerArray = data[4].split(",");

        natAnswer = document.getElementById(id).value;

        floatNatAnswer = parseFloat(natAnswer);
        if (floatNatAnswer != NaN) {
            selectedAnswers[qid] = floatNatAnswer;
        }
    }

    if (qid in selectedAnswers) {
        document.getElementById(qid + ':submit-answer').classList.remove('disabled');
    } else {
        document.getElementById(qid + ':submit-answer').classList.add('disabled');
    }
}

function checkAnswer(id) {
    // id is year:set:qno:qtype:answer:submit-answer
    data = id.split(":");

    // Get qid
    qid = data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3] + ":" + data[4];
    selectedAnswer = selectedAnswers[qid];
    correctAnswer = data[4];
    questionType = data[3];
    isAnswerCorrect = true;

    if (questionType == "mcq" || questionType == "msq") {
        MCQOptions.every((e) => {
            if (selectedAnswer.includes(e) ^ correctAnswer.includes(e)) {
                isAnswerCorrect = false;
                return false;
            }
            return true;
        });
    } else if (questionType == "nat") {
        correctAnswerArray = data[4].split(",");
        correctAnswerLowerBound = parseFloat(correctAnswerArray[0]);
        correctAnswerUpperBound = parseFloat(correctAnswerArray[1]);

        selectedAnswer = selectedAnswers[qid];

        if (!(correctAnswerLowerBound <= selectedAnswer && selectedAnswer <= correctAnswerUpperBound)) {
            isAnswerCorrect = false;
        }
    }


    if (isAnswerCorrect) {
        document.getElementById(qid).classList.remove('border-danger');
        document.getElementById(qid).classList.add('border', 'border-4', 'border-success');
    } else {
        document.getElementById(qid).classList.remove('border-success');
        document.getElementById(qid).classList.add('border', 'border-4', 'border-danger');
    }
}

function clearAnswer(id) {
    console.log(id);

    // qid is year:set:qno:qtype:answer:submit-answer
    data = id.split(":");

    // Get qid
    qid = data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3] + ":" + data[4]

    // Delete answer
    delete selectedAnswers[qid];

    // Disable button
    document.getElementById(qid + ':submit-answer').classList.add('disabled');

    // Remove active buttons
    MCQOptions.forEach((e) => {
        document.getElementById(qid + ":" + e).classList.remove('active');
    });

    // Remove border
    document.getElementById(qid).classList.remove('border', 'border-4', 'border-success', 'border-danger');
}

