import React, { useEffect } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import { getPrice, days, periods } from "utils/prices";
import styled from "styled-components";
import {
  submitBuyPriceAction,
  submitSellPriceAction,
  fetchBoardDetailsAction,
} from "actions/boardData.actions";
import { withRouter } from "react-router-dom";

const BellInput = styled.input`
  width: 75px;
`;

const Board = ({
  board,
  submitBuyPrice,
  submitSellPrice,
  fetchBoard,
  match,
}) => {
  useEffect(() => {
    fetchBoard({ name: match.params.boardName });
  }, [fetchBoard, match.params.boardName]);

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
          <tbody>
            {userPrices.map((u) => {
              const submitOptions = {
                boardId: board.id,
                userId: u.boardUserId,
                date: board.prices.weekDate,
              };

              return (
                <tr key={u.boardUserId}>
                  <td>{u.name}</td>
                  <td>
                    <BellInput
                      type="text"
                      defaultValue={u.buyPrice}
                      onBlur={(e) =>
                        submitBuyPrice({
                          ...submitOptions,
                          price: e.target.value,
                        })
                      }
                    />
                  </td>
                  {days.map((day) => {
                    return periods.map((period) => (
                      <td>
                        <BellInput
                          type="text"
                          defaultValue={getPrice(u.prices, day, period)}
                          onBlur={(e) =>
                            submitSellPrice({
                              ...submitOptions,
                              price: e.target.value,
                              day,
                              period,
                            })
                          }
                        />
                      </td>
                    ));
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  board: state.boards.board,
});

const mapDispatchToProps = {
  fetchBoard: fetchBoardDetailsAction,
  submitBuyPrice: submitBuyPriceAction,
  submitSellPrice: submitSellPriceAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
