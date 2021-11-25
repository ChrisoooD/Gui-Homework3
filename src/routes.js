import {ProductList} from './../app/productList';
import { ProductDetails } from './app/productDetails';
import {MyCart} from './../app/myCart'

export const ROUTES = [
    { path: '/', component: ProductList },
    { path: '/cart', component: MyCart },
    { path: '/products/:productId', ProductDetails}
];