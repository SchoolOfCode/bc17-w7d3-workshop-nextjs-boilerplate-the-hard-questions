import React from 'react';
import styles from './FormField.module.css'

export default function FormField({ label, type, name, value, handleChange }) {
  return (
    <div className={styles.formField}>
      <label className={styles.labelInput} htmlFor={name}>{label}</label>
      <input className={styles.labelInput}
       type={type}
       id={name}
       name={name}
       value={value}
       onChange={handleChange}
      />
    </div>
  );
}