document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.getElementById('btnOpenModal');
  const modalBlock = document.getElementById('modalBlock');
  const btnCloseModal = document.getElementById('closeModal');
  const questionTitle = document.getElementById('question');
  const formAnswers = document.getElementById('formAnswers');
  const burgerBtn = document.getElementById('burger');

  let clientWidth = document.documentElement.clientWidth;
  burgerBtn.style.display = 'none';

  if(clientWidth < 768) {
    burgerBtn.style.display = 'flex';
  } else {
    burgerBtn.style.display = 'none';
  }

  const data = [
    { id: 1, title: 'Standart', image: './image/burger.png', },
    { id: 2, title: 'Black', image: './image/burgerBlack.png', },
  ];

  const playTest = () => {
    const renderQuestions = () => {
      questionTitle.textContent = 'Choose a color of the burger, please.';
      formAnswers.textContent = '';
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
  };

  const closeModalClickOnMask = event => {
    if (event.target.id === 'modalBlock') closeModal();
  }

  const openModal = () => {
    modalBlock.classList.add('d-block');
    playTest();

    window.addEventListener('click', closeModalClickOnMask);
  };

  const closeModal = () => {
    burgerBtn.classList.remove('active');
    modalBlock.classList.remove('d-block');
    burgerBtn.classList.remove('active');

    window.removeEventListener('click', closeModalClickOnMask);
  };

  window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;
    console.log("clientWidth", clientWidth)
    if(clientWidth < 768) {
      burgerBtn.style.display = 'flex';
    } else {
      burgerBtn.style.display = 'none';
    }
  });

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('active');

    openModal();
  });

  btnOpenModal.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);

})