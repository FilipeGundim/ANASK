import React from 'react'
import { FormControl, Button, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import { connect } from 'react-redux';

class Projetos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: []
        }
    }

    async getProjetos(id) {
        let url = `http://localhost:3001/projetos/${id}`
        const res = await axios.get(url)
        const data = res.data
        this.setState({
            projetos: data.recordset
        })
    }

    inserirUserProjeto(row) {
        let url = `http://localhost:3001/usuario-projeto/${this.props.user_id}/${row.id}`
        axios.post(url)
    }

    render() {
        const { projetos } = this.state
        return (
            <div>
                <FormControl type="text" placeholder="Procurar projetos" className="mt-2 mb-2 w-50 mr-auto ml-auto justify-content-center" onChange={(e) => { this.getProjetos(e.target.value) }} />
                {
                    projetos.map((row, idx) => (
                        <Jumbotron fluid key={idx}>
                            <Container>
                                <p className="h1">{row.titulo}</p>
                                <p className="h2">{row.descricao}</p>
                                <p className="h3">
                                    começo: {row.data_ini.replace("T00:00:00.000Z", "")}
                                    <br />
                                    fim: {row.data_fim.replace("T00:00:00.000Z", "")}
                                </p>
                                <Button onClick={() => { this.inserirUserProjeto(row) }}>Ingressar</Button>
                            </Container>
                        </Jumbotron>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id
})

export default connect(mapStateToProps, null)(Projetos);