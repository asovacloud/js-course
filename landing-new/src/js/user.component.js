import Routing from "./routing.service";
import UserService from './user.service';

export default class UserComponent {
    constructor() {
        this._userService = new UserService();

        this._user;
    }
    async beforeRender() {
        this._user = await this._userService.getUser( localStorage.getItem('id') );
    }
    afterRender() {
        console.log('User component. Wazzzap!!!');
    }
    render() {
        return `
            <div class="hero-box" style="background-image: url( ${ this._user.cover } )">
                <div class="container">
                    <div class="hero-box__user"><h1>${ this._user.full_name }</h1></div>
                    <div class="hero-box__avatar"><img src="${ this._user.avatar }" alt="image description" /></div>
                </div>
            </div>
            <div class="container">
                <div class="profile-info">

                    <div class="row">
                        <div class="col key">First name:</div>
                        <div class="col setting">${ this._user.first_name }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Last name:</div>
                        <div class="col setting">${ this._user.last_name }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Nickname:</div>
                        <div class="col setting">${ this._user.nickname }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Country:</div>
                        <div class="col setting">${ this._user.country }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">City:</div>
                        <div class="col setting">${ this._user.city }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Orientation:</div>
                        <div class="col setting">${ this._user.gender_orientation }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Email:</div>
                        <div class="col setting"><a href="mailto:${ this._user.email }">${ this._user.email }</a></div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Phone:</div>
                        <div class="col setting">${ this._user.phone }</div>
                    </div>
                    
                    <div class="row">
                        <div class="col key">Birthday:</div>
                        <div class="col setting">${ this._user.date_of_birth_day }/${ this._user.date_of_birth_month }/${ this._user.date_of_birth_year }</div>
                    </div>

                </div>
            </div>
        `;
    }
}