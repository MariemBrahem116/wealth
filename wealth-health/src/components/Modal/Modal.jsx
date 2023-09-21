/* react */
import React from "react";
/* css  */
import "../Modal/Modal.css";
/**
 * @function Modal
 * @export
 * @description Modal component
 * @return {HTMLElement} component generated HTML
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <button className="close_button" onClick={onClose}>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;