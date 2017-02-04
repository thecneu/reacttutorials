import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
	return { active: ownProps.filter === state.visibilityFilter };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onFilterClick() {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

const FilterLink = ({active, children, onFilterClick}) => {
	if (active) {
		return (
			<span>{children}</span>
		)
	}

	return (
		<a href="#" onClick={e => {
			e.preventDefault();
			onFilterClick();
		}}>
			{children}
		</a>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterLink)	
