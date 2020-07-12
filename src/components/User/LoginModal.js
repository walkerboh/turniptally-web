import React, { useState } from "react";
import {
  loginAction,
  sendPasswordResetEmailAction,
} from "actions/users.actions";
import { connect } from "react-redux";
import styled from "styled-components";
import ModalPopup from "components/common/ModalPopup";
import Button from "components/common/Button";
import ClickableText from "components/styled/ClickableText";

const LoginForm = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;

    :not(:last-child) {
      margin: 8px;
    }
  }
`;

const LoginError = styled.div`
  color: red;
`;

const LoginModal = ({ login, user, sendPasswordEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  return (
    <ModalPopup
      trigger={<Button>Log In</Button>}
      title={forgot ? "Forgot Password" : "Login"}
      width="500px"
      onClose={() => {
        setForgot(false);
        setForgotSent(false);
      }}
    >
      {() => (
        <LoginForm>
          {forgot ? (
            forgotSent ? (
              <div>
                You should recieve an email with a link to reset your password
                shortly.
              </div>
            ) : (
              <form
                onSubmit={e => {
                  sendPasswordEmail({ email });
                  setForgotSent(true);
                  e.preventDefault();
                }}
              >
                <div>
                  Enter your email below and we will send you a password reset
                  email.
                </div>
                <div>
                  <input
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <Button type="submit">Reset</Button>
                </div>
              </form>
            )
          ) : (
            <form
              onSubmit={e => {
                login({ email, password });
                e.preventDefault();
              }}
            >
              {user.invalidLogin && (
                <LoginError>Email or password is incorrect.</LoginError>
              )}
              <div>
                <input
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div>
                <ClickableText onClick={() => setForgot(true)}>
                  Forgot password?
                </ClickableText>
              </div>
              <div>
                <Button type="submit">Login</Button>
              </div>
            </form>
          )}
        </LoginForm>
      )}
    </ModalPopup>
  );
};

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  login: loginAction,
  sendPasswordEmail: sendPasswordResetEmailAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
