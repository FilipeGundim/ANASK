import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'

const CadastroModel = (props) => {

    let show = props.show;
    let close = props.close;

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sexo, setSexo] = useState('');
    const [datanasc, setDatanasc] = useState('')

    function criaUser() {
        let url = "http://localhost:3001/criar-user"
        let user = {
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

    return (
        <Modal show={show} onClose={close}>
            <Modal.Dialog >
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Criar User</Modal.Title>
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
                    <Button variant="primary" onClick={() => { criaUser() }}>Salvar alterações</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default CadastroModel;