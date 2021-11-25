import axios from 'axios';

export class ProductRepository {

    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "jlawrimore"
        }
    };

    getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(e => {
                    alert(e);
                    reject();
                });
        });
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(e => {
                    alert(e);
                    reject(e);
                })
        });
    }

    addReview(productId,review) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${productId}/reviews`, review, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

}