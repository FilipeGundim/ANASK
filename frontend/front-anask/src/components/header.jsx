import React from 'react'
import { Navbar, Nav, NavDropdown, Badge, Form, Button } from 'react-bootstrap'
import axios from 'axios'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id_usuario: 1001,
            badge:[]
        }
        this.getBadge();

    }

    getBadge() {
        let url = `http://localhost:3001/atividades/${this.state.id_usuario}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                badge: data.recordsets[0]
            })
        })
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">ANASK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Atividades" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/atividades-pendentes">Pendentes<Badge variant="primary">{this.state.badge.length}</Badge></NavDropdown.Item>
                            <NavDropdown.Item href="/historico-atividades">Histórico</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/criar-atividade">Criar Atividade</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Projetos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/projetos-pendentes">Pendentes<Badge variant="primary">9</Badge></NavDropdown.Item>
                            <NavDropdown.Item href="/historico-projetos">Histórico</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/criar-projeto">Criar Projeto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>                     
                        <Button variant="outline-success" href="/busca-projetos">Projetos no ANASK</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;