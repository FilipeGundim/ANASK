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

const ProjetoForm = ({ user }) => {

    const [projeto, setProjeto] = useState(initalData);

    const postProjeto = () => {
        let url = "http://localhost:10001/new-projeto"
        axios.post(url, projeto).then(
            alert("Ativiade criada com succeso!")
        ).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        if (user) {
            setProjeto({...projeto, usuario: user })
        }
    }, [user])

    return (
        <div className="w-50 justify-content-center mr-auto ml-auto">
            <Form as="div">
                <Form.Group >
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo de se novo projeto!" onChange={(e) => { setProjeto({ ...projeto, titulo: e.target.value }) }} />
                    <Form.Text className="text-muted">
                        Evite dar titulos já utilizados.
                        </Form.Text>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Resuma o que deve ser feito em seu novo projeto!" onChange={(e) => { setProjeto({ ...projeto, descricao: e.target.value }) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Text className="text-muted">
                        Agora defina a data de inicio e data final de seu projeto!.
                        </Form.Text>
                </Form.Group>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control type="date" onChange={(e) => { setProjeto({ ...projeto, data_ini: e.target.value }) }} />
                        </Col>
                        <Col>
                            <Form.Control type="date" onChange={(e) => { setProjeto({ ...projeto, data_fim: e.target.value }) }} />
                        </Col>
                    </Form.Row>
                </Form>
                <Button className="mt-5" variant="primary" type="submit" onClick={() => { postProjeto() }}>
                    Criar!
                    </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.login.user,
})

export default connect(mapStateToProps)(ProjetoForm);