export default class UserComponent {
    constructor() {

    }
    afterRender() {
        console.log('Wazzzap!!!');
    }
    render() {
        return `
            <div>House1</div>
        `;
    }
}