import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProductTable.css";
export default function ProductTable() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    console.log("close");
    setShowModal(false);
  };

  const submit = () => {
    console.log("submit");
    setShowModal(false);
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
              <button className="product-table-btn">جزئیات</button>
              <button
                className="product-table-btn"
                onClick={() => setShowModal(true)}
              >
                حذف
              </button>
              <button className="product-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {showModal && (
        <DeleteModal submitAction={submit} cancelAction={cancel}></DeleteModal>
      )}
    </>
  );
}
