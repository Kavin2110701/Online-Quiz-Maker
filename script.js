let currentQuestion = 0;

const questions = [
    {
        number: "Question 1/3",
        text: "HAVE YOU PRACTICED SPORT OR ANY PHYSICAL ACTIVITY OUT OF YOUR WORKING HOURS AT LEAST 30 MIN OR MORE DURING THE LAST MONTH?",
        options: [
            "3 times or more per week.",
            "1 or 2 times per week.",
            "Less than 4 times per month.",
            "I don’t practice sport during the month."
        ],
        name: "question1"
    },
    {
        number: "Question 2/3",
        text: "HOW OFTEN DO YOU EAT VEGETABLES?",
        options: [
            "Every day.",
            "Several times a week.",
            "Once a week.",
            "Rarely."
        ],
        name: "question2"
    },
    {
        number: "Question 3/3",
        text: "WHAT IS YOUR PREFERRED PROGRAMMING LANGUAGE?",
        options: [
            "Python",
            "JavaScript",
            "Java",
            "C++"
        ],
        name: "question3"
    }
];

function loadQuestion() {
    const questionNumberElement = document.getElementById('question-number');
    const questionTextElement = document.getElementById('question-text');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    const current = questions[currentQuestion];

    questionNumberElement.textContent = current.number;
    questionTextElement.textContent = current.text;

    optionsElement.innerHTML = '';
    current.options.forEach((option) => {
        const label = document.createElement('label');
        label.classList.add('option');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = current.name;
        input.value = option;
        
        const span = document.createElement('span');
        span.classList.add('option-text');
        span.textContent = option;
        
        label.appendChild(input);
        label.appendChild(span);
        optionsElement.appendChild(label);
    });

    if (currentQuestion === questions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

function nextQuestion() {
    if (isOptionSelected()) {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        }
    } else {
        alert("Please select an option.");
    }
}

function isOptionSelected() {
    const current = questions[currentQuestion];
    return document.querySelector(`input[name="${current.name}"]:checked`) !== null;
}

function submitQuiz() {
    if (isOptionSelected()) {
        const form = document.getElementById('quiz-form');
        
        questions.forEach((question) => {
            const selectedOption = document.querySelector(`input[name="${question.name}"]:checked`);
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = question.name;
            input.value = selectedOption ? selectedOption.value : "Not Answered";
            form.appendChild(input);
        });

        form.submit();
    } else {
        alert("Please select an option.");
    }
}

// Initialize the first question
loadQuestion();
