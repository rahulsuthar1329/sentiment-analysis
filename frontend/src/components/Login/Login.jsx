import React, { useState } from "react";
import styles from "./Login.module.css";
import vector from "./images/Left_Image_Cropped.png";
import google from "./images/Google_Logo.png";
import checkbox_unselected from "./images/Checkbox_Unselected.png";
import checkbox_selected from "./images/Checkbox_Selected.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/Slices/AuthSlice";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (uniqueId.trim() && password.trim()) {
        const response = await axios.post("http://localhost:5001/auth/login", {
          uniqueId,
          password,
        });
        if (response.status === 200) {
          setLoading(false);
          toast.success("Login Successfully!", toastOptions);
          const { user, token } = response?.data;
          dispatch(setLogin({ user, token }));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } else {
        if (!uniqueId.trim()) {
          setLoading(false);
          toast.error("Please enter username or email.", toastOptions);
          return;
        }
        if (!password.trim()) {
          setLoading(false);
          toast.error("Please enter password.", toastOptions);
          return;
        }
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message, toastOptions);
        setLoading(false);
        return;
      }
      toast.error("Internal Server Error!", toastOptions);
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.mycont}>
        <div className={styles.leftSide}>
          <img
            src={vector}
            alt=""
            width="100%"
            height="100%"
            className={styles.vector}
          />
        </div>
        <div className={styles.rightSide}>
          <form className={styles.content} onSubmit={handleOnSubmit}>
            <h2 className={styles.heading}>Login</h2>

            <input
              type="text"
              placeholder="Email or Username"
              value={uniqueId}
              name="uniqueId"
              onChange={handleChange(setUniqueId)}
              className={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange(setPassword)}
              className={styles.input}
            />

            <div
              className={`d-flex justify-content-between align-items-center w-75 px-2 ${styles.forgot}`}
            >
              <p
                onClick={() => setRemember(!remember)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src={remember ? checkbox_selected : checkbox_unselected}
                  alt="checkbox"
                  height={"15px"}
                />{" "}
                <span>Remember Me</span>
              </p>
              <p>
                <span onClick={() => navigate("/forgot")}>
                  Forgot Password?
                </span>
              </p>
            </div>

            <button className={styles.submit}>
              {loading ? "..." : "Submit"}
            </button>
            <p>
              Don't have an Account ?{" "}
              <span onClick={() => navigate("/register")}>Register here.</span>
            </p>
          </form>
          <button
            className={`${styles.submit} d-flex justify-content-between align-items-center`}
          >
            <img src={google} alt="google icon" height={"23px"} />{" "}
            <p>Login with Google</p>
            <div></div>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
