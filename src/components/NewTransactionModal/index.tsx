import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { api } from '../../services/api'

import CloseImg from'../../assets/close.svg'
import IncomeImg from'../../assets/income.svg'
import OutcomeImg from'../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styled'

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({isOpen, onCloseNewTransactionModal}: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    const [ type, setType ] = useState('depoist')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title, 
            value,
            category,
            type
        }

        api.post('transactions', data)



    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder='Titulo' 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder='Valor' 
                    type='number' 
                    value={value} 
                    onChange={event => setValue(Number(event.target.value))} 
                />
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
                <input 
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}    
                />
                <button type="submit">Cadastrar</button>
            </Container>
            

        </Modal>
    )
}