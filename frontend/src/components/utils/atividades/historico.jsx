import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap'

const Historico = ({ user }) => {

    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        const getTodasAtividades = async () => {
            let url = `http://localhost:10001/get-historico-atividades/${user.id}`
            const { data } = await axios.get(url)
            console.log(data)
            setAtividades(data)
        }

        if (user) {
            getTodasAtividades()
        }

        return () => {
            setAtividades([])
        }
    }, [user])

    return (
        <div className="w-75 mr-auto ml-auto justify-content-center text-center">
            <p className="h2">Aqui estão todas as suas atividades: </p>
            <div className="d-flex flex-wrap p-2 justify-content-center">
                {atividades.map((row, idx) => (
                    <Card bg="dark" text="white" style={{ width: '18rem', margin: '15px' }} key={idx}>
                        <Card.Body key={row.id}>
                            <Card.Title>{row.titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Status (Finalizado)</Card.Subtitle>
                            <Card.Text>{row.descricao}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps)(Historico);