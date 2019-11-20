import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">ANASK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <NavDropdown title="Atividades" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/atividades-pendentes">Pendentes</NavDropdown.Item>
                        <NavDropdown.Item href="/atividades-feitas">Feitas</NavDropdown.Item>
                        <NavDropdown.Item href="/historico-atividades">Histórico</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/criar-atividade">Criar Atividade</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projetos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projetos-pendentes">Pendentes</NavDropdown.Item>
                        <NavDropdown.Item href="/projetos-feitos">Feitos</NavDropdown.Item>
                        <NavDropdown.Item href="/historico-projetos">Histórico</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/criar-projeto">Criar Projeto</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Procurar projetos" className="mr-sm-2" />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;