import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function SuccessToast(props) {
    const [modalShow, setModalShow] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Recieved
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-message">Payment Successfull</h4>
        <p>
          Thank you.Your order has been Recieved
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SuccessToast;