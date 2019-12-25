// 1. Get the data on the #btn-msg
document.getElementById('btn-msg').addEventListener('click', function (e){
    e.preventDefault();
    console.log(e.target.dataset.text);
});

// 2. On :hover change the color of #btn-msg
document.getElementById('btn-msg').addEventListener('mouseover', function (e){
    e.target.style.backgroundColor = 'red';
});

document.getElementById('btn-msg').addEventListener('mouseout', function (e){
    e.target.style.backgroundColor = '';
});

// 3. Show the name of tag
document.body.addEventListener('click', function (e){
    e.preventDefault();
    let nameOfTag = e.target.tagName;
    let span = document.createElement('span');
    let tag = document.getElementById('tag')

    nameOfTag = document.createTextNode(` ${nameOfTag}`);

    span.className = 'tag-name';

    span.appendChild(nameOfTag)

    if (tag.querySelector('.tag-name')) {
        tag.querySelector('.tag-name').remove();
        tag.appendChild(span);
    } else {
        tag.appendChild(span);
    }

});


// 4. After click on the btn-generate create new LI

document.getElementById('btn-generate').addEventListener('click', function (e){
    e.preventDefault();

    const ulEl = document.querySelector('ul');
    const newLi = document.createElement('li');
    let count = document.querySelectorAll('ul li').length;
    let textItem = document.createTextNode( `Item ${++count}` );

    newLi.appendChild(textItem);

    ulEl.appendChild(newLi);

});