import React from 'react';
import "./Input.css"




const Input = ({ value, onChange,onKeyPress }) => {
    return (
        <div>
            <input
            placeholder="click to add tas"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default Input






