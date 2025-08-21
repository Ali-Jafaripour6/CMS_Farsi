import React from "react";
import "./AddNewProduct.css";

// add input icons **

export default function AddNewProduct() {
  return (
    <div className="products-main">
      <h1 className="product-title">افزودن محصول جدید</h1>

      <form action="#" className="add-product-form">
        <div className="add-product-form-wrap">
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ‌بندی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
        </div>
        <button className="add-product-btn">افزودن محصول</button>
      </form>
    </div>
  );
}
