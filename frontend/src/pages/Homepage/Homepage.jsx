import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../store/Slices/AuthSlice";

const Homepage = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center h-100 fw-bold text-wrap">
      Homepage
      <button onClick={() => dispatch(setLogout())}>Clear State</button>
    </div>
  );
};

export default Homepage;
