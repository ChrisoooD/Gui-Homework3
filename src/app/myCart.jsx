import { CartService } from '../services/cartService';
import React, { useState, useEffect } from 'react';
import { Header } from "./header";



export const MyCart = props => {
    const cartService = new CartService();
    const [cart, setCart] = useState();
    useEffect(() => {
        onLoad();
    }, []);

    let onLoad = params => {
        setCart(cartService.getCart());

    }

    if (!cart) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="container">
                <Header />
                {console.log(cart)}
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">#Qty</th>
                            <th scope="col">Product</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.items.map(item =>
                                <tr>
                                    <th scope="row">{item.quantity}</th>
                                    <td>{item.product.name}</td>
                                    <td>${item.totalPrice}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>${cart.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}