import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import { connect } from 'react-redux';

const Projetos = ({ user }) => {

    const [projetos, setProjetos] = useState([])

    const getProjetos = async () => {
        let url = `http://localhost:10001/user-projetos/${user.id}`
        const { data } = await axios.get(url)
        setProjetos(data)
    }

    useEffect(() => {
        if (user) {
            getProjetos()
        }
    }, [user])

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

const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps)(Projetos);