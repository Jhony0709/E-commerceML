import React from 'react'

export default function Breadcrumb({ categories }) {
    return (
        <div className="breadcrumb">
            {categories.length ? (
                <ul className="max-width">
                    {categories.map((category, key) => <li key={key}>{category}</li>)}
                </ul>
            ) : (
                null
            )}
        </div>
    )
}
