/* react */
import React from "react";
/* css  */
import styles from "../Modal/Modal.module.css";
/**
 * @function Modal
 * @export
 * @description Modal component
 * @return {HTMLElement} component generated HTML
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;