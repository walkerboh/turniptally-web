import React from "react";
import Popup from "reactjs-popup";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const ModalPopup = ({
  trigger,
  title,
  children,
  onOpen = () => {},
  onClose = () => {},
  width = "50%",
}) => {
  return (
    <Popup
      modal
      lockScroll
      onOpen={onOpen}
      onClose={onClose}
      trigger={trigger}
      contentStyle={{ width }}
    >
      {close => (
        <>
          <PopupHeader>
            {title}
            <Close onClick={close} />
          </PopupHeader>
          {typeof children === "function" ? children(close) : children}
        </>
      )}
    </Popup>
  );
};

export default ModalPopup;
