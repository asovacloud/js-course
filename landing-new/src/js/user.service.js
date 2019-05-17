import Http from './http.service';

export default class UserService {
    getUser(id) {

        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`https://mostlikedperson-api.herokuapp.com/api/public/users/get-info/${id}`)
                .then((response) => {
                    console.log(response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });

    }
}