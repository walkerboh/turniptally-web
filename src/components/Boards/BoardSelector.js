import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBoardListAction } from "actions/boardData.actions";
import { withRouter } from "react-router-dom";
import CreateBoardModal from "./CreateBoardModal";

const BoardSelector = ({ user, boardList, fetchBoardList, board, history }) => {
  useEffect(() => {
    fetchBoardList();
  }, [user, fetchBoardList]);

  if (!boardList) {
    return null;
  }

  if (boardList.error) {
    return <div>{boardList.error.message}</div>;
  }

  if (!boardList.length) {
    return (
      <div style={{ marginBottom: "10px" }}>
        You need to join a board before you can enter data. Either create your
        own or get a link from someone with a board.
        <CreateBoardModal />
      </div>
    );
  }

  return (
    <div>
      <select
        onChange={(e) => history.push(`/${e.target.value}`)}
        value={board ? board.urlName : ""}
      >
        <option disabled value="">
          Please select a board...
        </option>
        {boardList.map((b) => (
          <option key={b.id} value={b.urlName}>
            {b.displayName}
          </option>
        ))}
      </select>
      <CreateBoardModal />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
  boardList: state.boards.boardList,
  board: state.boards.board,
});

const mapDispatchToProps = {
  fetchBoardList: fetchBoardListAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BoardSelector)
);
