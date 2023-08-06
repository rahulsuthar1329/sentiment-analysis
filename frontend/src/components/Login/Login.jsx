import React , {useState} from "react";
import genie from "./images/Left_Image.png";
import styles from "./Login.module.css";
import google from "./images/Google_Logo.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Email:",email);
    console.log("Password", password);
  };
  return (
    <div 
        onSubmit={handleSubmit}>
      <div className={styles.inner}>
      <img src={genie} alt="" height={"90%"} width={"50%"}/>
      <div className={styles.loginForm}>
      <form action=""  className={styles.form}>
        <input type="email" placeholder="Email"  className = {styles.email} onChange={(e)=> setEmail(e.target.value)} /> 
        <input type="password" placeholder = "Password"  className = {styles.password} onChange={(e)=> setPassword(e.target.value)} />
        <div className={styles.innerForm}>
          <label htmlFor="" className={styles.rememberme}><input type="checkbox" />Remember Me</label>
          <label htmlFor="" className={styles.forgotpass}><a href="">Forgot Password</a></label>
        </div>
        <input type="submit" className={styles.googleBtn} id="userSubmitButton" ></input>
        <label htmlFor="">Don't have an Account ? <a href="">Register Here</a></label>
          
          
        <div >
        
          <button className={styles.googleBtn} ><img src={google}  height="20px" width= "20px"alt="" /> <label htmlFor="" className="styles.googleBtn">Login With Google</label></button>
          {/* <input type="submit"  className=""> <img src={google}  height= "20px" width = "20px" alt="" /><label>Login With Google</label></input> */}
        </div>

      </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
