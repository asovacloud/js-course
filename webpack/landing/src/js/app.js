import '../scss/style.scss';

import HomeComponent from './home.component';
import LoginComponent from './login.component';
import NotFoundComponent from './not-found.component';
import SignUp from './sign-up.component';
import UserComponent from './user.component';
import ActiveRoute from './active.route.service';

import { canActivate } from './auth.guard';

const routes = {
    '/': {
        component: new HomeComponent(),
    },
    '/login': {
        component: new LoginComponent(),
    },
    '/sign-up': {
        component: new SignUp(),
    },
    '/users/:id':{
        component: new UserComponent(),
        guard: [canActivate]
    },
    '**': {
        component: new NotFoundComponent()
    }
};

const activeRoute = new ActiveRoute();

const router = async () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    const component = routes[url] ? routes[url]['component'] : routes['**']['component'];
    const guards = routes[url] ? routes[url]['guard'] : null;

    if (guards) {
        const guardState = guards.every((item) => item());
        if (!guardState) return;
    }

    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();

}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);