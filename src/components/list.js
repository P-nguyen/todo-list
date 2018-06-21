import React from 'react';

export default props => {
    console.log(props);

    const list = props.data.map((item, index) =>{
        return (
        <li className="collection-item" key={index}>
        {item.title}
        </li>
        ) 
    });

    return (
    <ul className="collection">
        {list}
    </ul>
    )
}