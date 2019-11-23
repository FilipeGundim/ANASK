import React from 'react'
import {Image} from 'react-bootstrap'
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
            <ul style = {{textAlign:"left"}}>
            Com o projeto ANASK você pode:
                <br/>
                <br/>
                <li>Criar atividades pessoais</li>
                <li>Criar projetos</li>
                <li>Entrar em projetos que deseja</li>
                <li>Gerenciar todas as suas tarefas pendentes</li>
            </ul>
            <br />
            <br />
            <h2>Começe a ultilizar o ANASK agora mesmo e aumente seu desempenho em gegerenciar atividades!</h2>
            <Image src={image1} style={imageStyle} rounded/>
        </div>
    )
}

export default Inicio;