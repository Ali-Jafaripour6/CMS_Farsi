import React from "react";
import "./AddNewProduct.css";
import { useState } from "react";

// add input icons **

export default function AddNewProduct({ getAllProducts }) {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductInfo = {
    id: Math.random(),
    title: newProductTitle,
    price: +newProductPrice,
    count: +newProductCount,
    img: newProductImg,
    popularity: +newProductPopularity,
    sale: +newProductSale,
    colors: +newProductColors,
  };

  const addNewProduct = (event) => {
    event.preventDefault();

    console.log(newProductInfo);

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfo),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add product");
        return res.text();
      })
      .then(() => {
        console.log("product added");
        getAllProducts();
        emptyInputs();
      })
      .catch((err) => console.log(err));
  };

  const emptyInputs = () => {
    setNewProductTitle("");
    setNewProductPrice("");
    setNewProductImg("");
    setNewProductCount("");
    setNewProductPopularity("");
    setNewProductSale("");
    setNewProductColors("");
  };

  return (
    <div className="products-main">
      <h1 className="product-title">افزودن محصول جدید</h1>

      <form action="#" className="add-product-form" onSubmit={addNewProduct}>
        <div className="add-product-form-wrap">
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product-input"
              value={newProductTitle}
              onChange={(event) => {
                setNewProductTitle(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
              value={newProductPrice}
              onChange={(event) => {
                setNewProductPrice(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
              value={newProductCount}
              onChange={(event) => {
                setNewProductCount(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product-input"
              value={newProductImg}
              onChange={(event) => {
                setNewProductImg(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
              value={newProductPopularity}
              onChange={(event) => {
                setNewProductPopularity(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
              value={newProductSale}
              onChange={(event) => {
                setNewProductSale(event.target.value);
              }}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ‌بندی محصول را بنویسید"
              className="add-product-input"
              value={newProductColors}
              onChange={(event) => {
                setNewProductColors(event.target.value);
              }}
            />
          </div>
        </div>
        <button className="add-product-btn" type="submit">
          افزودن محصول
        </button>
      </form>
    </div>
  );
}
