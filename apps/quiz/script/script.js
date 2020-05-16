document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.getElementById('btnOpenModal');
  const modalBlock = document.getElementById('modalBlock');
  const closeModal = document.getElementById('closeModal');
  const questionTitle = document.getElementById('question');
  const formAnswers = document.getElementById('formAnswers');
  const data = [
    { id: 1, title: 'Standart', image: './image/burger.png', },
    { id: 2, title: 'Black', image: './image/burgerBlack.png', },
  ];

  const playTest = () => {
    const renderQuestions = () => {
      questionTitle.textContent = 'Choose a color of the burger, please.';
      data.forEach((item, idx) => {
        const div = document.createElement('div');
        div.classList.add('answers-item');
        div.classList.add('d-flex');
        (idx === 0) ? div.classList.add('flex-column') : div.classList.add('justify-content-center');
        const cardAnswer = `
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src=${ item.image } alt="burger">
            <span>${ item.title }</span>
          </label>
        `;
        div.innerHTML = cardAnswer;
        formAnswers.insertAdjacentElement('afterbegin', div);
      });
    };
    renderQuestions();
  }

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
  });


})