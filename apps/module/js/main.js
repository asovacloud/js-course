const list = glo('li.list');

glo('li.list')
  .hide()
  .toggle()
  .addClass('new-class')
  .toggleClass('BOSS')
  .removeClass('BOSS');

glo('#button')
  .on('click', () => {
    glo('h1').toggleClass('hide');
    list.toggle();
  });

list.on('click', (event) => {
  event.target.style.cssText = `
      background: yellow;
      color: 'tomato';
      font-size: 20px;
    `
});
