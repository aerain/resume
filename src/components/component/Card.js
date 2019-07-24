import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const className = props.className ? `card ${props.className}` : 'card';
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    className : PropTypes.string,
    children : PropTypes.element,
}

export default Card;