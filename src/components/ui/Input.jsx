import React from "react";

const Input = ({
  type = "text",
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className="block text-sm font-heading font-semibold text-charcoal mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border rounded-lg font-body 
                   bg-base-white text-charcoal placeholder-fog-gray 
                   focus:border-mint-green focus:ring-1 focus:ring-mint-green 
                   ${error ? "border-red-500" : "border-fog-gray"}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500 font-body">{error}</p>}
    </div>
  );
};

export default Input;
