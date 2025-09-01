import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../ErrorBox/Errorbox";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "./ProductTable.css";
import { useEffect } from "react";
import { use } from "react";

export default function ProductTable({ allProducts, getAllProducts }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [productDetails, setProductDetails] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const cancelDelete = () => {
    console.log("cancelDelete");
    setShowDeleteModal(false);
  };

  const submitDelete = () => {
    console.log("submitDelete");
    console.log(productID);

    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setShowDeleteModal(false);
        getAllProducts();
      });
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const updateProductInfo = (event) => {
    event.preventDefault();
    console.log("Product Updated");

    const productNewInfo = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    if (
      productNewInfo.title.length &&
      productNewInfo.price &&
      productNewInfo.count &&
      productNewInfo.img.length &&
      productNewInfo.popularity &&
      productNewInfo.sale &&
      productNewInfo.colors
    ) {
      fetch(`http://localhost:8000/api/products/${productID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productNewInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          getAllProducts();
          setIsShowEditModal(false);
        });
    }
  };

  return (
    <>
      {allProducts.length ? (
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
                      setProductDetails(product);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewColors(product.colors);
                      setProductNewCount(product.count);
                      setProductNewImg(product.img);
                      setProductNewPopularity(product.popularity);
                      ("");
                      setProductNewSale(product.sale);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد"></Errorbox>
      )}

      {showDeleteModal && (
        <DeleteModal
          title="آیا از حذف محصول مطمئن هستید؟"
          submitAction={submitDelete}
          cancelAction={cancelDelete}
        ></DeleteModal>
      )}
      {showDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ‌بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productDetails.popularity}</td>
                <td>{productDetails.sale.toLocaleString()}</td>
                <td>{productDetails.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
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
              value={productNewTitle}
              onClick={() => setProductNewTitle("")}
              onChange={(event) => {
                setProductNewTitle(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice}
              onClick={() => setProductNewPrice("")}
              onChange={(event) => {
                setProductNewPrice(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="تعداد جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
              onClick={() => setProductNewCount("")}
              onChange={(event) => {
                setProductNewCount(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="کاور جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
              onClick={() => setProductNewImg("")}
              onChange={(event) => {
                setProductNewImg(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان محبوبیت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
              onClick={() => setProductNewPopularity("")}
              onChange={(event) => {
                setProductNewPopularity(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان فروش جدید را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
              onClick={() => setProductNewSale("")}
              onChange={(event) => {
                setProductNewSale(event.target.value);
              }}
            />
          </div>
          <div className="edit-product-form">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان رنگ‌بندی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewColors}
              onClick={() => setProductNewColors("")}
              onChange={(event) => {
                setProductNewColors(event.target.value);
              }}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
