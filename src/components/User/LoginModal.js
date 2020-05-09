import React, { useState } from "react";
import Popup from "reactjs-popup";
import { loginAction } from "actions/users.actions";
import { connect } from "react-redux";
import styled from "styled-components";

const LoginError = styled.div`
  color: red;
`;

const LoginModal = ({ login, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Popup modal trigger={<button>Log In</button>} lockScroll>
      {(close) => (
        <form
          onSubmit={(e) => {
            login({ email, password });
            e.preventDefault();
          }}
        >
          {user.invalidLogin && (
            <LoginError>Email or password is incorrect.</LoginError>
          )}
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
          <input type="submit" value="Login" />
          <button onClick={close}>Close</button>
        </form>
      )}
    </Popup>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
