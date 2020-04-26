import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchBoardListAction,
  fetchBoardDetailsAction,
} from "actions/boards.actions";

const BoardSelector = ({ user, boardList, fetchBoardList, fetchBoard }) => {
  useEffect(() => {
    fetchBoardList();
  }, [user, fetchBoardList]);

  if (!boardList) {
    return null;
  }

  if (boardList.error) {
    return <div>{boardList.error.message}</div>;
  }

  return (
    <div>
      <select onChange={(e) => fetchBoard({ id: e.target.value })}>
        <option disabled selected>
          Please select a board...
        </option>
        {boardList.map((board) => (
          <option key={board.id} value={board.id}>
            {board.displayName}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
  boardList: state.boards.boardList,
});

const mapDispatchToProps = {
  fetchBoardList: fetchBoardListAction,
  fetchBoard: fetchBoardDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSelector);
