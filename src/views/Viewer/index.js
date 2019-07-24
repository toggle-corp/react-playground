import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from '#rsca/Button/PrimaryButton';
import modalize from '#rscg/Modalize';

import Modal from '#rscv/Modal';
import ModalHeader from '#rscv/Modal/Header';
import ModalBody from '#rscv/Modal/Body';
import ModalFooter from '#rscv/Modal/Footer';
import AlertModal from '#rscv/Modal/Alert';
import ConfirmModal from '#rscv/Modal/Confirm';

import DangerButton from '#rsca/Button/DangerButton';
import SuccessButton from '#rsca/Button/SuccessButton';

import styles from './styles.scss';

// const { onApply, closeModal } = props;

const PrimaryModalButton = modalize(PrimaryButton);

const GreatestModal = ({ closeModal }) => (
    <Modal
        onClose={closeModal}
        closeOnEscape
        closeOnOutsideClick
    >
        <ModalHeader
            title="Modal Header"
            rightComponent={(
                <DangerButton
                    onClick={closeModal}
                    transparent
                    iconName="close"
                />
            )}
        />
        <ModalBody>
            <div> The greatest thing The greatest thing The greatest thing The greatest thing </div>
        </ModalBody>
        <ModalFooter>
            <SuccessButton onClick={closeModal}>
                Okay
            </SuccessButton>
            <DangerButton onClick={closeModal}>
                Cancel
            </DangerButton>
        </ModalFooter>
    </Modal>
);

GreatestModal.propTypes = {
    closeModal: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const GreatestAlertModal = ({ closeModal }) => (
    <AlertModal
        onClose={closeModal}
        closeOnEscape
        closeOnOutsideClick
        show
    >
        <ModalBody>
            <div>
                <p>Display an alert message here!</p>
                <p>And here, if the message is multi-paragraphed.</p>
            </div>
        </ModalBody>
    </AlertModal>
);

const GreatestConfirmModal = ({ closeModal }) => (
    <ConfirmModal
        onClose={closeModal}
        closeOnEscape
        closeOnOutsideClick
        show
    >
        <ModalBody>
            <div>
                <p>Display an confirm message here!</p>
                <p>And here, if the message is multi-paragraphed.</p>
            </div>
        </ModalBody>
    </ConfirmModal>
);


GreatestConfirmModal.propTypes = {
    closeModal: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
GreatestAlertModal.propTypes = {
    closeModal: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className={styles.viewer}>
                <PrimaryModalButton
                    modal={
                        <GreatestModal />
                    }
                >
                    Modal
                </PrimaryModalButton>

                <PrimaryModalButton
                    modal={
                        <GreatestAlertModal />
                    }
                >
                    Alert Modal
                </PrimaryModalButton>

                <PrimaryModalButton
                    modal={
                        <GreatestConfirmModal />
                    }
                >
                    Confirm Modal
                </PrimaryModalButton>
            </div>
        );
    }
}

export default Viewer;
