import { useState } from 'react'
import Modal from 'react-modal'

import CloseImg from'../../assets/close.svg'
import IncomeImg from'../../assets/income.svg'
import OutcomeImg from'../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styled'

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({isOpen, onCloseNewTransactionModal}: NewTransactionModalProps) {

    const [ type, setType ] = useState('depoist')

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
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="income" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}  
                        activeColor="red"  
                    >
                        <img src={OutcomeImg} alt="outcome" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </Container>
            

        </Modal>
    )
}