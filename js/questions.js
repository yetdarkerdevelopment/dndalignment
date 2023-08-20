let current_question = -1;
let answers = [0, 0];
let history = [];
let questions = [
    "Following the rules is important.",
    "Honor is important to me.",
    "People should be respectful and polite at all times.",
    "Loyalty is of high importance to me.",
    "I keep my promises.",
    "Hierarchy should be well defined.",
    "I follow a rigid set of procedures or a code, whether set by an authority or myself.",
    "Agreements should be well defined and in written (or other physical, well defined) form.",
    "I am a stalwart person.",
    "I do what I want.",
    "Individual is more important than the collective.",
    "There is nothing wrong with cheating the system.",
    "I am a flexible person.",
    "Spontaneity is undervalued.",
    "I am willing to manipulate people.",
    "I like violence.",
    "I put my goals above others.",
    "Might makes right.",
    "Others are worthless.",
    "I do not easily let go of my gruges.",
    "I have a strong sense of emapthy.",
    "Death is a tragedy that should be avoided.",
    "I follow a humanist philosophy.",
    "I value life."
];
let axis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let direction = [1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1]

function nextQuestion() {
    current_question += 1;
    if (current_question != questions.length) {
        questionElement = document.getElementById("question");
        questionElement.innerHTML = `${current_question + 1}. ${questions[current_question]}`;
    }
    else {
        for (let i = 0; i < questions.length; i += 1) {
            answers[axis[i]] += direction[i] * history[i];
        }
        window.location.assign(`https://yetdarkerdevelopment.github.io/dndalignment/results.html?law=${answers[0]}&evil=${answers[1]}`);
    }
}

function backQuestion() {
    if (current_question > 0) {
        current_question -= 1;
        questionElement = document.getElementById("question");
        questionElement.innerHTML = `${current_question + 1}. ${questions[current_question]}`;
        history.pop()
    }
}

let yesBtn = document.getElementById("yesBtn");
let unsureBtn = document.getElementById("unsureBtn");
let noBtn = document.getElementById("noBtn");
let backBtn = document.getElementById("backBtn");

yesBtn.onclick = function () {
    history.push(1);
    nextQuestion();
}
unsureBtn.onclick = function () {
    history.push(0);
    nextQuestion();
}
noBtn.onclick = function () {
    history.push(-1);
    nextQuestion();
}
backBtn.onclick = backQuestion;

nextQuestion();