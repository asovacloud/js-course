const list = glo('li.list');

console.log('List1: ', list);

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
