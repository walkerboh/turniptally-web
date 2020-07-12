import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ModalPopup from "components/common/ModalPopup";
import {
  deleteBoardAction,
  deleteBoardResetAction,
} from "actions/boardManagement.actions";
import { fetchUserDetailsAction } from "actions/users.actions";
import Button from "components/common/Button";

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin-left: 8px;
  }
`;

const DeleteBoardModal = ({
  board,
  deleteBoard,
  deleteBoardAction,
  resetDelete,
  fetchUserDetails,
}) => {
  return (
    <ModalPopup
      trigger={<Button>Delete</Button>}
      title={`Delete Board - ${board.displayName}`}
      onClose={resetDelete}
    >
      {close => {
        if (deleteBoard) {
          if (deleteBoard.success) {
            return (
              <div>
                <div>The board was successfully deleted.</div>
                <ButtonRow>
                  <Button
                    onClick={() => {
                      fetchUserDetails();
                      close();
                    }}
                  >
                    Close
                  </Button>
                </ButtonRow>
              </div>
            );
          } else if (deleteBoard.error) {
            return (
              <div>
                <div>
                  There was an error trying to delete the board. Please try
                  again later.
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
              Are you sure you want to delete this board? This action is
              irreversible.
            </div>
            <ButtonRow>
              <Button onClick={close}>Cancel</Button>
              <Button
                onClick={() => deleteBoardAction({ id: board.id })}
                variant="danger"
              >
                Delete!
              </Button>
            </ButtonRow>
          </div>
        );
      }}
    </ModalPopup>
  );
};

const mapStateToProps = state => ({
  deleteBoard: state.boards.delete,
});

const mapDispatchToProps = {
  deleteBoardAction: deleteBoardAction,
  resetDelete: deleteBoardResetAction,
  fetchUserDetails: fetchUserDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
