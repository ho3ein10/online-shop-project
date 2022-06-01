import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../redux/actions/userActions/editProfileAction";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { validate } from "../helper/founctions";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const { userState, darkModeState } = useSelector((state) => state);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(userData, "edit"));
  }, [userData, focused]);

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(
        editProfileAction(userData.name, userData.email, userData.password)
      );
    } else {
      setFocused({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  useEffect(() => {
    if (userState.userData.update) {
      navigate("/");
    }
  }, [navigate, userState.userData.update]);

  return (
    <div className={styles.mainContainer}>
      <form
        className={
          darkModeState ? styles.darkFormContainer : styles.lightFormContainer
        }
        onSubmit={submitHandler}
      >
        <h2 className={styles.header}>Edit Profile</h2>
        <div className={styles.formField}>
          <label>New Name</label>
          <input
            className={
              errors.name && focused.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            value={userData.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && focused.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>New Email</label>
          <input
            className={
              errors.email && focused.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={userData.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && focused.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>New Password</label>
          <input
            className={
              errors.password && focused.password
                ? styles.uncompleted
                : styles.formInput
            }
            type={showPass ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            className={showPass ? styles.eyeIcon : styles.eyeSlashIcon}
            onClick={() => setShowPass((last) => !last)}
          ></div>
          {errors.password && focused.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && focused.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            className={showConfirmPass ? styles.eyeIcon : styles.eyeSlashIcon}
            onClick={() => setShowConfirmPass((last) => !last)}
          ></div>
          {errors.confirmPassword && focused.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link className={styles.linkButton} to="/">
            Home
          </Link>
          <button
            className={darkModeState ? styles.darkButton : styles.lightButton}
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
      <div className={styles.warningBox}>
        {userState.error && (
          <div className={styles.warningText}>
            Sorry, the changes were not saved !
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
