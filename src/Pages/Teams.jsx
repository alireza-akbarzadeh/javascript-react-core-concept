import React from "react";
import Modal from "../trix/Portal/Modal";
import Memo from "../trix/Memo/Memo";
const Teams = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='App'>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>
      <Memo />
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <p>I'm a modal window, I use portal so I only exist when I'm open.</p>
        <p>
          Also tabbing is locked inside me go ahead and try tabbing to the
          button behind me.
        </p>
        <p style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </button>
        </p>
      </Modal>
    </div>
  );
};

export default Teams;
