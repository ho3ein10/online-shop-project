import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/userActions/logoutAction";
import { resetUpdateAction } from "../../redux/actions/userActions/resetUpdateAction";
import { postOrdersClearAction } from "../../redux/actions/postOrdersActions/postOrdersClearAction";
import { sortListAction } from "../../redux/actions/sortListAction";
import { Link } from "react-router-dom";
import styles from "./User.module.css";
import userIcon from "../../icons/user-icon.svg";
import arrowUp from "../../icons/arrow-up-icon.svg";
import arrowDown from "../../icons/arrow-down-icon.svg";
import listIcon from "../../icons/list-icon.svg";
import sortListDown from "../../icons/sort-list-down.svg";
import sortListUp from "../../icons/sort-list-up.svg";

const User = () => {
  const dispatch = useDispatch();
  const { userState, sortListState } = useSelector((state) => state);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      {showInfo ? (
        <img
          className={styles.arrowIcon}
          src={arrowUp}
          alt="arrow"
          onClick={() => setShowInfo((last) => !last)}
        />
      ) : (
        <img
          className={styles.arrowIcon}
          src={arrowDown}
          alt="arrow"
          onClick={() => setShowInfo((last) => !last)}
        />
      )}
      <img className={styles.userIcon} src={userIcon} alt="user" />
      {showInfo && (
        <div className={styles.userInformation}>
          <div className={styles.informationBox}>
            <h3>User Name :</h3>
          </div>

          <div className={styles.informationBox}>
            <h4>{userState.userData.name}</h4>
          </div>

          <div className={styles.informationBox}>
            <h3>Email :</h3>
          </div>

          <div className={styles.informationBox}>
            <h5>{userState.userData.email}</h5>
          </div>

          <div className={styles.informationBox}>
            <img className={styles.listIcon} src={listIcon} alt="list" />
            <Link className={styles.editLink} to={"/my-orders"}>
              My Orders
            </Link>
            {sortListState ? (
              <img
                className={styles.sortList}
                src={sortListUp}
                alt="sort-list"
                onClick={() => dispatch(sortListAction())}
              />
            ) : (
              <img
                className={styles.sortList}
                src={sortListDown}
                alt="sort-list"
                onClick={() => dispatch(sortListAction())}
              />
            )}
          </div>

          <div className={styles.bottomContainer}>
            <Link
              className={styles.editLink}
              to={`/edit-profile/${userState.userData.id}`}
              onClick={() => dispatch(resetUpdateAction())}
            >
              Edit profile
            </Link>
            <button
              className={styles.logoutButton}
              onClick={() => {
                dispatch(logoutAction());
                dispatch(postOrdersClearAction());
              }}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
