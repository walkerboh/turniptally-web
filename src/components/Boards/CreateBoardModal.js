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
                onChange={(e) => setPrivateBoard(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Create"
              onClick={() =>
                createBoard({ displayName, urlName, privateBoard })
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
