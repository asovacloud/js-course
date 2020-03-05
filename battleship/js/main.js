const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
  record: 0,
  shot: 0,
  hit: 0,
  dead: 0,
  set updateData(data) {
    this[data] += 1;
    this.render();
  },
  render() {
    record.textContent = this.record;
    shot.textContent = this.shot;
    hit.textContent = this.hit;
    dead.textContent = this.dead;
  }
};

const show = {
  hit() {

  },
  miss(elem) {
    this.changeClass(elem, 'miss');
  },
  dead() {

  },
  changeClass(elem, value) {
    elem.classList = value;
  }
};

const fire = (event) => {
  const target = event.target;
  const checkMiss = target.classList.contains('miss');

  if(!checkMiss) {
    show.miss(target);
    play.updateData = 'shot';
  } else {
    console.log('Please, choose another square!');
  }

};

const init = () => {
  enemy.addEventListener('click', fire);
};

init();
