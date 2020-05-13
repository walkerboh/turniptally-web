import React, { useState } from "react";
import ModalPopup from "components/Common/ModalPopup";
import { registerAction, fetchTimezonesAction } from "actions/users.actions";
import { connect } from "react-redux";
import styled from "styled-components";

const RegisterError = styled.div`
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
    <ModalPopup trigger={<button>Register</button>} title="Register">
      {(close) => {
        if (user.registerSuccess) {
          return (
            <div>
              <div>
                Your account has been created successfull. Please log in.
              </div>
              <button onClick={close}>Close</button>
            </div>
          );
        }

        return (
          <form
            onSubmit={(e) => {
              register({ email, password, timezoneId });
              e.preventDefault();
            }}
          >
            {user.registrationError ? (
              <RegisterError>{user.registrationError.message}</RegisterError>
            ) : null}
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
            <div>
              Confirm Password
              <input
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
              />
            </div>
            <div>
              Timezone
              <select
                value={timezoneId}
                onChange={(e) => setTimezone(e.target.value)}
              >
                <option value="">Please select a timezone...</option>
                {timezones.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div>
                If you do not select a timezone, the site will treat you as if
                you are in UTC.
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              disabled={!(password.length && password === passwordConfirm)}
            />
            <button onClick={close}>Close</button>
          </form>
        );
      }}
    </ModalPopup>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
  timezones: state.users.timezones,
});

const mapDispatchToProps = {
  register: registerAction,
  fetchTimezones: fetchTimezonesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModel);
