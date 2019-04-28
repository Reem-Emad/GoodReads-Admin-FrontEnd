import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class PopupMsg extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.msg}</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button className='popupMsg_btn' variant="secondary" onClick={this.props.onHide}>
                            ok
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
}

export default PopupMsg;