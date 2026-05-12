import React from "react";

function Input({ placeholder, type, className, value, onChange }) {
  return (
    <input
      type={type}
      className={`py-[1.5vw] text-[1.1vw] text-center border-white/20 placeholder:text-white/20 bg-black/20 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
