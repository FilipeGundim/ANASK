import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardView = ({ atividade, showModal, finaliza}) => {
    const {titulo, descricao} = atividade
    return (
        <Card bg="dark" text="white" style={{ width: '18rem', margin: '15px' }}>
            <Card.Body >
                <Card.Title>{titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Status (Pendente)</Card.Subtitle>
                <Card.Text>{descricao}</Card.Text>
                <Button className="mt-1 mr-1" variant="primary" type="submit" onClick={showModal}>
                    Editar atividade
                </Button>
                <Button className="mt-1 ml-1" variant="danger" onClick={finaliza}>Finalizar</Button>
            </Card.Body>
        </Card>
    )
}

export default CardView;