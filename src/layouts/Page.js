import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';

const Page = () => {
    return (
        <>
            <section className="page">
                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={ProductListPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
            </section>
        </>
    )
}

export default Page;