import React, { useState } from 'react'
import { Col, Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { connect } from 'react-redux';
import { useEffect } from 'react';

const initalData = {
    titulo: '',
    descricao: '',
    data_ini: '',
    data_fim: '',
    status: 1,
    usuario: {}
}

const AtividadeForm = ({ user }) => {

    const [atividade, setAtividade] = useState(initalData);

    const postAtividade = () => {
        let url = "http://localhost:10001/new-atividade"
        console.log(atividade)
        axios.post(url, atividade).then(
            alert("Ativiade criada com succeso!")
        ).catch((e) => alert(e))
    }

    useEffect(() => {
        if (user) {
            setAtividade({ ...atividade, usuario: user })
        }
    }, [user])

    return (
        <div className="w-50 justify-content-center mr-auto ml-auto">
            <Form as="div">
                <Form.Group >
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo da sua nova atividade!" onChange={(e) => { setAtividade({ ...atividade, titulo: e.target.value }) }} />
                    <Form.Text className="text-muted">
                        Evite dar titulos ja ultilizados.
                    </Form.Text>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Resuma o que deve ser feito na sua nova atividade!" onChange={(e) => { setAtividade({ ...atividade, descricao: e.target.value }) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Text className="text-muted">
                        Agora defina a data de inicio e data final de sua atividade!.
                    </Form.Text>
                </Form.Group>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control type="date" onChange={(e) => { setAtividade({ ...atividade, data_ini: e.target.value }) }} />
                        </Col>
                        <Col>
                            <Form.Control type="date" onChange={(e) => { setAtividade({ ...atividade, data_fim: e.target.value }) }} />
                        </Col>
                    </Form.Row>
                </Form>
                <Button className="mt-5" variant="primary" type="submit" onClick={() => { postAtividade() }}>
                    Criar!
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps)(AtividadeForm);