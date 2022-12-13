import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    actions.login(email, password).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-white">Login</h1>
		
        <div className="login">
          <div className="mb-2">
            <input
              className="w-50"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-50"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleLogin(email, password)}
          >
            {" "}
            Login
          </button>
        </div>
      
    </div>
  );
};
