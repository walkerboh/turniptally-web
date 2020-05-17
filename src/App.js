import React, { useState } from "react";
import Header from "./components/Header";
import BoardSelector from "./components/Boards/BoardSelector";
import Board from "./components/Boards/Board";
import Profile from "./components/User/Profile";
import styled from "styled-components";
import "App.css";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

const Site = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    width: 75%;
  }
`;

const Banner = styled.div`
  position: absolute;
  width: 200px;
  padding: 15px;
  background-color: red;
  color: white;
  text-align: center;
  transform: rotate(-45deg) translate(-28%, -35%);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
`;

const BottomBanner = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: lightgray;

  > div {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
    padding: 20px 0;
  }
`;

const AcceptButton = styled.button`
  border: 1px solid gray;
  border-radius: 6px;
  padding: 10px 20px;
`;

const App = ({ user }) => {
  const [showCookie, setShowCookie] = useState(localStorage.cookie);

  return (
    <>
      <Banner>ALPHA</Banner>
      <Site>
        <div>
          <Header />
          {user.loggedIn ? (
            <>
              <Switch>
                <Route path="/board/:boardName">
                  <BoardSelector />
                  <Board />
                </Route>
                <Route path="/">
                  <Profile />
                </Route>
              </Switch>
            </>
          ) : (
            <div>
              You must log in to view or create a board. Please log in or
              register your account.
            </div>
          )}
        </div>
      </Site>
      {!showCookie && (
        <BottomBanner>
          <div>
            This website uses cookies to give you a smooth experience.
            <AcceptButton
              onClick={() => {
                localStorage.cookie = true;
                setShowCookie(true);
              }}
            >
              Accept
            </AcceptButton>
          </div>
        </BottomBanner>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default withRouter(connect(mapStateToProps)(App));
