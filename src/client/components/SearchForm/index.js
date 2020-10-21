import React, { useRef, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

export default function SearchForm () {

    const searchInput = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [searchProduct, setSearchProduct] = useState(false);
    const [queryString, setQueryString] = useState('');

    const searchAction = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setQueryString(`/products?q=${inputValue}`)
            setSearchProduct(true);
        }
    }

    useEffect(()=>{
        searchInput.current.focus();
    },[])

    return (
        <>
        {searchProduct ? <Redirect to={queryString} /> : ''}
        <form onSubmit={searchAction} className='form__main-search'>
            <input type="text"
                className="input input--main-search"
                placeholder="Nunca dejes de buscar"
                type="text"
                ref={searchInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button className="btn btn--ico btn--ico-default" type="submit"></button>
        </form>
        </>
    )
}