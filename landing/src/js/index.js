import HomeComponent from './home.component.js';
import LoginComponent from './login.component.js';
import NotFoundComponent from './not-found.component.js';

const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
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

