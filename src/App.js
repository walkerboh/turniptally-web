import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";
import "App.css";

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
        <Content />
      </div>
    </Site>
  );
};

export default App;
