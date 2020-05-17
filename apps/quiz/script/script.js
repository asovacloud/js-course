document.addEventListener('DOMContentLoaded', () => {
  // variables
  const btnOpenModal = document.getElementById('btnOpenModal');
  const modalBlock = document.getElementById('modalBlock');
  const btnCloseModal = document.getElementById('closeModal');
  const questionTitle = document.getElementById('question');
  const formAnswers = document.getElementById('formAnswers');
  const burgerBtn = document.getElementById('burger');
  const btnPrev = document.getElementById('prev');
  const btnNext = document.getElementById('next');
  const btnSend = document.getElementById('send');
  const modalDialog = document.querySelector('.modal-dialog');

  let clientWidth = document.documentElement.clientWidth;
  burgerBtn.style.display = 'none';

  // show/hide burger
  if(clientWidth < 768) {
    burgerBtn.style.display = 'flex';
  } else {
    burgerBtn.style.display = 'none';
  }

  // data
  const questions = [
    {
      question: "Какого цвета бургер?",
      answers: [
          {
              title: 'Стандарт',
              url: './image/burger.png'
          },
          {
              title: 'Черный',
              url: './image/burgerBlack.png'
          }
      ],
      type: 'radio'
    },
    {
      question: "Из какого мяса котлета?",
      answers: [
          {
              title: 'Курица',
              url: './image/chickenMeat.png'
          },
          {
              title: 'Говядина',
              url: './image/beefMeat.png'
          },
          {
              title: 'Свинина',
              url: './image/porkMeat.png'
          }
      ],
      type: 'radio'
    },
    {
      question: "Дополнительные ингредиенты?",
      answers: [
          {
              title: 'Помидор',
              url: './image/tomato.png'
          },
          {
              title: 'Огурец',
              url: './image/cucumber.png'
          },
          {
              title: 'Салат',
              url: './image/salad.png'
          },
          {
              title: 'Лук',
              url: './image/onion.png'
          }
      ],
      type: 'checkbox'
    },
    {
      question: "Добавить соус?",
      answers: [
          {
              title: 'Чесночный',
              url: './image/sauce1.png'
          },
          {
              title: 'Томатный',
              url: './image/sauce2.png'
          },
          {
              title: 'Горчичный',
              url: './image/sauce3.png'
          }
      ],
      type: 'radio'
    }
  ];

  // functions

  let count = -100;
  let interval;
  modalDialog.style.top = count + '%';


  const animateModal = () => {
    modalDialog.style.top = count + '%';
    count += 3;

    if (count < 0) {
      requestAnimationFrame(animateModal);
    } else {
      count = -100;
    }

  }

  const playTest = () => {

    let numberQuestion = 0;

    const renderAnswers = index => {
      formAnswers.textContent = '';
      questions[index].answers.forEach((answer) => {
        const div = document.createElement('div');
        div.classList.add('answers-item', 'd-flex', 'justify-content-center');
        const cardAnswer = `
          <input type="${ questions[index].type }" id="${ answer.title }" name="${ questions[index].question }" class="d-none">
          <label for="${ answer.title }" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src=${ answer.url } alt="burger">
            <span>${ answer.title }</span>
          </label>
        `;
        div.innerHTML = cardAnswer;
        formAnswers.insertAdjacentElement('beforeend', div);
      });
    }

    const renderQuestions = index => {
      questionTitle.textContent = questions[index].question;
      (numberQuestion > 0) ? btnPrev.classList.remove('d-none') : btnPrev.classList.add('d-none');
      (questions.length - 1 > numberQuestion) ? btnNext.classList.remove('d-none') : btnNext.classList.add('d-none');
      (questions.length - 1 === numberQuestion) ? btnSend.classList.remove('d-none') : btnSend.classList.add('d-none');

      renderAnswers(index);
    };

    renderQuestions(numberQuestion);

    btnPrev.onclick = () => {
      numberQuestion--;
      renderQuestions(numberQuestion);
    };

    btnNext.onclick = () => {
      numberQuestion++
      renderQuestions(numberQuestion);
    };

  };

  const closeModalClickOnMask = event => {
    if (event.target.id === 'modalBlock') closeModal();
  }

  const openModal = () => {
    // animateModal();
    requestAnimationFrame(animateModal);
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

  // initialization
  const init = () => {

    // listeners
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
  };

  init();
  

})