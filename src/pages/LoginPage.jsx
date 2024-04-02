import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context-api/userContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameEmpty, setIsUsernameEmpty] = useState("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUser, userToken } = useContext(UserContext);
  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [userToken, navigate]);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (!username) {
      setIsUsernameEmpty("Please enter username");
    }
    if (!password) {
      setIsPasswordEmpty("Please enter password");
    }
    if (username && password) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_URL_PATH}`, {
          login_id: username,
          login_password: password,
          ip_address: import.meta.env.VITE_IP_ADDRESS,
        });
        const { data, success } = await response.data;
        if (success) {
          const token = await data[0]["jwt_token"];
          if (token) {
            localStorage.setItem("stored_token", token);
            setUser({
              full_name: data[0].full_name,
              profile_picture: data[0].profile_picture,
            });
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
        setError("Please enter correct username and password");
      }
    }
  };

  return (
    <div className="bg-slate-400 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <form className="bg-white h-max px-4 py-2 flex flex-col gap-3 rounded-lg text-center w-80">
          <div className="text-4xl font-bold pt-6">Log In</div>
          <div>
            <div
              htmlFor="username"
              className="text-md font-medium py-2 text-left"
            >
              Username
            </div>
            <input
              type="text"
              id="username"
              className="w-full px-2 py-1 border border-slate-200 rounded focus:border-slate-500 focus:outline-none"
              placeholder="nabin@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {isUsernameEmpty && (
              <p className="text-sm text-red-600 text-left pt-2">
                {isUsernameEmpty}
              </p>
            )}
          </div>
          <div>
            <div
              htmlFor="password"
              className="text-md font-medium py-2 text-left"
            >
              Password
            </div>
            <input
              type="text"
              id="password"
              className="w-full px-2 py-1 border border-slate-200 rounded focus:border-slate-500 focus:outline-none"
              placeholder="12345"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordEmpty && (
              <p className="text-sm text-red-600 text-left pt-2">
                {isPasswordEmpty}
              </p>
            )}
          </div>
          <div>
            <button
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2"
              onClick={handleFormSubmission}
            >
              Log In
            </button>
          </div>
          {error && (
            <p className="text-sm text-red-600 text-left pt-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
