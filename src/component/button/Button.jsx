import React from 'react';
import './button.css'

const Button = ({ ButtonContent }) => {
    return (
        <>
            <div className="button-component">
                <div className="button">
                    {ButtonContent}
                </div>
            </div>
        </>
    )
}

export default Button