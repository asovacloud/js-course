export default class SignUp {
    constructor() {

    }
    async beforeRender() {}
    afterRender() {
        document.querySelector( '.search-box' ).addEventListener('submit', function (e) {
            e.preventDefault();

            let checkState = true;

            const clearMessage = function() {

                document.querySelector('#validation-info').innerHTML = '';

                document.querySelector('#validation-info').classList.remove('active');

            };

            const formDataArr = document.querySelector("#my-form").elements;

            const formData = {};


            const checkMessageState = function() {

                document.querySelector( '.search-box' ).addEventListener('click', function (e) {
                    if(e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
                        clearMessage();
                    }
                });

            };

            checkMessageState();

            const errorMessage = function(text, state) {
                let div = document.createElement('div');
                if(state){
                    div.classList.add('error');
                    div.innerHTML = text || 'Check all your fields carefully, please!!!';
                } else {
                    div.classList.add('valid');
                    div.innerHTML = text || 'Success!!!';
                }

                const validationCont = document.querySelector('#validation-info');

                validationCont.classList.add('active');

                validationCont.innerHTML = '';
                validationCont.appendChild( div );

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                checkState = false;

            };

            clearMessage();

            for(let i = 0; i < formDataArr.length; i++) {

                if(formDataArr[i].nodeName !== 'BUTTON') {

                    if(!formDataArr[i].value) {
                        errorMessage('Check all your fields carefully, please!!!', true);
                    }

                    formData[formDataArr[i].id || formData.length] = formDataArr[i].value;
                }
            }

            if (checkState) {
                const formDataSend = JSON.stringify( formData );

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://mostlikedperson-api.herokuapp.com/api/public/auth/signup");
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function(e) {
                    const responseJSON = JSON.parse(this.response);
                    if (responseJSON.error) {
                        errorMessage(responseJSON.message, true);
                    } else {
                        errorMessage(responseJSON.message, false);
                    }
                };
                xhr.send( formDataSend );

            }


        });
    }
    render() {
        return `
            <div class="container">
                <h2 style="text-align: center;">Registration:</h2>
                <form class="search-box form" id="my-form">
                    <div id="validation-info"></div>
                    <div class="two-columns">
                        <div class="row">
                            <label for="first_name">First name</label>
                            <input type="text" id="first_name" placeholder="First name">
                        </div>
                        <div class="row">
                            <label for="last_name">Last name</label>
                            <input type="text" id="last_name" placeholder="Last name">
                        </div>
                    </div>
                    
                    <div class="two-columns">
                        <div class="row">
                            <label for="nickname">nickname</label>
                            <input type="text" id="nickname" placeholder="nickname">
                        </div>
                        
                        <div class="row">
                            <label for="gender_orientation">Gender orientation</label>
                            <select name="gender_orientation" id="gender_orientation">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="two-columns">
                        <div class="row">
                            <label for="email">email</label>
                            <input type="email" id="email" placeholder="email">
                        </div>
                        <div class="row">
                            <label for="phone">phone</label>
                            <input type="tel" id="phone" placeholder="phone">
                        </div>
                    </div>
                    
                    <div class="two-columns">
                        <div class="row">
                            <label for="city">city</label>
                            <input type="text" id="city" placeholder="city">
                        </div>
                        <div class="row">
                            <label for="country">country</label>
                            <input type="text" id="country" placeholder="country">
                        </div>
                    </div>
                    <h3>Birthday</h3>
                    <div class="three-columns">
                        <div class="row">
                            <label for="date_of_birth_day">day</label>
                            <select name="date_of_birth_day" id="date_of_birth_day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="row">
                            <label for="date_of_birth_month">moth</label>
                            <select name="date_of_birth_month" id="date_of_birth_month">
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="row">
                        <label for="date_of_birth_year">year</label>
                        <select name="date_of_birth_year" id="date_of_birth_year">
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                        </select>
                    </div>
                    </div>
                    
                    <h3>Password</h3>
                    <div class="two-columns">
                        <div class="row">
                            <label for="password">password</label>
                            <input type="password" id="password" placeholder="password">
                        </div>
                        <div class="row">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="password" id="confirmPassword" placeholder="Confirm password">
                        </div>
                    </div>
    
                    <div class="row-btn"><button class="search-box__btn btn">Search</button></div>
                </form>
            </div>
        `;
    }
}