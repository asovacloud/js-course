const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if(count > 100) {
            reject(new Error('Too much Wring.'));
        }

        setTimeout(() => resolve(), count * WRING_OUT_TIME);
    });
}

function squatting(count) {
    return new Promise((resolve, reject) => {
        if (count > 1000) {
            reject(new Error('Too much Squatting.'))
        }

        setTimeout(() => resolve(), count * SQUATTING_TIME)
    });
}

// Example 1
/*
console.log('Start wringing....');
wringOut(10).then(() => console.log('Finish wring!'));*/

// Example 2
/*console.log('Start training....');
wringOut(10).then(() => {
   console.log('Finish wring 10 times!');
   return squatting(20);
})
    .then(() => console.log('Finish squatting 20 times!'))
    .catch((err) => console.error(err));*/

// Example 3
/*
console.log('Start a heavy training....');
wringOut(10).then(() => {
    console.log('Finish wring 10 times!');
    return squatting(1001);
})
    .then(() => console.log('Finish squatting 20 times!'))
    .catch((err) => {
        console.error(err.toString());
        console.log('Tired. Can\'t more!' );
    });*/

// Example 4
async function myTraining() {
    try {
        console.log('Start a heavy training....');
        await wringOut(10);
        console.log('Finish wring 10 times!');
        await squatting(20);
        console.log('Finish squatting 20 times!');
        return true;
    } catch (err) {
        console.error(err.toString());
        console.log('Tired. Can\'t more!' );
        return false;
    }
}

myTraining().then((result) => console.log(result));