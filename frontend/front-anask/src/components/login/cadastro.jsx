import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'

const CadastroModel = ({ show, close }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sexo, setSexo] = useState('');
    const [datanasc, setDatanasc] = useState(Date)

    function criaUser() {
        const url = "http://localhost:3001/criar-user"
        const user = {
            nome,
            email,
            senha,
            sexo,
            datanasc
        }

        axios.post(url, user).then(res => {
            alert(res.status)
        })
    }

    useEffect(() => {
        return () => {
            setNome('');
            setEmail('');
            setSenha('');
            setDatanasc('');
            setSexo('');
        }
    }, [show, close])

    return (
        <Modal show={show} onClose={close} onHide={close}>
            <Modal.Dialog >
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Insira seus dados.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Seu Nome" className="mt-2 mb-2" onChange={(e) => { setNome(e.target.value) }} />
                    <FormControl type="text" placeholder="Seu E-mail" className="mt-2 mb-2" onChange={(e) => { setEmail(e.target.value) }} />
                    <Form>
                        <FormControl type="text" placeholder="Sexo (F ou M)" onChange={(e) => { setSexo(e.target.value) }} />
                        <FormControl type="date" onChange={(e) => { setDatanasc(e.target.value) }} />
                    </Form>
                </Modal.Body>
                <FormControl type="text" placeholder="senha" className="mt-2 mb-2" onChange={(e) => { setSenha(e.target.value) }} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Fechar</Button>
                    <Button variant="primary" onClick={() => { criaUser() }}>Cadastrar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default CadastroModel;