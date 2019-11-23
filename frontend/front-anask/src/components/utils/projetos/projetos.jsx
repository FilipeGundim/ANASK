import React from 'react'
import { FormControl, Button, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'

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
            console.log(data.recordset)
            this.setState({
                projetos: data.recordset
            })
        })
    }

    inputStyle = {
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"
    }

    render() {
        return (
            <div>
                <FormControl type="text" placeholder="Procurar projetos" className="mt-2 mb-2" style={this.inputStyle} onChange={(e) => { this.getProjetos(e.target.value) }} />
                {
                    this.state.projetos.map(row => (
                        <Jumbotron fluid>
                            <Container>
                                <h1>{row.titulo}</h1>
                                <h2>{row.descricao}</h2>
                                <p>
                                    começo: {row.data_ini.replace("T00:00:00.000Z", "")}
                                    <br />
                                    fim: {row.data_fim.replace("T00:00:00.000Z", "")}
                                </p>
                                <Button>Ingressar</Button>
                            </Container>
                        </Jumbotron>
                    ))
                }
            </div>
        )
    }
}

export default Projetos;