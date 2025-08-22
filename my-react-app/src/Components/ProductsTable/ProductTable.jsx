import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import "./ProductTable.css";
export default function ProductTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const cancel = () => {
    console.log("close");
    setShowDeleteModal(false);
  };

  const submit = () => {
    console.log("submit");
    setShowDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>

        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="./public/watch1.jpg"
                alt="watch3"
                className="product-table-img"
              />
            </td>
            <td>ساعت Nasa SE</td>
            <td>۲۰ میلیون تومان</td>
            <td>۵</td>
            <td>
              <button
                className="product-table-btn"
                onBlur={() => setShowDetailsModal(false)}
                onClick={() => {
                  setShowDetailsModal(true);
                }}
              >
                جزئیات
              </button>
              <button
                className="product-table-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                حذف
              </button>
              <button className="product-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {showDeleteModal && (
        <DeleteModal submitAction={submit} cancelAction={cancel}></DeleteModal>
      )}
      {showDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}></DetailsModal>
      )}
    </>
  );
}
