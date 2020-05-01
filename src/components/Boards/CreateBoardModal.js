import React, { useState } from "react";
import Popup from "reactjs-popup";
import {
  createBoardAction,
  createBoardResetAction,
} from "actions/boardManagement.actions";
import { connect } from "react-redux";

const CreateBoardModal = ({ create, createBoard, resetCreate }) => {
  const [displayName, setDisplayName] = useState("");
  const [urlName, setUrlName] = useState("");
  const [privateBoard, setPrivateBoard] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Popup
      modal
      trigger={<button>Create Board</button>}
      lockScroll
      onOpen={() => void resetCreate()}
      onClose={() => {
        setDisplayName("");
        setUrlName("");
        setPrivateBoard(false);
        setUserDisplayName("");
        setPassword("");
      }}
    >
      {(close) =>
        create && create.success ? (
          <div>
            Your board has been created successfully!
            <div>
              <button onClick={close}>Close</button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              Display Name
              <input
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </div>
            <div>
              URL Name
              <input
                type="text"
                onChange={(e) => setUrlName(e.target.value)}
                value={urlName}
              />
            </div>
            <div>
              Private
              <input
                type="checkbox"
                checked={privateBoard}
                onChange={() => setPrivateBoard(!privateBoard)}
              />
            </div>
            {privateBoard && (
              <div>
                Board password
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div>
                  This password will need to be provided by users who wish to
                  join this board.
                </div>
              </div>
            )}
            <div>
              Your Display Name
              <input
                type="text"
                onChange={(e) => setUserDisplayName(e.target.value)}
                value={userDisplayName}
              />
              <div>This will be your username on the board</div>
            </div>
            <input
              type="submit"
              value="Create"
              onClick={() =>
                createBoard({
                  displayName,
                  urlName,
                  privateBoard,
                  userDisplayName,
                  password,
                })
              }
            />
            <button onClick={close}>Close</button>
          </div>
        )
      }
    </Popup>
  );
};

const mapStateToProps = (state) => ({
  create: state.boards.create,
});

const mapDispatchToProps = {
  createBoard: createBoardAction,
  resetCreate: createBoardResetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal);
