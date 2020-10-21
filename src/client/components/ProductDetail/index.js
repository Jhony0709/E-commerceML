import React from 'react';
import { useParams } from 'react-router-dom';
import { useAxiosGet } from '../../hooks/HttpRequest';
import Breadcrumb from '../Breadcrumb';
import Loader from '../Loader';

function ProductDetail (props) {
    const { id } = useParams();
    const url = `http://localhost:3001/api/items/${id}`;

    let content = null;
    let product = useAxiosGet(url);

    const getCondition = (condition) => {
        switch (condition) {
            case 'new':
                return 'Nuevo';
            case 'used':
                return 'Usado';
            default:
                return 'No especificado';
        }
    }

    if (product.error) {
        content = <p>Ups, hubo un error...</p>
    }

    if (product.loading) {
        content = <Loader />
    }

    if ( product.data ) {
        const data = product.data;
        const item = data.item;

        content =
            <div className="product">
                <div className="product--main">
                    <div className="product--main-img">
                        <img src={item.picture}></img>
                    </div>
                    <div className="product--main-info">
                        <p>{getCondition(item.condition)} - {item.sold_quantity} vendidos</p>
                        <h1>{item.title}</h1>
                        <h2>$ {parseInt(item.price.amount).toLocaleString()} <span className="decimals">{(item.price.decimals !== null ? item.price.decimals : '')}</span></h2>
                        <button className="btn btn--buy">Comprar</button>
                    </div>
                </div>
                <div className="product--description">
                    <h3>Descripción del producto</h3>
                    <p>{item.description}</p>
                </div>
            </div>
    }

    return (
        <div className="main">
            <Breadcrumb categories={props.location.state.categories} />
            <div className="main--container">{content}</div>
        </div>
    )
}

export default ProductDetail;