import Modal from 'react-modal'

import CloseImg from'../../assets/close.svg'
import { Container } from './styled'

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({isOpen, onCloseNewTransactionModal}: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen} 
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                className="react-modal-close"
            >
                <img src={CloseImg} alt="close" onClick={onCloseNewTransactionModal}/>
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder='Titulo' />
                <input placeholder='Valor' type='number' />
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </Container>
            

        </Modal>
    )
}