import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'

const initalUser = {
    nome: '',
    email: '',
    senha: '',
    sexo: '',
    datanasc: Date
}

const CadastroModel = ({ show, close }) => {
    const [user, setUser] = useState(initalUser);

    const criaUser = () => {
        const url = "http://localhost:10001/new-user"
        axios.post(url, user).then(res => {
            alert(res.status)
        })
        close();
    }

    useEffect(() => {
        return () => {
            setUser(initalUser);
        }
    }, [show, close])

    return (
        <Modal show={show} onClose={close} onHide={close} size="sm">
            <Modal.Dialog>
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Insira seus dados.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Seu Nome" className="mt-2 mb-2" required onChange={(e) => { setUser({ ...user, nome: e.target.value }) }} />
                    <FormControl type="email" placeholder="Seu E-mail" className="mt-2 mb-2" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    <Form>
                        <FormControl type="text" required placeholder="Sexo (F ou M)" onChange={(e) => { setUser({ ...user, sexo: e.target.value }) }} />
                        <FormControl type="date" required onChange={(e) => { setUser({ ...user, datanasc: e.target.value }) }} />
                    </Form>
                </Modal.Body>
                <FormControl type="password" required placeholder="senha" className="mt-2 mb-2" onChange={(e) => { setUser({ ...user, senha: e.target.value }) }} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Fechar</Button>
                    <Button variant="primary" onClick={() => { criaUser() }}>Cadastrar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default CadastroModel;