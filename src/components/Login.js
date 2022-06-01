import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/userActions/loginAction";
import { logoutAction } from "../redux/actions/userActions/logoutAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { validate } from "../helper/founctions";
import styles from "./Login.module.css";

const Login = () => {
  const { userState, darkModeState } = useSelector((state) => state);
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(userData, "login"));
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
      dispatch(loginAction(userData.email, userData.password));
    } else {
      setFocused({
        email: true,
        password: true,
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
        <h2 className={styles.header}>Log in</h2>
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
        <div className={styles.formButtons}>
          <Link className={styles.linkButton} to="/signup">
            Sign Up
          </Link>
          <button
            className={darkModeState ? styles.darkButton : styles.lightButton}
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
      <div className={styles.warningBox}>
        {userState.error && (
          <div className={styles.warningText}>
            Your email or password is invalid !
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
