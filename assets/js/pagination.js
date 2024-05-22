console.log('pagination running...');

let correctAnswers = new Set();
let incorrectQuestions = new Set();
let totalQuestions = 0;

window.onload = function () {
  let contentDiv = document.querySelector('.post-content');
  if (!contentDiv) return;

  let contentHtml = contentDiv.innerHTML;
  let pages = contentHtml.split('<!-- pagebreak -->');

  function trackQuestionStatus(questionIndex, isCorrect) {
    if (isCorrect) {
      correctAnswers.add(questionIndex);
      incorrectQuestions.delete(questionIndex);
    } else {
      incorrectQuestions.add(questionIndex);
    }
    totalQuestions = Math.max(totalQuestions, questionIndex + 1);
  }

  if (pages.length <= 1) {
    contentDiv.style.visibility = 'visible';
    contentDiv.style.opacity = 1;
    return;
  }

  let currentPage = 0;
  let quizFinished = false;

  function showPage(pageNumber) {
    contentDiv.style.opacity = 0; // Start transition out
    setTimeout(() => {
      if (pageNumber >= pages.length) {
        displayResults();
        return;
      }
      contentDiv.innerHTML = pages[pageNumber];
      contentDiv.style.visibility = 'visible';
      contentDiv.style.opacity = 1; // Fade in new content
      currentPage = pageNumber;
      updateNavigation();
      updatePageCounter();
      addQuizFunctionality(
        nextButton,
        updateNavigation,
        trackQuestionStatus,
        currentPage,
        pages.length,
        quizFinished,
      ); // Ensure this function is called after page is shown
    }, 400);
  }

  function updateNavigation(isFinished = false) {
    if (currentPage === pages.length - 1) {
      nextButton.textContent = 'View Results';
      nextButton.disabled = !isFinished; // Disabled until the quiz is finished
      nextButton.style.opacity = isFinished ? '1' : '0.5'; // Opacity based on quiz finished status
    } else {
      nextButton.textContent = '→';
      nextButton.onclick = function () {
        if (currentPage < pages.length - 1) {
          showPage(currentPage + 1);
          nextButton.disabled = true;
          nextButton.style.opacity = '0.5';
        }
      };
    }
  }

  function updatePageCounter() {
    pageCounter.textContent = `${currentPage + 1} / ${pages.length}`;
  }

  let nextButton = document.createElement('button');
  nextButton.textContent = '→';
  nextButton.className = 'pagination-button';
  nextButton.style.opacity = '0.5'; // Opacity 0.5 by default
  nextButton.disabled = true; // Disabled by default

  nextButton.onclick = function () {
    if (!nextButton.disabled) {
      showPage(currentPage + 1);
    }
  };

  let pageCounter = document.createElement('div');
  pageCounter.className = 'page-counter';
  pageCounter.textContent = `${currentPage + 1} / ${pages.length}`;

  let paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination-container';
  paginationContainer.append(pageCounter, nextButton);

  contentDiv.after(paginationContainer);

  showPage(0);
};

function addQuizFunctionality(
  nextButton,
  updateNavigation,
  trackQuestionStatus,
  currentPage,
  totalPages,
  quizFinished,
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
      trackQuestionStatus(currentPage, isAnsweredCorrectly); // Use currentPage instead of questionIndex
      if (correctAnswerSelected) {
        nextButton = document.querySelector('.pagination-button');
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
        if (currentPage === totalPages - 1) {
          quizFinished = true;
          nextButton.textContent = 'View Results';
          nextButton.onclick = function () {
            if (!nextButton.disabled) {
              displayResults();
            }
          };
        }
        console.log(isAnsweredCorrectly);
        updateNavigation(quizFinished);
      }
    };

    if (!question.querySelector('.submit-button')) {
      question.append(submitButton);
    }
  });
}

function displayResults() {
  const contentDiv = document.querySelector('.post-content');
  contentDiv.innerHTML = '';

  const resultsTitle = document.createElement('h2');
  resultsTitle.textContent = 'Quiz Results';
  contentDiv.appendChild(resultsTitle);

  const summary = document.createElement('p');
  summary.textContent = `You got ${correctAnswers.size} out of ${totalQuestions} questions correct.`;
  contentDiv.appendChild(summary);

  if (incorrectQuestions.size > 0) {
    const incorrectTitle = document.createElement('h3');
    incorrectTitle.textContent = 'Questions you missed:';
    contentDiv.appendChild(incorrectTitle);

    const incorrectList = document.createElement('ul');
    incorrectQuestions.forEach((questionIndex) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Question ${questionIndex + 1}`;
      incorrectList.appendChild(listItem);
    });
    contentDiv.appendChild(incorrectList);
  }
}
