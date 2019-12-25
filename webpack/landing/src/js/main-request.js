
export default class SignUpRequest {
    constructor(name = 'book') {
        this.name = name;
    }
    afterRender() {
        console.log('asf sdf sdfsss');
    }
    render() {
        return this;
    }
}