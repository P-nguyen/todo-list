import React from 'react';
import ListData from '../data/list';

export default props => {

    const list = ListData.map((item, index) =>{
        return (
        <li className="collection-item" key={item.id}>
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