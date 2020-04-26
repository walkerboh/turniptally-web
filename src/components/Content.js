import React from "react";
import BoardSelector from "./Boards/BoardSelector";
import Board from "./Boards/Board";

const Content = () => {
  return (
    <div>
      <BoardSelector />
      <Board />
    </div>
  );
};

export default Content;
