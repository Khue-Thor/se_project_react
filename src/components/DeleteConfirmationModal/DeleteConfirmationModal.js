import React from "react";
import "./DeleteConfirmationModal.css";

export function DeleteConfirmationModal() {
  return (
    <div className="modal__confirm">
      <div className="modal__confirm-container">
        <div className="modal__messages-container">
          <p className="modal__message">Are you sure you want to delete this item?</p>
          <p className="modal__message">This action is irreversible.</p>
        </div>
        <di className="modal__buttons-container">
          <button className="modal__delete_confirm">Yes, delete item</button>
          <button className="modal__delete_cancel">Cancel</button>
        </di>
      </div>
    </div>
  );
}
