import React from "react";
import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  // const hadleLoginChange = (e) => {
  //   setValues({ ...values, login: e.target.value });
  // };

  // const handlePwdChange = (e) => {
  //   setValues({ ...values, password: e.target.value });
  // };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    // console.log(e.target.name);
    // console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
