import React from 'react'
import {Col, Button, Form } from 'react-bootstrap';

class ProjetoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            data_ini : '',
            data_fim : '',
            responsavel : props.id
        }
    }

    formStyle = {
        justifyContent: 'center',
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    postAtividade(){
        
    } 

    render() {
        return (
            <div style={this.formStyle}>
                <Form>
                    <Form.Group >
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Titulo de se novo projeto!" onChange = {(e)=>{this.setState({titulo : e.target.value})}} />
                        <Form.Text className="text-muted">
                            Evite dar titulos ja ultilizados.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Resuma o que deve ser feito em seu novo projeto!" />
                    </Form.Group>
                    <Form.Group >
                    <Form.Text className="text-muted">
                            Agora defina a data de inicio e data final de sua atividade!.
                        </Form.Text>
                    </Form.Group>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control type = "date"  />
                            </Col>
                            <Col>
                                <Form.Control type = "date"  />
                            </Col>
                        </Form.Row>
                    </Form>
                    <Button className="mt-5" variant="primary" type="submit">
                        Criar!
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ProjetoForm;