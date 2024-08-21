import React from 'react';

export default function FormField({ label, type, name, value, handleChange }) {
  return (
    <div className="formField">
      <label htmlFor={name}>{label}</label>
      <input
       type={type}
       id={name}
       name={name}
       value={value}
       onChange={handleChange}
      />
    </div>
  );
}