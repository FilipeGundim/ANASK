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

    getProjetos(e) {
        let url = `http://localhost:3001/projetos/${e}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                projetos: data.recordset
            })
        })
    }

    inserirUserProjeto(row) {
        let url = `http://localhost:3001/usuario-projeto/${this.props.user_id}/${row.id}`
        axios.post(url).then(res => {
            console.log(res.status)
        })
    }

    render() {
        return (
            <div>
                <FormControl type="text" placeholder="Procurar projetos" className="mt-2 mb-2 w-50 mr-auto ml-auto justify-content-center" onChange={(e) => { this.getProjetos(e.target.value) }} />
                {
                    this.state.projetos.map((row, idx) => (
                        <Jumbotron fluid key={idx}>
                            <Container>
                                <h1>{row.titulo}</h1>
                                <h2>{row.descricao}</h2>
                                <p>
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