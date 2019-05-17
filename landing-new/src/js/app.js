import '../scss/style.scss';

import HomeComponent from './home.component';
import LoginComponent from './login.component';
import NotFoundComponent from './not-found.component';
import SignUp from './sign-up.component';
import UserComponent from './user-component';
import Routing from './routing.service';
import ActiveRoute from './active.route.service';

const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '/sign-up': new SignUp(),
    '/users/:id': new UserComponent(),
    '**': new NotFoundComponent()
};

const activeRoute = new ActiveRoute();

const router = () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    const component = routes[url] || routes['**'];

    component.beforeRender().then( () => {
        container.innerHTML = component.render();
        component.afterRender();
    });


}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);