import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
    type = 'submit',
    className = '',
    variant = 'primary',
    disabled,
    children,
    ...props }) {

    Button.propTypes = {
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
        disabled: PropTypes.bool,
        children: PropTypes.node,
    };

    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${disabled && 'opacity-30'} btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
