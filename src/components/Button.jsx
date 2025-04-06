import React from 'react';
import PropTypes from 'prop-types';
import './styles/Button.scss';

const Button = ({ children, onClick, type = 'button', disabled = false, size = 'medium' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${size} ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;