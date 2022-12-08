import React from "react";
import { useState } from "react";
import game from "../../Images/game.jpg";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";


function LogIn({saveUser}) {
  let [user, setUser] = useState({
  
    email: "",
    password: ""
  });

  let [validationEror, setValidationEror] = useState([]);
  let [apiEror, setApiEror] = useState(null);
  let navigate = useNavigate();

  function getUserData(e) {
    let currentUser = { ...user };
    currentUser[e.target.name] = e.target.value;
    setUser(currentUser);
  }

  async function register(e) {
    e.preventDefault();
    if (validateUser()) {
      let { data } = await axios.post(
        `https://sticky-note-fe.vercel.app/signin`,
        user
      );
      if (data.message == "success") {
        localStorage.setItem("token", data.token)
        saveUser();
        navigate("/Home");
      } else {
        setApiEror(data.message);
      }
    }
  }

  function validateUser() {
    let schema = joi.object({
  
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      password: joi.string().pattern(new RegExp(/^[A-Z][a-z]{3,8}$/)),
     
    });

    let res = schema.validate(user, { abortEarly: false });
    console.log(res);
    if (res.error) {
      setValidationEror(res.error.details);
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <div className="container mt-5">
        {apiEror && <div className="alert alert-danger">{apiEror}</div>}
        <div className="row">
          <div className="col-6">
            <img src={game} className="w-100" />
          </div>
          <div className="col-6">
            <h2 className="fw-5 text-center text-white mb-3">Log in to GameOver</h2>
            {/* {validationEror.map((ele) => (
              <div className="eror alert alert-danger">{ele.message}</div>
            ))} */}

            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                onChange={(e) => getUserData(e)}
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-100 form-control"
              />

              <label htmlFor="password"></label>
              <input
                type="password"
                onChange={(e) => getUserData(e)}
                id="password"
                name="password"
                placeholder="Password"
                className="w-100 form-control"
              />
              <button
                onClick={(e) => register(e)}
                className="w-100 btn btn-dark mt-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
