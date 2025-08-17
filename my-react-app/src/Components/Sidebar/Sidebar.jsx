import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <AiOutlineHome className="icon"></AiOutlineHome>
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to="/products">
            <MdOutlineProductionQuantityLimits className="icon"></MdOutlineProductionQuantityLimits>
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <FaRegComment className="icon"></FaRegComment>
            کامنت‌ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaRegUser className="icon"></FaRegUser>
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBagCheck className="icon"></BsBagCheck>
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <BsCurrencyDollar className="icon"></BsCurrencyDollar>
            تخفیف‌ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
