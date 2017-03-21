import React from 'react';

const ListItem = ({id, text, completed, todoClick}) => (
    <li style={{textDecoration: completed ? 'line-through' : 'none'}} onClick={() => todoClick(id)}>
        {text}
    </li>
);

export default ListItem;
