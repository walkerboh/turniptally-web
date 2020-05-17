import React from "react";
import styled from "styled-components";
import { getPrice, days, periods } from "utils/prices";
import { connect } from "react-redux";
import {
  submitBuyPriceAction,
  submitSellPriceAction,
} from "actions/users.actions";

const BellInput = styled.input`
  width: 75px;
`;

const PriceTable = ({
  userPrices,
  weekDate,
  singleUser,
  submitBuyPrice,
  submitSellPrice,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {singleUser ? null : <th>User</th>}
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
            userId: u.userId,
            date: weekDate,
          };

          return (
            <tr key={u.userId}>
              {singleUser ? null : <td>{u.name}</td>}
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
  );
};

const mapDispatchToProps = {
  submitBuyPrice: submitBuyPriceAction,
  submitSellPrice: submitSellPriceAction,
};

export default connect(null, mapDispatchToProps)(PriceTable);
