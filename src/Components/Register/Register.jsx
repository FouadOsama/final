import React from "react";
import { useState } from "react";
import game from "../../Images/game.jpg";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";

function Register() {
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
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
        `https://sticky-note-fe.vercel.app/signup`,
        user
      );
      if (data.message == "success") {
        navigate("/LogIn");
      } else {
        setApiEror(data.message);
      }
    }
  }

  function validateUser() {
    let schema = joi.object({
      first_name: joi.string().max(20).required(),
      last_name: joi.string().max(20).required(),
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      password: joi.string().pattern(new RegExp(/^[A-Z][a-z]{3,8}$/)),
      age: joi.number().min(12).max(50).required(),
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
            <h2 className="fw-5 text-center text-white mb-3">Creat My Account!</h2>
            {/* {validationEror.map((ele) => (
              <div className="eror alert alert-danger">{ele.message}</div>
            ))} */}
            <div className="form-group d-flex justify-content-center">
              <label htmlFor="first_name"></label>
              <input
                type="text"
                onChange={(e) => getUserData(e)}
                id="first_name"
                name="first_name"
                placeholder="First Name"
                className="form-control w-50 me-2"
              />
              <label htmlFor="last_name"></label>
              <input
                type="text"
                onChange={(e) => getUserData(e)}
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                className="form-control w-50"
              />
            </div>
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
              <label htmlFor="age"></label>
              <input
                type="number"
                onChange={(e) => getUserData(e)}
                id="age"
                placeholder="age"
                name="age"
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
                Creat Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
