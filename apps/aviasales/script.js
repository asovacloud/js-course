// Variables
const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    cheapestTicket = document.getElementById('cheapest-ticket'),
    otherCheapTickets = document.getElementById('other-cheap-tickets');

// Array of cities
//const citiesApi = './dataBase/cities.json',
const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
    PROXY = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '18e3403d3786e7628f43e08adf65f92f',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload',
    MAX_COUNT = 10;

let cityList = [];

// Functions
const getData = (url, callback, reject = console.error) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) return;

        if(request.status === 200) {
            callback(request.response);
        } else {
            reject(request.status);
        }

    });

    request.send();
};

const showCity = (input, list) => {
    list.textContent = '';
    const value = input.target.value.toLowerCase();

    if(value !== '') {
        const filterCity = cityList.filter((item) => {

            const fixItem = item.name.toLowerCase();
            return fixItem.startsWith(value);
            
        } ).map(el => el.name);
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }
};

const selectCity = (event, input, list) => {
    const target = event.target;

    if(target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent
        list.textContent = '';
    }

};

const getNameCity = (code) => {
  const objCity = cityList.find((item) => item.code === code);
  return objCity.name;
};

const getDate = (data) => new Date(data).toLocaleString('ru', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

const getChanges = (num) => {
  if(num) {
    return num === 1 ? 'With 1 change.' : 'With 2 changes.';
  } else {
    return 'Without changes.'
  }
};

const getLinkAviasales = (data) => {
  let link = `https://www.aviasales.ru/search/`;
  link += data.origin;

  const date = new Date(data.depart_date);

  const day = date.getDate();

  link += day < 10 ? '0' + day : day;

  const month = date.getMonth()+1;

  link += month < 10 ? '0' + month : month;

  link += data.destination;

  return link + '1'
}

const createCard = (data) => {
  const ticket = document.createElement('article');
  ticket.classList.add('ticket');

  let deep = '';

  if (data) {
    deep = `
    <h3 class="agent">${data.gate}</h3>
    <div class="ticket__wrapper">
      <div class="left-side">
        <a
        href="${getLinkAviasales(data)}"
        target="_blank"
        class="button button__buy">
          Buy: ${data.value} ₽
        </a>
      </div>
      <div class="right-side">
        <div class="block-left">
          <div class="city__from">Fly from:
            <span class="city__name">${getNameCity(data.origin)}</span>
          </div>
          <div class="date">${getDate(data.depart_date)}</div>
        </div>

        <div class="block-right">
          <div class="changes">${getChanges(data.number_of_changes)}</div>
          <div class="city__to">Fly to:
            <span class="city__name">${getNameCity(data.destination)}</span>
          </div>
        </div>
      </div>
    </div>  
    `;
  } else {
    deep = '<h3>unfortunately, no tickets on that data.</h3>'
  }

  ticket.insertAdjacentHTML('afterbegin', deep)

  return ticket
};

const renderCheapDay = (cheapTicket) => {
  cheapestTicket.style.display = 'block';
  cheapestTicket.innerHTML = '<h2>The cheapest ticket to the choosed date</h2>';

  const ticket = createCard(cheapTicket[0]);
  cheapestTicket.append(ticket);

}

const renderCheapYear = (cheapTickets) => {
  otherCheapTickets.style.display = 'block';
  otherCheapTickets.innerHTML = '<h2>The cheapest tickets to the another date</h2>';

  cheapTickets.sort((a, b) => a.value - b.value);

  for(let i = 0; i < cheapTickets.length && i < MAX_COUNT; i++ ) {
    const ticket = createCard(cheapTickets[i]);
    otherCheapTickets.append(ticket);
  }

}

const renderCheap = (data, date) => {
  const cheapTicketYear = JSON.parse(data).best_prices;
  const cheapTicketDay = cheapTicketYear.filter(item => item.depart_date === date)

  renderCheapYear(cheapTicketYear);
  renderCheapDay(cheapTicketDay);

};

// Event listener
inputCitiesFrom.addEventListener('input',
  (input) => showCity(input, dropdownCitiesFrom)
);
inputCitiesTo.addEventListener('input',
  (input) => showCity(input, dropdownCitiesTo)
);
dropdownCitiesFrom.addEventListener('click',
  (event) => selectCity(event, inputCitiesFrom, dropdownCitiesFrom)
);
dropdownCitiesTo.addEventListener('click',
  (event) => selectCity(event, inputCitiesTo, dropdownCitiesTo)
);
formSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    cheapestTicket.innerHTML = '<h2>The cheapest ticket to the choosed date</h2>';
    otherCheapTickets.innerHTML = '<h2>The cheapest tickets to the another date</h2>';

    const cityFrom = cityList.find((item) => inputCitiesFrom.value === item.name);
    const cityTo = cityList.find((item) => inputCitiesTo.value === item.name);

    const fromData = {
      from: cityFrom,
      to: cityTo,
      when: inputDateDepart.value
    };

    if(fromData.from && fromData.to ) {
      const requestData = `?depart_date=${fromData.when}&origin=${fromData.from.code}` +
      `&destination=${fromData.to.code}&one_way=true`;

      getData(calendar + requestData,
        (data) => renderCheap(data, fromData.when),
        (error) => {
          alert('In that diraction no fly.');
          console.error('Error: ', error);
        }
      );
    } else {
      alert('Enter a correct city code');
    }

});

// Call function
getData(PROXY + citiesApi, (data) => {
    cityList = JSON.parse(data).filter((item) => item.name ).sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
});
