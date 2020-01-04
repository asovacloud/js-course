console.log('Start');

function timeoutTwoSec() {
    console.log('Inside setTimeOut.');
}

window.setTimeout(timeoutTwoSec, 0);

console.log('End');