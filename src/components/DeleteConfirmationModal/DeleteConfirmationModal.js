import React from "react";
import "./DeleteConfirmationModal.css";

export function DeleteConfirmationModal({onClose, handleDelete}) {
  return (
    <div className="modal__confirm">
      <div className="modal__confirm-container">
      <button className='modal__close' onClick={onClose} />
        <div className="modal__messages-container">
          <p className="modal__message">Are you sure you want to delete this item?</p>
          <p className="modal__message">This action is irreversible.</p>
        </div>
        <di className="modal__buttons-container">
          <button className="modal__delete_confirm" onClick={handleDelete}>Yes, delete item</button>
          <button className="modal__delete_cancel" onClick={onClose}>Cancel</button>
        </di>
      </div>
    </div>
  );
}
