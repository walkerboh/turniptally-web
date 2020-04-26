import React, { useState } from "react";
import Popup from "reactjs-popup";
import { loginAction } from "actions/users.actions";
import { connect } from "react-redux";

const LoginModal = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Popup modal trigger={<button>Log In</button>} lockScroll>
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
            value="Login"
            onClick={() => login({ email, password })}
          />
          <button onClick={close}>Close</button>
        </div>
      )}
    </Popup>
  );
};

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(LoginModal);
