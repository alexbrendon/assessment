import React from 'react';
import './sidebar.css';

const SideBar = (props) => {
    
    return (
        <div className="box sidebar">
            <div className="product-header">
                <img src={props.image} alt="product" />
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
            <ul className="tags">
                {props.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
