import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default forwardRef(function TextInput({
    type = 'text',
    name,
    value,
    defaultValue,
    className,
    variant = 'primary',
    autoComplete,
    required,
    handleChange,
    placeholder,
    isError,
    isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    TextInput.propTypes = {
        type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        handleChange: PropTypes.func,
        placeholder: PropTypes.string,
        isError: PropTypes.bool
    };

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                name={name}
                value={value}
                defaultValue={defaultValue}
                type={type}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}`}
                ref={input}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
