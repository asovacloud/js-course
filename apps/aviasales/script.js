// Variables
const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart');


// Array of cities
const citiesApi = './dataBase/cities.json',
//const citiesApi = 'http://api.travelpayouts.com/data/ru/countries.json',
    PROXY = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '18e3403d3786e7628f43e08adf65f92f',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload';

let cityList = [];

// Functions
const getData = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) return;

        if(request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
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

const renderCheapYear = (cheapTickets) => {
  const arr = cheapTickets;
  console.log('cheapTickets: ', cheapTickets);
}

const renderCheapDay = (cheapTicket) => {
  console.log(cheapTicket);
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

    const cityFrom = cityList.find((item) => inputCitiesFrom.value === item.name);
    const cityTo = cityList.find((item) => inputCitiesTo.value === item.name);

    const fromData = {
      from: cityFrom.code,
      to: cityTo.code,
      when: inputDateDepart.value
    };

    const requestData = `?depart_date=${fromData.when}&origin=${fromData.from}&destination=${fromData.to}&one_way=true`;

    getData(calendar + requestData, (response) => renderCheap(response, fromData.when) );

});

// Call function
getData(citiesApi, (data) => {
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