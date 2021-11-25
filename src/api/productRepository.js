import axios from 'axios';

export class ProductRepository {

    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "cdeng"
        }
    };
    
    getProducts(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(e => {
                    alert(e);
                    reject();
                });
        });
    }


}