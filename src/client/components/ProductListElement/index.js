import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import freeShippingLogo from '../../assets/images/ic_shipping.png';
export default function ProductListElement (props) {
    const item = props.product;
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleClick = () => {
        setShouldRedirect(true);
    }

    return (
        <>
        {shouldRedirect ?
            <Redirect
                to={{
                    pathname: `/product/${item.id}`,
                    state: { categories: props.categories }
                }}
            /> : null
        }
        <div className="product-list">
            <div className="product-list--img">
                <img  onClick={handleClick} src={item.picture} alt={item.title}/>
            </div>
            <div className="product-list--description">
                <p className="product-list--description-price" onClick={handleClick}>
                    $ {parseInt(item.price.amount).toLocaleString() + (item.price.decimals !== null ? item.price.decimals : '')}
                    {item.free_shipping ? <img className="free-shipping-icon" src={freeShippingLogo} alt="Envío gratis"/> : null}
                </p>
                <h2 className="product-list--description-title" onClick={handleClick}>{item.title}</h2>
            </div>
            <div className="">
            </div>

        </div>
        </>
    )
}
