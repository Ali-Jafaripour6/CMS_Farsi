import React from "react";
import Errorbox from "../ErrorBox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductTable from "../ProductsTable/ProductTable";
export default function Products() {
  return (
    <>
      <Errorbox msg="هیچ محصولی یافت نشد"></Errorbox>
      <AddNewProduct></AddNewProduct>
      <ProductTable></ProductTable>
    </>
  );
}
