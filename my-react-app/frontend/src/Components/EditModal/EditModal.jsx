import React, { useEffect } from "react";

import "./EditModal.css";
export default function EditModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.key == "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => {
      window.removeEventListener("keydown", checkKey);
    };
  });

  return (
    <div className="modal-parent active">
      <form action="" className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>

        {children}

        <button className="edit-form-submit" onClick={onSubmit}>
          {" "}
          تایید اطلاعات جدید
        </button>
      </form>
    </div>
  );
}
