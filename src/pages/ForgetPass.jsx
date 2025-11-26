import React from "react";

const ForgetPass = () => {
  return (
    <div>
      <form className="fieldset">
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />
      </form>
    </div>
  );
};

export default ForgetPass;
