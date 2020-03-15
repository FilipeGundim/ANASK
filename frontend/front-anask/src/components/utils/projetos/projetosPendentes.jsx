import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import { connect } from 'react-redux';

class Atividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: []
        }
        this.getProjetos();
    }

    async getProjetos() {
        const { user_id } = this.props
        let url = `http://localhost:3001/projeto/${user_id}`
        const res = await axios.get(url)
        const data = res.data
        this.setState({
            projetos: data.recordsets[0]
        })
    }

    render() {
        const { projetos } = this.state
        return (
            <div className="w-75 justify-content-center mr-auto ml-auto">
                <h2>Projetos!</h2>
                <br />
                <div className="d-flex flex-row p-2 justify-content-center">
                    {projetos.map((row, idx) => (
                        <Jumbotron fluid key={idx}>
                            <Container>
                                <p className="h1">{row.titulo}</p>
                                <p className="h2">{row.descricao}</p>
                                <p className="h3">
                                    começo: {row.data_ini.replace("T00:00:00.000Z", "")}
                                    <br />
                                    fim: {row.data_fim.replace("T00:00:00.000Z", "")}
                                </p>
                            </Container>
                        </Jumbotron>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id
})

export default connect(mapStateToProps)(Atividades);