export default class HomeComponent {
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