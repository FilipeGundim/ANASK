import React from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';

class Atividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            atividades: [],
            id_usuario: 1001
        }
        this.getAtividade();
    }

    getAtividade() {
        let url = `http://localhost:3001/atividades/${this.state.id_usuario}`
        axios.get(url).then(res => {
            let data = res.data
            console.log(data)
            this.setState({
                atividades: data.recordsets[0]
            })
        })
    }

    cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        justifyContent: 'center'
    }

    render() {
        return (
            <Container style={this.cardStyle}>
                {this.state.atividades.map(row => (
                    <Row>
                        <Card style={{ width: '18rem', margin: "15px" }}>
                            <Card.Body key={row.id}>
                                <Card.Title>{row.titulo}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Status (Pendente)</Card.Subtitle>
                                <Card.Text>
                                    {row.descricao}
                                </Card.Text>
                                <Button className="mt-1 mr-1" variant="primary" type="submit">
                                    Editar atividade
                                </Button>
                                <Button className="mt-1 ml-1" variant="danger">Finalizar</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default Atividades;