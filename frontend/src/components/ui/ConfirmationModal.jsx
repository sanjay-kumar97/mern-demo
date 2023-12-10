import { Button, Card } from "@material-tailwind/react";
import React from "react";
import Modal from "./Modal";

const ConfirmationModal = (props) => {
  const { show, close, onConfirm, onReject, message } = props;

  return (
    <Modal show={show} handler={close}>
      <Card
        color="transparent"
        shadow={false}
        className="p-5 gap-5 items-center"
      >
        <h5>{message}</h5>
        <div className="flex gap-2">
          <Button variant="text" color="blue-gray" onClick={onReject}>
            close
          </Button>
          <Button variant="filled" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default ConfirmationModal;
