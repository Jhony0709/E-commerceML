import React from 'react';
import ProductListElement from '../ProductListElement';
import { useAxiosGet } from '../../hooks/HttpRequest';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
import Loader from '../Loader';


const Products = (location, listen) => {
    const query = new URLSearchParams(useLocation().search).get('q');
    const url = `http://localhost:3001/api/items?q=${query}`;

    let products = useAxiosGet(url);
    let categories = [];
    let content = null;

    if (products.error) {
        content = <p>Ups, hubo un error...</p>
    }

    if (products.loading) {
        content = <Loader />
    }

    if ( products.data ) {
        const data = products.data;
        categories = data.categories;

        content = (
            data.items.map((product, i) =>
                <ProductListElement categories={categories} product={product} key={i} />
            )
        )
    }

    return (
        <div className="main">
            <Breadcrumb categories={categories} />
            <div className="main--container">{content}</div>
        </div>
    )
}

export default Products;