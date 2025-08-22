import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide }) {
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
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم محصول</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ساعت</td>
              <td>۱۰۰,۰۰۰,۰۰۰</td>
              <td>۹۱</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
