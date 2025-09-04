import React, { useEffect, useState } from "react";
import Errorbox from "../ErrorBox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "./Users.css";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [userNewFirstName, setUserNewFirstName] = useState("");
  const [userNewLastName, setUserNewLastName] = useState("");
  const [userNewUserName, setUserNewUserName] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [mainUserInfo, setMainUserInfo] = useState({});

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch(`http://localhost:8000/api/users/`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  const closeDetailModal = () => {
    setIsShowDetailModal(false);
  };

  const removeUser = () => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "DELETE",
    }).then(() => {
      getAllUsers();
      setIsShowDeleteModal(false);
    });
  };

  const updateUser = () => {
    const userNewInfo = {
      firsname: userNewFirstName,
      lastname: userNewLastName,
      username: userNewUserName,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllUsers();
      });
  };

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>
      {users.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل کاربر</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firsname} {user.lastname}
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setUserID(user.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setMainUserInfo(user);
                      setIsShowDetailModal(true);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setUserID(user.id);
                      setUserNewFirstName(user.firsname);
                      setUserNewLastName(user.lastname);
                      setUserNewUserName(user.username);
                      setUserNewPassword(user.password);
                      setUserNewPhone(user.phone);
                      setUserNewCity(user.city);
                      setUserNewEmail(user.email);
                      setUserNewAddress(user.address);
                      setUserNewScore(user.score);
                      setUserNewBuy(user.buy);
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
        <Errorbox msg="هیچ کاربری یافت نشد"></Errorbox>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف کاربر مطمئن هستید؟"
          cancelAction={closeDeleteModal}
          submitAction={removeUser}
        ></DeleteModal>
      )}

      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewFirstName}
              onChange={(event) => {
                setUserNewFirstName(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewLastName}
              onChange={(event) => {
                setUserNewLastName(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewUserName}
              onChange={(event) => {
                setUserNewUserName(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewPassword}
              onChange={(event) => {
                setUserNewPassword(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewPhone}
              onChange={(event) => {
                setUserNewPhone(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewCity}
              onChange={(event) => {
                setUserNewCity(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewEmail}
              onChange={(event) => {
                setUserNewEmail(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewAddress}
              onChange={(event) => {
                setUserNewAddress(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewScore}
              onChange={(event) => {
                setUserNewScore(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group ">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              value={userNewBuy}
              onChange={(event) => {
                setUserNewBuy(event.target.value);
              }}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
        </EditModal>
      )}

      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شهر</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainUserInfo.city}</td>
                <td>{mainUserInfo.address}</td>
                <td>{mainUserInfo.score}</td>
                <td>{mainUserInfo.buy}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
    </div>
  );
}
