import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';



const ProductPage = ({ match }) => {
    return (
        <>
            <div>Strona Produktu</div>
            <Product id={match.params.id} />
            <Link to="/products">Powrót do Listy Produktów</Link>
        </>
    )
}

export default ProductPage;