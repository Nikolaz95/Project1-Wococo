import React from 'react'
import PropTypes from 'prop-types';
import './Btn.css';


const Btn = ({ primary, size, backgroundColor, label, onClick }) => {
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
    )
}

Btn.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Btn;