import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl, Col } from 'react-bootstrap'
import axios from 'axios'
import { IAtividade } from '../../../models/models';

interface IAtividadeModal {
    show: boolean;
    close: () => void;
    atividade: IAtividade;
}

const AtividadeModal = ({ show, close, atividade }: IAtividadeModal) => {

    const [editedAtividade, setAtividade] = useState<IAtividade>()

    function editaAtividade() {
        let url = "http://localhost:3001/edita-atividade"
        let objeto = {
            ...editedAtividade,
            atividade: atividade.id
        }

        axios.post(url, objeto).then(res => {
            alert(res.status)
        })
    }

    useEffect(() => {
        return () => {
            setAtividade({} as IAtividade)
        }
    }, [atividade])

    return (
        <Modal show={show} onHide={close}>
            <Modal.Dialog >
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Editar Atividade: {atividade.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Titulo da atividade" className="mt-2 mb-2"
                        onChange={(e) => { setAtividade({ ...editedAtividade, titulo: e.target.value }) }} />
                    <FormControl type="text" placeholder="Desrição da atividade" className="mt-2 mb-2"
                        onChange={(e) => { setAtividade({ ...editedAtividade, descricao: e.target.value }) }} />
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { setAtividade({ ...editedAtividade, data_ini: e.target.value }) }} />
                            </Col>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { setAtividade({ ...editedAtividade, data_fim: e.target.value }) }} />
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Fechar</Button>
                    <Button variant="primary" onClick={() => { editaAtividade() }}>Salvar alterações</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default AtividadeModal;