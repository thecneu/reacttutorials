import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({children, filter, active}) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </Link>
)

export default FilterLink;
