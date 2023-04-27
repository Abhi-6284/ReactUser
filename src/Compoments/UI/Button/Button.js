import React from 'react'

import styless from './Button.module.css'

const Button = props => {
    return (
        <>
            <button
                onClick={props.onClick}
                className={`${styless.button} ${props.className}`}
                type={props.type || 'button'}>
                {props.children}
            </button>
        </>
    );
}

export default Button;