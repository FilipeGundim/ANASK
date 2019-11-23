import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl, Col } from 'react-bootstrap'

const AtividadeModal = (props) => {

    let show = props.show;
    let close = props.close;
    let atividade = props.atividade;

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data_ini, setData_ini] = useState(0)
    const [data_fim, setData_fim] = useState(0)

    return (
        <Modal show={show} onHide={show} onClose={close}>
            <Modal.Dialog >
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Editar Atividade: {atividade.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Titulo da atividade" className="mt-2 mb-2"
                        onChange={(e) => { setTitulo(e.target.value) }} />
                    <FormControl type="text" placeholder="Desrição da atividade" className="mt-2 mb-2"
                        onChange={(e) => { setDescricao(e.target.value) }} />
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { setData_ini(e.target.value) }} />
                            </Col>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { setData_fim(e.target.value) }} />
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Fechar</Button>
                    <Button variant="primary">Salvar alterações</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default AtividadeModal;