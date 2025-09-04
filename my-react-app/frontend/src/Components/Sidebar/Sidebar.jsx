import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to="/">
          <AiOutlineHome className="icon"></AiOutlineHome>
          صفحه اصلی
        </NavLink>
        <NavLink to="/products">
          <MdOutlineProductionQuantityLimits className="icon"></MdOutlineProductionQuantityLimits>
          محصولات
        </NavLink>
        <NavLink to="/comments">
          <FaRegComment className="icon"></FaRegComment>
          کامنت‌ها
        </NavLink>
        <NavLink to="/users">
          <FaRegUser className="icon"></FaRegUser>
          کاربران
        </NavLink>
        <NavLink to="/orders">
          <BsBagCheck className="icon"></BsBagCheck>
          سفارشات
        </NavLink>
        <NavLink to="/offs">
          <BsCurrencyDollar className="icon"></BsCurrencyDollar>
          تخفیف‌ها
        </NavLink>
      </ul>
    </div>
  );
}
