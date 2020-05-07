import React from "react";
import Header from "./components/Header";
import BoardSelector from "./components/Boards/BoardSelector";
import Board from "./components/Boards/Board";
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

const App = ({ user }) => {
  return (
    <Site>
      <div>
        <Header />
        {user.email && (
          <>
            <BoardSelector />
            <Switch>
              <Route path="/board/:boardName">
                <Board />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Site>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default withRouter(connect(mapStateToProps)(App));
