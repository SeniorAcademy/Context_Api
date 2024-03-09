import React from "react";
import { useGlobalContext } from "./stores/GlobalContext";
import { Modal, Form, Button } from "react-bootstrap";

const UpdateCard = () => {
  const { show, closeModal, editedItem, setEditedItem,saveEdit } = useGlobalContext();

;
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={editedItem?.fullName || ""}
                onChange={(e) =>
                  setEditedItem({
                    ...editedItem,
                    fullName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={editedItem?.nickName || ""}
                onChange={(e) =>
                  setEditedItem({
                    ...editedItem,
                    nickName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="number"
                value={editedItem?.age || ""}
                onChange={(e) =>
                  setEditedItem({
                    ...editedItem,
                    age: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateCard;
