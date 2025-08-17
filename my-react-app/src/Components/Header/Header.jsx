import React from "react";
import "./Header.css";
import { HiOutlineBell } from "react-icons/hi2";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="./public/profile.jpg" alt="" />
        <div>
          <h1>علی جعفری پور</h1>
          <h3>برنامه‌نویس فرانت اند</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input placeholder="جست‌وجو کنید..." type="text" />
          <button>جست و جو</button>
        </div>

        <button className="header-left-icon">
          <HiOutlineBell></HiOutlineBell>
        </button>
        <button className="header-left-icon">
          <BsBrightnessHigh></BsBrightnessHigh>
        </button>
      </div>
    </div>
  );
}
