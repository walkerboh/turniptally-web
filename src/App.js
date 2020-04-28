import React from "react";
import Header from "./components/Header";
import BoardSelector from "./components/Boards/BoardSelector";
import Board from "./components/Boards/Board";
import styled from "styled-components";
import "App.css";
import { withRouter, Switch, Route } from "react-router-dom";

const Site = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    width: 75%;
  }
`;

const App = () => {
  return (
    <Site>
      <div>
        <Header />
        <BoardSelector />
        <Switch>
          <Route path="/:boardName">
            <Board />
          </Route>
        </Switch>
      </div>
    </Site>
  );
};

export default withRouter(App);
