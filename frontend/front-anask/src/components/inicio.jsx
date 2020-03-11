import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'

const Inicio = () => {

    return (
        <div className="text-center w-50 ml-auto mr-auto justify-content-center">
            <h2>Desenvolva atividades, projetos e muito mais.</h2>
            <h3>Organize sua rotina e construa uma nova maneira de se organizar!</h3>
            <ListGroup className="text-left" variant="flush">
                <p>Com o projeto ANASK você pode:</p>
                <ListGroup.Item variant="dark">Criar atividades pessoais</ListGroup.Item>
                <ListGroup.Item variant="dark">Criar projetos</ListGroup.Item>
                <ListGroup.Item variant="dark">Entrar em projetos que deseja</ListGroup.Item>
                <ListGroup.Item variant="dark">Gerenciar todas as suas tarefas pendentes</ListGroup.Item>
            </ListGroup>
            <p><h2>Começe a ultilizar o ANASK agora mesmo e aumente seu desempenho em gegerenciar atividades!</h2></p>
            <Image src={'./imagens/reat-image.jpg'} className="w-75 " rounded />
        </div>
    )
}

export default Inicio;