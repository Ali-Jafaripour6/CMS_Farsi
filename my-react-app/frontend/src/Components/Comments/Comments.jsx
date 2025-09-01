import React, { useEffect, useState } from "react";
import Errorbox from "../ErrorBox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import "./Comments.css";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const [msg, setMsg] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);

  useEffect(() => {
    getAllComment();
  }, []);

  const getAllComment = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  };

  const closeDetailModal = () => {
    setIsShowDetailModal(false);
  };
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const closeEditModal = () => {
    console.log("closed");
    setIsShowEditModal(false);
  };

  const closeAcceptComment = () => {
    setIsShowAcceptModal(false);
  };

  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptModal(false);
        getAllComment();
      });

    console.log("کامنت تایید شد");
    setIsShowAcceptModal(false);
  };

  const updateComment = () => {
    console.log("updated");
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: msg,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllComment();
      });
  };

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowDeleteModal(false);
        getAllComment();
      });
  };

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
                  <button
                    className="comment-btn"
                    onClick={() => {
                      setMsg(comment.body);
                      setIsShowDetailModal(true);
                    }}
                  >
                    دیدن متن کامنت
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    className="comment-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="comment-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMsg(comment.body);
                      setCommentID(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="comment-btn">پاسخ‌دهی</button>

                  {comment.isAccept === 0 && (
                    <button
                      className="comment-btn"
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد"></Errorbox>
      )}

      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailModal}>
          <p className="text-modal">{msg}</p>
          <button
            className="text-modal-close-btn"
            onClick={() => {
              setIsShowDetailModal(false);
            }}
          >
            بستن پیام
          </button>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف کامنت مطمئن هستید؟"
          cancelAction={closeDeleteModal}
          submitAction={deleteComment}
        ></DeleteModal>
      )}

      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateComment}>
          <textarea
            value={msg}
            onChange={(event) => setMsg(event.target.value)}
          ></textarea>
        </EditModal>
      )}

      {isShowAcceptModal && (
        <DeleteModal
          title="آیا از تایید مطمئن هستید؟"
          submitAction={acceptComment}
          cancelAction={closeAcceptComment}
        ></DeleteModal>
      )}
    </div>
  );
}
