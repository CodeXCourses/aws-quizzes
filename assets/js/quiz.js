function addQuizFunctionality(
  nextButton,
  updateNavigation,
  trackQuestionStatus,
  currentPage,
  totalPages,
) {
  console.log('Adding quiz functionality');
  let questions = document.querySelectorAll('.post-content > ul');
  questions.forEach((question, questionIndex) => {
    let options = question.querySelectorAll('li');
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-button';
    submitButton.disabled = true;

    let isAnsweredCorrectly = false;
    let isAnsweredIncorrectly = false;

    options.forEach((option, optionIndex) => {
      let optionWrapper = document.createElement('div');
      optionWrapper.className = 'option-wrapper';

      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${questionIndex}`;
      radio.value = optionIndex;
      radio.style.marginRight = '10px';
      optionWrapper.appendChild(radio);

      let optionText = option.querySelector('p') || option.firstChild;
      optionWrapper.appendChild(optionText);

      option.prepend(optionWrapper);

      radio.onchange = function () {
        submitButton.disabled = false;
      };

      let feedback = option.querySelector('ul li');
      if (feedback) {
        let feedbackText = feedback.textContent;
        feedback.remove(); // Remove the original feedback element
        let feedbackDiv = document.createElement('div');
        feedbackDiv.textContent = feedbackText;
        feedbackDiv.className = 'feedback';
        feedbackDiv.style.display = 'none';
        option.append(feedbackDiv);
      }
    });

    submitButton.onclick = function () {
      let correctAnswerSelected = false;
      options.forEach((option) => {
        let feedbackDiv = option.querySelector('.feedback');
        let radio = option.querySelector('input[type="radio"]');
        if (radio.checked) {
          if (feedbackDiv.textContent.includes('Correct')) {
            correctAnswerSelected = true;
            console.log('Correct answer selected');
            option.style.color = 'green';
            options.forEach((opt) => {
              let optRadio = opt.querySelector('input[type="radio"]');
              optRadio.disabled = true;
            });
          } else {
            radio.disabled = true;
            option.style.color = 'red';
          }
          feedbackDiv.style.display = 'block';
        }
      });
      submitButton.disabled = true;
      if (correctAnswerSelected && !isAnsweredIncorrectly) {
        isAnsweredCorrectly = true;
      } else {
        isAnsweredIncorrectly = true;
        isAnsweredCorrectly = false;
      }
      trackQuestionStatus(questionIndex, isAnsweredCorrectly);
      if (correctAnswerSelected) {
        nextButton = document.querySelector('.pagination-button');
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
        if (currentPage === totalPages - 1) {
          nextButton.textContent = 'View Results';
        }
        console.log(isAnsweredCorrectly);
        updateNavigation(isAnsweredCorrectly);
      }
    };

    if (!question.querySelector('.submit-button')) {
      question.append(submitButton);
    }
  });
}
