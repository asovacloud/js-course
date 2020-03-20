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

    // 25мая Екатеринбург - Калининград
    //https://support.travelpayouts.com/hc/ru/articles/203972143-API-%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8F-%D1%86%D0%B5%D0%BD

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
            return fixItem.includes(value);
            
        } ).map(el => el.name);
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }
};

const handlerCity = (event, inputCities, dropdownCities) => {
    const target = event.target;

    if(target.tagName.toLowerCase() === 'li') {
        inputCities.value = target.textContent
        dropdownCities.textContent = '';
    }

};

// Event listener
inputCitiesFrom.addEventListener('input', (input) => showCity(input, dropdownCitiesFrom));
inputCitiesTo.addEventListener('input', (input) => showCity(input, dropdownCitiesTo));
dropdownCitiesFrom.addEventListener('click', (event) => handlerCity(event, inputCitiesFrom, dropdownCitiesFrom));
dropdownCitiesTo.addEventListener('click', (event) => handlerCity(event, inputCitiesTo, dropdownCitiesTo));

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