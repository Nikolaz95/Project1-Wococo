import React from 'react'
import PropTypes from 'prop-types';
import './Button.css';


const Button = ({ primary, size, backgroundColor, label, onClick }) => {
    const mode = primary ? 'button-Def' : 'button-NotDef';
    const btnSize = size === 'small' ? 'btnSmall' : size === 'large' ? 'btnLarge' : 'btnMedium';

    return (
        <button
            className={`button ${mode} ${btnSize}`}
            style={backgroundColor && { backgroundColor }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /** Is this the principal call to action on the page? */
    primary: PropTypes.bool,
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};

export default Button;