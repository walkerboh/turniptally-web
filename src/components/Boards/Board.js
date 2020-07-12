import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import {
  fetchBoardDetailsAction,
  fetchBoardPricesAction,
} from "actions/boardData.actions";
import { joinBoardAction } from "actions/boardManagement.actions";
import { withRouter } from "react-router-dom";
import PriceTable from "components/common/PriceTable";

const Board = ({ board, fetchBoard, match, joinBoard, fetchPrices }) => {
  useEffect(() => {
    fetchBoard({ name: match.params.boardName });
  }, [fetchBoard, match.params.boardName]);

  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  if (!board) {
    return null;
  }

  const userPrices = get(board, "prices.users");

  if (board.join) {
    return (
      <>
        <h1>{board.displayName}</h1>
        <div>
          You are not a member of this board. Would you like to join?
          <div>
            Please select your username for this board
            <input
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </div>
          {board.privateBoard ? (
            <div>
              This board is private, please enter the password to join
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          ) : null}
          <input
            type="submit"
            value="Join"
            onClick={() => joinBoard({ displayName, password, id: board.id })}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>{board.displayName}</h1>
      {board.weeks && (
        <div>
          Select a week:
          <select
            onChange={e => fetchPrices({ id: board.id, week: e.target.value })}
          >
            {board.weeks.map(week => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
          </select>
        </div>
      )}
      {!!(userPrices && userPrices.length) && (
        <PriceTable userPrices={userPrices} weekDate={board.prices.weekDate} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  board: state.boards.board,
});

const mapDispatchToProps = {
  fetchBoard: fetchBoardDetailsAction,
  joinBoard: joinBoardAction,
  fetchPrices: fetchBoardPricesAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
