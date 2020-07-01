import React, { useState, useEffect } from 'react'
import { FormControl, Button, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import { connect } from 'react-redux';
import { IUser, IProjeto } from '../../../models/models';

interface IProjetosProps {
    user: IUser;
}

const Projetos = ({ user }: IProjetosProps) => {

    const [projetos, setProjetos] = useState<IProjeto[]>()

    const getProjetos = async (filtro: string) => {
        let url = `http://localhost:10001/get-projetos/${filtro}`
        const res = await axios.get(url)
        console.log("projetos", res.data)
        setProjetos(res.data)
    }

    const inserirUserProjeto = (row: IProjeto) => {
        let url = `http://localhost:10001/ingressar-projeto/${user.id}/${row.id}`
        axios.post(url)
    }

    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])

    return (
        <div>
            <FormControl type="text" placeholder="Procurar projetos" className="mt-2 mb-2 w-50 mr-auto ml-auto justify-content-center" onChange={(e) => { getProjetos(e.target.value) }} />
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
                            <Button onClick={() => { inserirUserProjeto(row) }}>Ingressar</Button>
                        </Container>
                    </Jumbotron>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps, null)(Projetos);