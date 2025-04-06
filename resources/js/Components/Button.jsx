import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
    type = 'submit',
    className = '',
    variant = 'primary',
    children,
    processing,
    ...props }) {

    Button.propTypes = {
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
        children: PropTypes.node,
        processing: PropTypes.bool,
    };

    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
