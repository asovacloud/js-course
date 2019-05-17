import Routing from './routing.service';

export default class LoginComponent {
    constructor() { }
    async beforeRender() {

    }
    afterRender() {
        document.querySelector( '.login-box' ).addEventListener('submit', function (e) {
            e.preventDefault();

            let checkState = true;

            const clearMessage = function() {

                document.querySelector('#validation-info').innerHTML = '';

                document.querySelector('#validation-info').classList.remove('active');

            };

            const formDataArr = document.querySelector("#my-login").elements;

            let formData = {}

            formData.email = formDataArr[0].value;
            formData.password = formDataArr[1].value;

            console.log( 'formData' );
            console.log( formData );

            if (checkState) {
                const formDataSend = JSON.stringify( formData );

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://mostlikedperson-api.herokuapp.com/api/public/auth/login", true, formData.email, formData.password );
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function(e) {
                    const responseJSON = JSON.parse(this.response);
                    if (!responseJSON.error) {
                        localStorage.setItem('token', responseJSON.token);
                        localStorage.setItem('id', responseJSON.id);

                        console.log(responseJSON.id);

                        const _routing = new Routing();
                        _routing.navigate( `/users/${responseJSON.id}`, {myData: 'My data'} );
                    }
                };
                xhr.send( formDataSend );

            }


        });
    }
    render() {
        return `
            <div class="container">
            
                <h2 style="text-align: center;">Login:</h2>
                <form class="login-box form" id="my-login">
                    <div id="validation-info"></div>
                    <div class="two-columns">
                        <div class="row">
                            <label for="email">Email</label>
                            <input type="text" id="email" placeholder="Email">
                        </div>
                        <div class="row">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Password">
                        </div>
                    </div>
    
                    <div class="row-btn"><button class="search-box__btn btn">Search</button></div>
                </form>
            </div>
        `;
    }
}