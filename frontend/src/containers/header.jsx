import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Badge, Form, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import CadastroModel from '../components/login/cadastro'
import LoginModel from '../components/login/login'

const Header = ({ user }) => {
    const [logged, setLogged] = useState(false);
    const [open, setOpen] = useState(false);
    const [loginWindow, setLoginWindow] = useState(false);
    const [badgeP, setBadgeP] = useState(0);

    useEffect(() => {
        if (user.atividades) {
            console.log(user)
            setBadgeP(user.atividades.length)
        }
    }, [user])

    const cadastroClose = () => {
        setOpen(false)
        setLoginWindow(false)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>ANASK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <NavDropdown title="Atividades" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/atividades-pendentes">Pendentes<Badge variant="primary">{badgeP}</Badge></NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/historico-atividades">Histórico</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/criar-atividade">Criar Atividade</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projetos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/projetos-pendentes">Pendentes<Badge variant="primary">{0}</Badge></NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/historico-projetos">Histórico</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/criar-projeto">Criar Projeto</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <ButtonGroup aria-label="Basic example" className="mr-2">
                    {logged ? <></> :
                        <>
                            <Button variant="secondary" onClick={() => { setLoginWindow(true) }}>Log-in</Button>
                            <Button variant="secondary" onClick={() => { setOpen(true) }}>Cadastrar</Button>
                        </>
                    }

                </ButtonGroup>
                <Form inline>
                    <Button variant="outline-success" as={Link} to="/busca-projetos">Projetos no ANASK</Button>
                </Form>
            </Navbar.Collapse>
            <LoginModel open={loginWindow} close={cadastroClose} logged={() => { setLogged(true) }} />
            <CadastroModel show={open} close={cadastroClose} />
        </Navbar>
    )

}

const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps, null)(Header);
