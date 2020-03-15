import React from 'react'
import { Col, Button, Form } from 'react-bootstrap';
import axios from 'axios'

class ProjetoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            data_ini: '',
            data_fim: '',
            responsavel: 1001
        }
    }

    postProjeto() {
        let url = "http://localhost:3001/cria-projeto"
        let body = this.state
        axios.post(url, body).then(
            alert("Ativiade criada com succeso!")
        ).catch((err) => {
            alert(err)
        })
    }

    render() {
        return (
            <div className="w-50 justify-content-center mr-auto ml-auto">
                <Form>
                    <Form.Group >
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Titulo de se novo projeto!" onChange={(e) => { this.setState({ titulo: e.target.value }) }} />
                        <Form.Text className="text-muted">
                            Evite dar titulos já utilizados.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Resuma o que deve ser feito em seu novo projeto!" onChange={(e) => { this.setState({ descricao: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Text className="text-muted">
                            Agora defina a data de inicio e data final de seu projeto!.
                        </Form.Text>
                    </Form.Group>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { this.setState({ data_ini: e.target.value }) }} />
                            </Col>
                            <Col>
                                <Form.Control type="date" onChange={(e) => { this.setState({ data_fim: e.target.value }) }} />
                            </Col>
                        </Form.Row>
                    </Form>
                    <Button className="mt-5" variant="primary" type="submit" onClick={() => { this.postProjeto() }}>
                        Criar!
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ProjetoForm;