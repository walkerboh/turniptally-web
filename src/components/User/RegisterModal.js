import React, { useState } from "react";
import ModalPopup from "components/common/ModalPopup";
import { registerAction, fetchTimezonesAction } from "actions/users.actions";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "components/common/Button";

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;

  form > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    :not(:last-child) {
      margin: 8px;
    }
  }
`;

const Timezone = styled.div`
  > div {
    width: 100%;
    text-align: center;
  }
`;

const RegisterError = styled.div`
  text-align: center;
  div {
    width: 100%;
  }
  color: red;
`;

const RegisterModel = ({ timezones, user, register, fetchTimezones }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [timezoneId, setTimezone] = useState("");

  if (!timezones.length) {
    fetchTimezones();
  }

  return (
    <ModalPopup trigger={<Button>Register</Button>} title="Register">
      {close => {
        if (user.registerSuccess) {
          return (
            <div>
              <div>
                Your account has been created successfull. Please log in.
              </div>
              <Button onClick={close}>Close</Button>
            </div>
          );
        }

        return (
          <RegisterForm>
            <form
              onSubmit={e => {
                register({ email, password, timezoneId });
                e.preventDefault();
              }}
            >
              {user.registrationError ? (
                <RegisterError>
                  {Object.keys(user.registrationError.errors).map(k => (
                    <div>{user.registrationError.errors[k][0]}</div>
                  ))}
                </RegisterError>
              ) : null}
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
                <input
                  type="password"
                  onChange={e => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  placeholder="Confirm Password"
                />
              </div>
              <Timezone>
                <select
                  value={timezoneId}
                  onChange={e => setTimezone(e.target.value)}
                >
                  <option value="">Select a timezone...</option>
                  {timezones.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
                <div>
                  If you do not select a timezone, the site will treat you as if
                  you are in UTC.
                </div>
              </Timezone>
              <div>
                <Button
                  type="submit"
                  disabled={!(password.length && password === passwordConfirm)}
                >
                  Register
                </Button>
              </div>
            </form>
          </RegisterForm>
        );
      }}
    </ModalPopup>
  );
};

const mapStateToProps = state => ({
  user: state.users.user,
  timezones: state.users.timezones,
});

const mapDispatchToProps = {
  register: registerAction,
  fetchTimezones: fetchTimezonesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModel);
