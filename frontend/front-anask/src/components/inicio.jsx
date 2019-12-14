import React from 'react'
import {Image, ListGroup} from 'react-bootstrap'
import image1 from '../imagens/reat-image.jpg'


const Inicio = () => {

    let divStyle = {
        justifyContent: "center",
        textAlign: "center",
        width: "900px",
        marginLeft: "auto",
        marginRight: "auto"
    }

    let imageStyle = {
        width: "800px",
        height: "350px",
        boderRadius: "20px"
    }

    return (
        <div style={divStyle}>
            <h2>Desenvolva atividades, projetos e muito mais.</h2>
            <br/>
            <br/>
            <h3>Organize sua rotina e construa uma nova maneira de se organizar!</h3>
            <br/>
            <br/>          
            <ListGroup style = {{textAlign:"left"}} variant="flush">
            Com o projeto ANASK você pode:
                <br/>
                <br/>
                <ListGroup.Item variant="dark">Criar atividades pessoais</ListGroup.Item>
                <ListGroup.Item variant="dark">Criar projetos</ListGroup.Item>
                <ListGroup.Item variant="dark">Entrar em projetos que deseja</ListGroup.Item>
                <ListGroup.Item variant="dark">Gerenciar todas as suas tarefas pendentes</ListGroup.Item>
            </ListGroup>
            <br />
            <br />
            <h2>Começe a ultilizar o ANASK agora mesmo e aumente seu desempenho em gegerenciar atividades!</h2>
            <Image src={image1} style={imageStyle} rounded/>
        </div>
    )
}

export default Inicio;