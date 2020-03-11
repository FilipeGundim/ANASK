import React from 'react'
import {  Container } from 'react-bootstrap'
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

    getProjetos() {
        let url = `http://localhost:3001/projeto/${this.props.user_id}`
        axios.get(url).then(res => {
            let data = res.data
            console.log(data)
            this.setState({
                projetos: data.recordsets[0]
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
            <div className="w-75 justify-content-center mr-auto ml-auto">
                <h2>Projetos!</h2>
                <br />
                <div style={this.cardStyle}>
                    {this.state.projetos.map((row, idx) => (
                        <Jumbotron fluid key={idx}>
                            <Container>
                                <h1>{row.titulo}</h1>
                                <h2>{row.descricao}</h2>
                                <p>
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