const searchBox = document.querySelector( '.search-box' );

const showArticles = function ( articles ) {
    const content = document.getElementById('content');

    let contentBox = document.createElement('div');

    for(let i = 0; i < articles.length; i++ ) {
        let divItem = document.createElement('div');
        divItem.className = 'item';

        let hTitle = document.createElement('H1');
        hTitle.className = 'title';
        hTitle.innerHTML = articles[i].title;

        let dlAuthor = document.createElement('dl');
        dlAuthor.className = 'author';
        dlAuthor.innerHTML = `<dt>author:</dt><dd>${articles[i].author || "Unknown author"}</dd>`;

        let divImg = document.createElement('div');
        divImg.className = 'photo';
        let img = document.createElement('img');
        img.setAttribute("src", articles[i].urlToImage || 'https://via.placeholder.com/200');
        img.setAttribute("name", articles[i].title);
        divImg.appendChild(img);

        let divDescription = document.createElement('div');
        divDescription.className = 'description';
        divDescription.innerHTML = articles[i].description;

        let divMore = document.createElement('div');
        divMore.className = 'more';
        let linkMore = document.createElement('a');
        linkMore.setAttribute("href", articles[i].url);
        linkMore.setAttribute('target', '_blank');
        linkMore.innerText = 'Link more';
        divMore.appendChild( linkMore );

        divItem.appendChild(divImg);
        divItem.appendChild(hTitle);
        divItem.appendChild(dlAuthor);
        divItem.appendChild(divDescription);
        divItem.appendChild(divMore);

        contentBox.appendChild(divItem);
    }
    content.insertAdjacentElement('afterbegin', contentBox );
}

searchBox.addEventListener('click', function (e) {
    e.preventDefault();

    const element = e.target;
    const elementTag = element.tagName;

    if(elementTag !== 'BUTTON') {return null}

    const inputEl = element.closest('.search-box').querySelector( '.search-box__text' );

    const countryValue = element.closest('.search-box').querySelector( '#country option:checked' ).value;

    const categoryValue = element.closest('.search-box').querySelector( '#category option:checked' ).value;

    data.inputText = inputEl.value;
    data.countryValue = countryValue;
    data.categoryValue = categoryValue;

    request.sendText( data )
        .then(
            response => {
                showArticles( response.articles );
            },
            error => console.log(`Rejected: ${error}`)
        );

});