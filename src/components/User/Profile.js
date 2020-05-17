import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserWeekDetailsAction, fetchUserDetailsAction } from "actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PriceTable from "components/Common/PriceTable";
import CreateBoardModal from "components/Boards/CreateBoardModal";

const BoardsSection = styled.div`
  display: flex;

  > div {
    width: 50%;
    padding-right: 25px;
  }
`;

const Board = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Profile = ({ userDetails, week, fetchUserDetails, fetchWeekDetails }) => {
  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  if (!userDetails) {
    return null;
  }

  return (
    <div>
      <div>
        Select a week:
        <select onChange={(e) => fetchWeekDetails({ date: e.target.value })}>
          {userDetails.weeks.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
        {week && (
          <PriceTable
            userPrices={week.users}
            weekDate={week.weekDate}
            singleUser={true}
          />
        )}
      </div>
      <CreateBoardModal />
      <BoardsSection>
        <div>
          <h2>Owned Boards</h2>
          <div>
            {userDetails.ownedBoards.map((board) => {
              return (
                <Board key={board.id}>
                  <Link to={`/board/${board.urlName}`}>
                    {board.displayName}
                  </Link>
                  {/* <span>Members: {board.users.length}</span> */}
                  <button>Delete</button>
                </Board>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Member Boards</h2>
          <div>
            {userDetails.memberBoards.map((board) => {
              return (
                <Board key={board.id}>
                  <Link to={`/board/${board.urlName}`}>
                    {board.displayName}
                  </Link>
                  {/* <span>Members: {board.users.length}</span> */}
                  <button>Leave</button>
                </Board>
              );
            })}
          </div>
        </div>
      </BoardsSection>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.users.user.details,
  week: state.users.user.week,
});

const mapDispatchToProps = {
  fetchUserDetails: fetchUserDetailsAction,
  fetchWeekDetails: fetchUserWeekDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
