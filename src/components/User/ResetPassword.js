import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Button from "components/common/Button";
import styled from "styled-components";
import {
  fetchPasswordResetStatusAction,
  sendPasswordResetAction,
} from "actions";
import get from "lodash/get";

const CenterForm = styled.div`
  display: flex;
  justify-content: center;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      margin-bottom: 10px;
    }
  }
`;

const ResetPassword = ({
  location,
  verifyReset,
  verifyState,
  sendReset,
  result,
}) => {
  const params = queryString.parse(location.search);
  const key = params.key;

  useEffect(() => void verifyReset({ key }), [verifyReset, key]);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  if (!key || key === "" || (verifyState && verifyState.valid === false)) {
    return (
      <CenterForm>
        This URL is invalid. If you want to reset your password, please request
        a password reset email.
      </CenterForm>
    );
  }

  if (verifyState && verifyState.loading) {
    return (
      <CenterForm>Please wait, we are retrieving your reset record.</CenterForm>
    );
  }

  if (result && result.loading) {
    return (
      <CenterForm>Please wait, your password is being updated.</CenterForm>
    );
  }

  if (result && result.success) {
    return (
      <CenterForm>Your password has been updated, please log in.</CenterForm>
    );
  }

  if (result && !result.success) {
    return (
      <CenterForm>
        There was an error updating your password, please try again later.
      </CenterForm>
    );
  }

  return (
    <CenterForm>
      <form
        onSubmit={e => {
          sendReset({ key, password });
          e.preventDefault();
        }}
      >
        <div>Please enter your new password:</div>
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
        <div>
          <Button
            type="submit"
            disabled={!(password.length && password === passwordConfirm)}
          >
            Reset Password
          </Button>
        </div>
      </form>
    </CenterForm>
  );
};

const mapStateToProps = state => ({
  verifyState: get(state, "users.reset.verify"),
  result: get(state, "users.reset.submit"),
});

const mapDispatchToProps = {
  verifyReset: fetchPasswordResetStatusAction,
  sendReset: sendPasswordResetAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
);
