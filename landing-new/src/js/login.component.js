import Routing from './routing.service';

export default class LoginComponent {
    constructor() {}
    async beforeRender() {}
    afterRender() {
        document.querySelector( '.login-box' ).addEventListener('submit', function (e) {
            e.preventDefault();

            let checkState = true;

            const clearMessage = function() {

                document.querySelector('#validation-info').innerHTML = '';

                document.querySelector('#validation-info').classList.remove('active');

            };

            const formDataArr = document.querySelector("#my-login").elements;

            // const formData = {
            //     email: "arthur.osipenko@gmail.com",
            //     password: "hello-kitty"
            // };

            let formData = {}

            formData.email = formDataArr[0].value;
            formData.password = formDataArr[1].value;


            // const checkMessageState = function() {
            //
            //     document.querySelector( '.search-box' ).addEventListener('click', function (e) {
            //         if(e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
            //             clearMessage();
            //         }
            //     });
            //
            // };

            // checkMessageState();

            // const errorMessage = function(text, state) {
            //     let div = document.createElement('div');
            //     if(state){
            //         div.classList.add('error');
            //         div.innerHTML = text || 'Check all your fields carefully, please!!!';
            //     } else {
            //         div.classList.add('valid');
            //         div.innerHTML = text || 'Success!!!';
            //     }
            //
            //     const validationCont = document.querySelector('#validation-info');
            //
            //     validationCont.classList.add('active');
            //
            //     validationCont.innerHTML = '';
            //     validationCont.appendChild( div );
            //
            //     window.scrollTo({
            //         top: 0,
            //         behavior: "smooth"
            //     });
            //
            //     checkState = false;
            //
            // };

            // clearMessage();
            //
            // for(let i = 0; i < formDataArr.length; i++) {
            //
            //     if(formDataArr[i].nodeName !== 'BUTTON') {
            //
            //         if(!formDataArr[i].value) {
            //             errorMessage('Check all your fields carefully, please!!!', true);
            //         }
            //
            //         formData[formDataArr[i].id || formData.length] = formDataArr[i].value;
            //     }
            // }

            if (checkState) {
                const formDataSend = JSON.stringify( formData );

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://mostlikedperson-api.herokuapp.com/api/public/auth/login", true, formData.email, formData.password );
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function(e) {
                    const responseJSON = JSON.parse(this.response);
                    console.log(responseJSON);
                    //console.log( Routing );
                    if (!responseJSON.error) {
                        localStorage.setItem('token', responseJSON.token);
                        localStorage.setItem('id', responseJSON.id);
                    }
                };
                xhr.send( formDataSend );

            }


        });
    }
    render() {
        return `
            <h2>Login:</h2>
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
        `;
    }
}