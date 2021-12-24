import React from 'react'
import Button from './Button';
import withLoading from './withLoading';

function Input() {
    return (
        <>
            <h1>hahaha</h1>
            <Button />
            <input defaultVlaue="Input" />
        </>
    )
}

export default withLoading(Input);