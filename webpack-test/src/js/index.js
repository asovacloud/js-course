import _ from 'lodash';
import '../scss/style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'Andrew', 'created', 'this! And He is the best !!! Very good !!!!!'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());