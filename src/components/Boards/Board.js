import React from "react";
import { connect } from "react-redux";
import get from "lodash/get";

const Board = ({ board }) => {
  if (!board) {
    return null;
  }

  const userPrices = get(board, "prices.users");

  return (
    <div>
      <h1>{board.displayName}</h1>
      {board.weeks && (
        <div>
          Select a week:
          <select>
            {board.weeks.map((week) => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
          </select>
        </div>
      )}
      {userPrices && userPrices.length && (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Buy Price</th>
              <th>Mon AM</th>
              <th>Mon PM</th>
              <th>Tues AM</th>
              <th>Tues PM</th>
              <th>Wed AM</th>
              <th>Wed PM</th>
              <th>Thurs AM</th>
              <th>Thurs PM</th>
              <th>Fri AM</th>
              <th>Fri PM</th>
              <th>Sat AM</th>
              <th>Sat PM</th>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  board: state.boards.board,
});

export default connect(mapStateToProps)(Board);
