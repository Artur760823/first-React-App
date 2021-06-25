import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/header.css';
import Start from '../components/Start.js'
import ProductImg from '../components/ProductImg';
import ContactImg from '../components/ContactImg';
import AdminImg from '../components/AdminImg';
import ErrorImg from '../components/ErrorImg';

const Header = () => {

    return (
        <header>
            <Switch>
                <Route exact path="/" component={Start}></Route>
                <Route path="/products" component={ProductImg}></Route>
                <Route path="/product/:id" component={ProductImg} />
                <Route path="/contact" component={ContactImg}></Route>
                <Route path="/admin" component={AdminImg}></Route>
                <Route path="/login" component={AdminImg}></Route>
                <Route component={ErrorImg}></Route>
            </Switch>
        </header>
    )
}

export default Header;