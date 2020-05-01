import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import { getPrice, days, periods } from "utils/prices";
import styled from "styled-components";
import {
  submitBuyPriceAction,
  submitSellPriceAction,
  fetchBoardDetailsAction,
  fetchBoardPricesAction,
} from "actions/boardData.actions";
import { joinBoardAction } from "actions/boardManagement.actions";
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
  joinBoard,
  fetchPrices,
}) => {
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
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          {board.privateBoard ? (
            <div>
              This board is private, please enter the password to join
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) =>
              fetchPrices({ id: board.id, week: e.target.value })
            }
          >
            {board.weeks.map((week) => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
          </select>
        </div>
      )}
      {!!(userPrices && userPrices.length) && (
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
                      <td key={`${u.boardUserId}-${day}-${period}`}>
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
  joinBoard: joinBoardAction,
  fetchPrices: fetchBoardPricesAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
