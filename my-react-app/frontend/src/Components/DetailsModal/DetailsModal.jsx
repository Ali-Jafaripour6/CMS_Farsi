import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide , children}) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.key == "Escape") {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => {
      window.removeEventListener("keydown", checkKey);
    };
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>
  );
}
