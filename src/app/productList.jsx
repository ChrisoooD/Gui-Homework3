import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductRepository } from '../api/productRepository';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { DisplayList } from './displayList';

export class ProductList extends React.Component {
    state = {products:[]};
    productRepository = new ProductRepository();
    render(){
        return(
            <div>
            {this.state.products}
            </div>
        )
    }

    componentDidMount(){
        this.productRepository.getProducts().then(products=>this.setState(products));
    }

   


   
};