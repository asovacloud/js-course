export default class HomeComponent {
    constructor() {

    }
    async beforeRender() {

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