import React, { useEffect, useState } from "react";
import Errorbox from "../ErrorBox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductTable from "../ProductsTable/ProductTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then((text) => (text ? JSON.parse(text) : []))
      .then((data) => {
        setAllProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts}></AddNewProduct>
      <ProductTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      ></ProductTable>
    </>
  );
}
