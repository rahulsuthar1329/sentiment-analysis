import React, { useState } from "react";
import styles from "./VerifyOTP.module.css";
import vector from "./img/vector.png";
import logo from "./img/GenieCart_Teal.png";
import { useLocation } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState({
    inp1: "",
    inp2: "",
    inp3: "",
    inp4: "",
    inp5: "",
    inp6: "",
  });
  const [seconds, setSeconds] = useState(0);

  const location = useLocation();

  return (
    <div className={styles.verify}>
      <div className={styles.container}>
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
          <img src={logo} alt="" height="35px" className={styles.logo} />
          <div className={styles.content}>
            <h3>Verify your email</h3>
            <p>Please Enter the One Time Password (OTP) sent to your email</p>
            <div className={styles.code}>
              <input
                type="text"
                name="inp1"
                value={otp.inp1}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp1: e.target.value })}
                maxLength={1}
              />
              <input
                type="text"
                name="inp2"
                value={otp.inp2}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp2: e.target.value })}
                maxLength={1}
              />
              <input
                type="text"
                name="inp3"
                value={otp.inp3}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp3: e.target.value })}
                maxLength={1}
              />
              <input
                type="text"
                name="inp4"
                value={otp.inp4}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp4: e.target.value })}
                maxLength={1}
              />
              <input
                type="text"
                name="inp5"
                value={otp.inp5}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp5: e.target.value })}
                maxLength={1}
              />
              <input
                type="text"
                name="inp6"
                value={otp.inp6}
                className={styles.input}
                onChange={(e) => setOtp({ ...otp, inp6: e.target.value })}
                maxLength={1}
              />
            </div>
            <p>
              Resend OTP in {seconds < 10 ? "0" + seconds : seconds} sec.{" "}
              {!seconds && <span>Resend OTP</span>}
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button className={styles.submit}>Verify</button>
            </div>
            <p className={styles.goback}>Change your Credentials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
