import axios from 'axios';

export class ProductRepository {

    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "cdeng"
        }
    };

    getProducts(params) {
        let config = this.config;
        if (params) {
            config.params = params;
        }

        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

}