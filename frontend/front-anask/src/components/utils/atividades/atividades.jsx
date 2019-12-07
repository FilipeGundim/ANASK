import React from 'react'
import { Card, Button} from 'react-bootstrap'
import axios from 'axios';
import Modal from './editarAtividade'
import { connect } from 'react-redux';

class Atividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            atividades: [],
            selected: {},
            open: false
        }
        this.getAtividade();
    }

    getAtividade() {
        let url = `http://localhost:3001/atividades/${this.props.user_id}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                atividades: data.recordsets[0]
            })
        })
    }

    finalizaAtividade(row) {
        let url = `http://localhost:3001/finaliza-atividade/${row.id}`
        axios.post(url).then(alert(`A atividade ${row.titulo} foi finalizada`))
    }

    handleOpen = (selected) => {
        this.setState({
            open: true,
            selected
        });

    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    divStyle = {
        width: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"
    }

    cardStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px',
        justifyContent: "center",
        alignItems: "center"
    }

    render() {
        return (
            <div style={this.divStyle}>
                <h2>Aqui estão todas suas atividades pendentes!</h2>
                <br/>
                <div style={this.cardStyle}>
                {this.state.atividades.map((row, idx) => (
                    <Card bg="dark" text="white" style={{ width: '18rem', margin: '15px' }} key={idx}>
                        <Card.Body >
                            <Card.Title>{row.titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Status (Pendente)</Card.Subtitle>
                            <Card.Text>
                                {row.descricao}
                            </Card.Text>
                            <Button className="mt-1 mr-1" variant="primary" type="submit" onClick={() => { this.handleOpen(row) }}>
                                Editar atividade
                            </Button>
                            <Button className="mt-1 ml-1" variant="danger" onClick={() => this.finalizaAtividade(row)}>Finalizar</Button>
                        </Card.Body>
                    </Card>
                ))}
                </div>
                <Modal show={this.state.open} close={() => this.handleClose()} atividade={this.state.selected} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user_id: state.login.user_id
})

export default connect(mapStateToProps)(Atividades);