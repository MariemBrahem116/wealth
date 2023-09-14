/* react */
import React from 'react';
/* css  */
import styles from './FormButton.module.css';
/* Redux */
import { useDispatch } from 'react-redux';
import { createEmployeeAction, toggleModalAction } from '../../redux/store';
/**
 * React component to create a form submit button
 * @param { {title: String} } props - title: button title text
 * @returns { React.ReactElement } FormButton component
 */
function FormButton(props) {
  const dispatch = useDispatch();
  return (
   <button className={styles.formButton}
   onClick={(e) => {
    e.preventDefault();
    if (props.title === 'Save') {
       dispatch(createEmployeeAction());
    } else {
       dispatch(toggleModalAction());
    }
 }}
   >
    <h1 className={styles.formButtonText}>{props.title}</h1>
   </button>
  )
}
export default FormButton