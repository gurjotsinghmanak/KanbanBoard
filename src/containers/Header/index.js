import React, { useState, lazy } from "react";
import { useDispatch } from "react-redux";

import { handleAddEdit } from "redux/actions/app";
import Button from "components/Button";
import Loadable from "components/Loadable";
import { Container, Wrapper, Logo } from "./styles";

const AddEditItem = Loadable(lazy(() => import("containers/AddEditItem")));

function Header() {
  const [isAddEditItemModalOpen, setIsAddEditItemModalOpen] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(handleAddEdit(data));
    setIsAddEditItemModalOpen(false);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>ToDos</Logo>
          <Button color="secondary" variant="contained" onClick={() => setIsAddEditItemModalOpen(true)}>
            Add
          </Button>
        </Wrapper>
      </Container>
      {isAddEditItemModalOpen && (
        <AddEditItem
          open={isAddEditItemModalOpen}
          handleSubmit={handleSubmit}
          onClose={() => setIsAddEditItemModalOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
