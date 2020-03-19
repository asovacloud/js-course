const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart')
    ;

const city = [
    'Москва', 'Санкт-Петербург', 'Mинск', 'Караганда', 'Челябинск',
    'Керч', 'Волгоград', 'Самара', 'Днепр', 'Екатеринбург', 'Одесса',
    'Ухань', 'Шымкен', 'Нижний новгород', 'Калининград', 'Вроцлав', 'Ростов-на-дону'
];