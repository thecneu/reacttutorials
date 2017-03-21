import React from 'react';
import FilterLink from '../components/FilterLink';

const Footer = ({filterClick, active}) => (
    <p>
        Show:
        {' '}
        <FilterLink filter="all" filterClick={filterClick} active={active}>
            All
        </FilterLink>
        {' '}
        <FilterLink filter="active" filterClick={filterClick} active={active}>
            Active
        </FilterLink>
        {' '}
        <FilterLink filter="completed" filterClick={filterClick} active={active}>
            Completed
        </FilterLink>
    </p>
);

export default Footer
