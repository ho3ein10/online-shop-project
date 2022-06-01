import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../redux/actions/userActions/signupAction";
import { logoutAction } from "../redux/actions/userActions/logoutAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { validate } from "../helper/founctions";
import styles from "./SignUp.module.css";

const SignUp = () => {
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
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(userData, "signup"));
  }, [userData, focused]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setUserData({ ...userData, [e.target.name]: e.target.checked });
      if (e.target.checked === true) {
        setShowPass(false);
        setShowConfirmPass(false);
      }
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const focusHandler = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(signupAction(userData.name, userData.email, userData.password));
    } else {
      setFocused({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  useEffect(() => {
    dispatch(logoutAction());
  }, [dispatch, userData]);

  useEffect(() => {
    if (!!userState.userData.token) {
      navigate("/");
    }
  }, [navigate, userState.userData.token]);

  return (
    <div className={styles.mainContainer}>
      <form
        className={
          darkModeState ? styles.darkFormContainer : styles.lightFormContainer
        }
        onSubmit={submitHandler}
      >
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField}>
          <label>Name</label>
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
          <label>Email</label>
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
          <label>Password</label>
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
          <label>Confirm password</label>
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
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={userData.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && focused.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link className={styles.linkButton} to="/login">
            Log in
          </Link>
          <button
            className={darkModeState ? styles.darkButton : styles.lightButton}
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
      <div className={styles.warningBox}>
        {userState.error && (
          <div className={styles.warningText}>
            This email has already been registered in the system !
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
