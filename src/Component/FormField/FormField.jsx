import React from 'react';
import styles from './FormField.module.css'

export default function FormField({ label, type, name, value, handleChange, hasError }) {
  return (
    <div className={styles.formField}>
      <label className={styles.labelInput} htmlFor={name}>{label}{hasError ? <span style={{ color: 'red' }}> Field required</span> : ''}</label>
      <input className={styles.justInputs}
       type={type}
       id={name}
       name={name}
       value={value}
       onChange={handleChange}
      />
    </div>
  );
}