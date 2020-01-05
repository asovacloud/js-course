class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.background;
        this.$el.style.marginBottom = options.marginBottom + 'px'
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    background: 'tomato',
    marginBottom: 20
});

const box2 = new Box({
    selector: '#box2',
    size: 300,
    background: 'pink',
    marginBottom: 30
});

box1.hide();
box1.show();

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '#circle',
    size: 200,
    background: 'gold',
    marginBottom: 10
});