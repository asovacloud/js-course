(() => {
  const glo = function (slector) {
    const elems = document.querySelectorAll(slector);

    const obj = {
      hide() {
        elems.forEach(item => item.style.display = 'none');
        return this;
      },
      show(options = '') {
        elems.forEach(item => item.style.display = options);
        return this;
      },
      toggle() {
        elems.forEach(item => {
          if(item.style.display === 'none') {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
        return this;
      },
      addClass(className) {
        elems.forEach(item => {
          item.classList.add(className);
        });
        return this;
      },
      removeClass(className) {
        elems.forEach(item => {
          item.classList.remove(className);
        });
        return this;
      },
      toggleClass(className) {
        elems.forEach(item => {
          item.classList.toggle(className);
        });
        return this;
      },
      on(eventName, callback) {
        elems.forEach(item => {
          item.addEventListener(eventName, callback);
        });
        return this;
      },
      off(eventName, callback) {
        elems.forEach(item => {
          item.removeEventListener(eventName, callback);
        });
        return this;
      },
    };

    return obj;
  };

  window._ = glo;
  window.glo = glo;
  window.$ = glo;
})();
