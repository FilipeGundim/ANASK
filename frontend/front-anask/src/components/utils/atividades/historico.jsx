import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

class Historico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            atividades: [],
            id_usuario: 1001
        }
        this.getTodasAtividades();
    }

    getTodasAtividades() {
        let url = `http://localhost:3001/todas-atividades/${this.state.id_usuario}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                atividades: data.recordsets[0]
            })
        })
    }

    cardStyle = {
        width: "900px",
        marginLeft: "auto",
        marginRight: "auto"
    }

    render() {
        return (
            <div style={this.cardStyle}>
                {this.state.atividades.map(row => (
                    <Card bg="dark" text="white" style={{ width: '18rem', margin: '15px' }}>
                        <Card.Body key={row.id}>
                            <Card.Title>{row.titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Status (Finalizado)</Card.Subtitle>
                            <Card.Text>
                                {row.descricao}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

export default Historico;