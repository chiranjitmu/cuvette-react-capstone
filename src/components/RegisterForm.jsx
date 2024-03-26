import React, { useRef, useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();
  const checkbox = useRef("");

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = () => {
    let errrorcheck = false;
    if (formData.name.trim().length === 0) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      errrorcheck = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formData.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      errrorcheck = true;
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }
    if (formData.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      errrorcheck = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formData.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile no is required" }));
      errrorcheck = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formData.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept Terms and Conditions",
      }));
      checkbox.current.style.paddingBottom = 0;
      errrorcheck = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
      checkbox.current.style.paddingBottom = "1rem";
    }

    if (!errrorcheck) {
      localStorage.setItem("UserInfo", JSON.stringify(formData));
      navigate("/movies");
    }
  };

  return (
    <main className="registerform-container">
      <section className="signupbgimage">
        <p className="reg-para-1">Discover new things on Superapp</p>
      </section>

      {/* form */}
      <section className="form-container">
        <div className="form-toppart">
          <h1 className="form-header">Super app</h1>
          <p className="form-para">Create your new account</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="inputbox"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        {errors.name ? <p className="errors">{errors.name}</p> : <></>}
        <input
          type="text"
          placeholder="UserName"
          className="inputbox"
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
        {errors.username ? <p className="errors">{errors.username}</p> : <></>}
        <input
          type="email"
          placeholder="Email"
          className="inputbox"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email ? <p className="errors">{errors.email}</p> : <></>}
        <input
          type="text"
          placeholder="Mobile"
          className="inputbox"
          value={formData.mobile}
          onChange={handleChange}
          name="mobile"
        />
        {errors.mobile ? <p className="errors">{errors.mobile}</p> : <></>}
        <div className="checkbox-container" ref={checkbox}>
          <input
            type="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            name="checkbox"
          />
          <label htmlFor="checkbox" className="checkbox-label">
            Share my registration data with Superapp
          </label>
        </div>
        {errors.checkbox ? <p className="errors">{errors.checkbox}</p> : <></>}
        <input
          type="button"
          className="register-button"
          value="SIGN UP"
          onClick={handleSubmit}
        />
        <p className="form-footer">
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="text-green">Terms and Conditions of Use</span>
        </p>
        <p className="form-footer">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className="text-green">Privacy Policy</span>
        </p>
      </section>
    </main>
  );
};

export default RegisterForm;
