import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ModalPopup from "components/common/ModalPopup";
import { fetchUserDetailsAction } from "actions/users.actions";
import {
  leaveBoardAction,
  leaveBoardResetAction,
} from "actions/boardManagement.actions";
import Button from "components/common/Button";

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin-left: 8px;
  }
`;

const LeaveBoardModal = ({
  user,
  board,
  leaveBoard,
  leaveBoardAction,
  resetLeave,
  fetchUserDetails,
}) => {
  return (
    <ModalPopup
      trigger={<Button>Leave</Button>}
      title={`Leave Board - ${board.displayName}`}
      onClose={() => {
        resetLeave();
        fetchUserDetails();
      }}
    >
      {close => {
        if (leaveBoard) {
          if (leaveBoard.success) {
            return (
              <div>
                <div>You have left the board.</div>
                <ButtonRow>
                  <Button onClick={close}>Close</Button>
                </ButtonRow>
              </div>
            );
          } else if (leaveBoard.error) {
            return (
              <div>
                <div>
                  There was an error trying to leave the board. Please try again
                  later.
                </div>
                <ButtonRow>
                  <Button onClick={close}>Close</Button>
                </ButtonRow>
              </div>
            );
          }
        }

        return (
          <div>
            <div>
              Are you sure you want to leave this board? You can rejoin later.
            </div>
            <ButtonRow>
              <Button onClick={close}>Cancel</Button>
              <Button
                onClick={() =>
                  leaveBoardAction({ boardId: board.id, userId: user.id })
                }
              >
                Leave
              </Button>
            </ButtonRow>
          </div>
        );
      }}
    </ModalPopup>
  );
};

const mapStateToProps = state => ({
  user: state.users.user,
  leaveBoard: state.boards.leave,
});

const mapDispatchToProps = {
  leaveBoardAction: leaveBoardAction,
  resetLeave: leaveBoardResetAction,
  fetchUserDetails: fetchUserDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaveBoardModal);
