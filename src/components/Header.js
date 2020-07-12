import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import LoginModal from "./user/LoginModal";
import RegisterModal from "./user/RegisterModal";
import { logoutAction } from "actions/users.actions";
import { Link } from "react-router-dom";
import Button from "components/common/Button";

const HeaderSection = styled.div`
  width: 100%;
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin-left: 8px;
  }
`;

export const Header = ({ user, logout }) => {
  return (
    <HeaderSection>
      <Link to="/">
        <img src="/fullLogo.png" height="75px" alt="logo"></img>
      </Link>
      <div>
        {user.email ? (
          <>
            <Link to="/">{user.email}</Link>
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <LoginModal />
            <RegisterModal />
          </>
        )}
      </div>
    </HeaderSection>
  );
};
const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
