const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart')
    ;

const states = ["Alaska",
"Alabama",
"Arkansas",
"American Samoa",
"Arizona",
"California",
"Colorado",
"Connecticut",
"District of Columbia",
"Delaware",
"Florida",
"Georgia",
"Guam",
"Hawaii",
"Iowa",
"Idaho",
"Illinois",
"Indiana",
"Kansas",
"Kentucky",
"Louisiana",
"Massachusetts",
"Maryland",
"Maine",
"Michigan",
"Minnesota",
"Missouri",
"Mississippi",
"Montana",
"North Carolina",
" North Dakota",
"Nebraska",
"New Hampshire",
"New Jersey",
"New Mexico",
"Nevada",
"New York",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Puerto Rico",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Virginia",
"Virgin Islands",
"Vermont",
"Washington",
"Wisconsin",
"West Virginia",
"Wyoming"];

const showCity = (input, list) => {
    list.textContent = '';
    const value = input.target.value.toLowerCase();

    if(value !== '') {
        const filterCity = states.filter((item) => item.toLowerCase().includes(value) )
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }
};

inputCitiesFrom.addEventListener('input', (input) => showCity(input, dropdownCitiesFrom));
inputCitiesTo.addEventListener('input', (input) => showCity(input, dropdownCitiesTo))

const setClickedDropdownElement = (even, inputCities, dropdownCities) => {
    const target = event.target;

    if(target.tagName.toLowerCase() === 'li') {
        inputCities.value = target.textContent
        dropdownCities.textContent = '';
    }

};

dropdownCitiesFrom.addEventListener('click', (event) => setClickedDropdownElement(event, inputCitiesFrom, dropdownCitiesFrom))
dropdownCitiesTo.addEventListener('click', (event) => setClickedDropdownElement(event, inputCitiesTo, dropdownCitiesTo))