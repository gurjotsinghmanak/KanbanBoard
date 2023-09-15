import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "components/Modal";
import ModalHeader from "components/ModalHeader";
import ModalContent from "components/ModalContent";
import ModalFooter from "components/ModalFooter";
import Button from "components/Button";
import FieldLabel from "components/FieldLabel";
import TextField from "components/TextField";

import { FooterWrap, FieldWrap } from "./styles";

function AddEditBook({ open, data, handleSubmit, onClose }) {
  const [name, setName] = useState(data.name || "");
  const [platform, setPlatform] = useState(data.platform || "");
  const [user, setUser] = useState(data.user || "");
  const [priority, setPriority] = useState(data.priority || "");

  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader onClose={onClose}>Add book</ModalHeader>
      <ModalContent>
        <FieldWrap>
          <FieldLabel required>Name</FieldLabel>
          <TextField value={name} onChange={(event) => setName(event.target.value)} />
        </FieldWrap>
        <FieldWrap>
          <FieldLabel required>Platform</FieldLabel>
          <TextField value={platform} onChange={(event) => setPlatform(event.target.value)} />{" "}
          {/*  TODO: Above field to be replaced by dropdown */}
        </FieldWrap>
        <FieldWrap>
          <FieldLabel required>User</FieldLabel>
          <TextField value={user} onChange={(event) => setUser(event.target.value)} />
          {/*  TODO: Above field to be replaced by dropdown */}
        </FieldWrap>
        <FieldWrap>
          <FieldLabel required>Priority</FieldLabel>
          <TextField value={priority} onChange={(event) => setPriority(event.target.value)} />
          {/*  TODO: Above field to be replaced by dropdown */}
        </FieldWrap>
      </ModalContent>
      <ModalFooter>
        <FooterWrap>
          <Button color="red" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleSubmit({ id: data.id, name, platform, user, priority })}
          >
            Save
          </Button>
        </FooterWrap>
      </ModalFooter>
    </Modal>
  );
}

AddEditBook.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

AddEditBook.defaultProps = {
  open: false,
  data: {}
};

export default AddEditBook;
