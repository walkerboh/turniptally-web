import React, { useState } from "react";
import Popup from "reactjs-popup";
import { registerAction } from "actions/users.actions";
import { connect } from "react-redux";

const RegisterModel = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Popup modal trigger={<button>Register</button>} lockScroll>
      {(close) => (
        <div>
          <div>
            Email
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            Password
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <input
            type="submit"
            value="Register"
            onClick={() => register({ email, password })}
          />
          <button onClick={close}>Close</button>
        </div>
      )}
    </Popup>
  );
};

const mapDispatchToProps = {
  register: registerAction,
};

export default connect(null, mapDispatchToProps)(RegisterModel);
