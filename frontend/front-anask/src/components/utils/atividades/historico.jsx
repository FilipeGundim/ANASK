import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap'

class Historico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            atividades: []
        }
        this.getTodasAtividades();
    }

    async getTodasAtividades() {
        let url = `http://localhost:3001/todas-atividades/${this.props.user_id}`
        const res = await axios.get(url)
        const data = res.data
        this.setState({
            atividades: data.recordsets[0]
        })
    }

    render() {
        const { atividades } = this.state
        return (
            <div>
                <p className="h2 mr-auto ml-auto">Aqui estão todas as suas atividades: </p>
                <div className="d-flex flex-wrap p-2 justify-content-center">
                    {atividades.map((row, idx) => (
                        <Card bg="dark" text="white" style={{ width: '18rem', margin: '15px' }} key={idx}>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id
})

export default connect(mapStateToProps)(Historico);