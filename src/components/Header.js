import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import LoginModal from "./User/LoginModal";
import RegisterModal from "./User/RegisterModal";
import { logoutAction } from "actions/users.actions";
import { Link } from "react-router-dom";

const HeaderSection = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;

  button {
    margin-left: 8px;
  }
`;

export const Header = ({ user, logout }) => {
  return (
    <HeaderSection>
      <Link to="/">Turnip Tally</Link>
      <div>
        {user.email ? (
          <>
            <Link to="/">{user.email}</Link>
            <button type="button" onClick={logout}>
              Logout
            </button>
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
const mapStateToProps = (state) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
