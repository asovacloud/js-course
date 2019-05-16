import '../scss/style.scss';

import HomeComponent from './home.component';
import LoginComponent from './login.component';
import NotFoundComponent from './not-found.component';
import SignUp from './sign-up.component';
// import SignUpRequest from './main-request';

const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '/sign-up': new SignUp(),
    '**': new NotFoundComponent()
};

const router = () => {
    const container = document.querySelector('app-container');
    const url = location.hash.slice(1).toLowerCase() || '/';

    const component = routes[url] || routes['**'];
    container.innerHTML = component.render();
    component.afterRender();

}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);