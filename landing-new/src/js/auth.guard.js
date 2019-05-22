import Routing from './routing.service';

export const canActivate = () => {

    if(!localStorage.getItem('id')) {
        const _routing = new Routing();
        _routing.navigate('/login');
        return false;
    }

    return true;

}