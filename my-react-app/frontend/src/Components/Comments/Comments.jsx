import React, { useEffect, useState } from "react";
import Errorbox from "../ErrorBox/Errorbox";
import "./Comments.css";
export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button className="comment-btn">دیدن متن کامنت</button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.time}</td>
                <td>
                  <button className="comment-btn">حذف</button>
                  <button className="comment-btn">ویرایش</button>
                  <button className="comment-btn">پاسخ‌دهی</button>
                  <button className="comment-btn">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد"></Errorbox>
      )}
    </div>
  );
}
