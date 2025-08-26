import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import "./ProductTable.css";
import { useEffect } from "react";

export default function ProductTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => {
        setAllProducts(products);
      });
  });

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

  const updateProductInfo = (event) => {
    event.preventDefault();
    console.log("Product Updated");
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
          {allProducts.map((product) => (
            <tr key={product.id} className="products-table-tr">
              <td>
                <img
                  src={product.img}
                  alt="watch3"
                  className="product-table-img"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>
                <button
                  className="product-table-btn"
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
                <button
                  className="product-table-btn"
                  onClick={() => {
                    setIsShowEditModal(true);
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDeleteModal && (
        <DeleteModal submitAction={submit} cancelAction={cancel}></DeleteModal>
      )}
      {showDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}></DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => {
            setIsShowEditModal(false);
          }}
          onSubmit={updateProductInfo}
        >
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
