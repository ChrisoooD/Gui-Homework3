import { ProductList } from "./app/productList";
import {ProductDetails} from "./app/productDetails"

export const ROUTES = [
    { path: '/', element: <ProductList /> },
    { path: '/products/:id', element: <ProductDetails/>}
];