import React from 'react';
import './InputOption.css';

const InputOpntion = ({Icon, title, color, like}) => {
    return (
        <div className="InputOption">
            <Icon style={{color: color}} />
            <h4>{title}</h4>
            {like && <p>({like})</p>}
        </div>
    );
};

export default InputOpntion;