import { ProductList } from "./app/productList";
import {ProductDetails} from "./app/productDetails"

export const ROUTES = [
    { path: '/', exact: true, component: ProductList },
    { path: '/products/:productId', component: ProductDetails }
];