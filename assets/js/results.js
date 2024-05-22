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
