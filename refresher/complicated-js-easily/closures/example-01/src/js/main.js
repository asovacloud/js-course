const makeFontSize = size => {
    return () => document.documentElement.style.fontSize = size + 'px'
};

const fontSizeSmall = makeFontSize(12);
const fontSizeMedium = makeFontSize(16);
const fontSizeLarge = makeFontSize(20);

const buttonsChangeSize = document.getElementById('buttons-change-size');

const removeActiveFromButtons = () => {
    
    const buttonsList = buttonsChangeSize.querySelectorAll('button.active');

    if(buttonsList.length > 0) {
        buttonsList[0].classList.remove('active')
    }

};

const addActiveToButton = (button) => button.classList.add('active');

buttonsChangeSize.addEventListener('click', function (event) {
    const button = event.target;
    const eventTagName = button.tagName;

    if( eventTagName === 'BUTTON' ) {
        const fontSize = event.target.dataset.size;

        switch(fontSize) {
            case 'small':
                fontSizeSmall();
                removeActiveFromButtons();
                addActiveToButton(button);
                break;
            case 'medium':
                fontSizeMedium();
                removeActiveFromButtons();
                addActiveToButton(button);
                break;
            case 'large':
                fontSizeLarge();
                removeActiveFromButtons();
                addActiveToButton(button);
        }
    }
});