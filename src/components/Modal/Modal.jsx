import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'
import {Overlay, ModalImg} from './Modal.styled' ;

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        activeImg: PropTypes.string.isRequired,
    }; 

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('click', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('click', this.handleKeyDown);
    };

    handleKeyDown = evt => {
        if(evt.code === 'Escape' || evt.target === 'DIV') {
        this.props.onClose();
        }
    };

    handleBackdrop = evt => {
        if(evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };

    render() {
        const {activeImg} = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdrop}>
                <ModalImg>
                <img src={activeImg} alt="" />
                </ModalImg>
            </Overlay>, 
            modalRoot,
        );
    }
}


