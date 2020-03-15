import React from 'react'
import { Navbar, Nav, NavDropdown, Badge, Form, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import CadastroModel from './login/cadastro'
import axios from 'axios'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badgeP: [],
            open: false
        }
    }

    async getBadgeP() {
        let url = `http://localhost:3001/atividades/${this.props.user_id}`
        const res = await axios.get(url)
        const data = res.data
        this.setState({
            badgeP: data.recordsets[0]
        })
    }

    cadastroOpen() {
        this.setState({
            open: true
        })
    }

    cadastroClose() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>ANASK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <NavDropdown title="Atividades" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/atividades-pendentes">Pendentes<Badge variant="primary">{this.props.todasAtividades.length}</Badge></NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historico-atividades">Histórico</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/criar-atividade">Criar Atividade</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Projetos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/projetos-pendentes">Pendentes<Badge variant="primary">{this.state.badgeP.length}</Badge></NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historico-projetos">Histórico</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/criar-projeto">Criar Projeto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <ButtonGroup aria-label="Basic example" className="mr-2">
                        <Button variant="secondary">Log-in</Button>
                        <Button variant="secondary" onClick={() => { this.cadastroOpen() }}>Cadastrar</Button>
                    </ButtonGroup>
                    <Form inline>
                        <Button variant="outline-success" as={Link} to="/busca-projetos">Projetos no ANASK</Button>
                    </Form>
                </Navbar.Collapse>
                <CadastroModel show={this.state.open} close={() => { this.cadastroClose() }} />
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id,
    todasAtividades: state.atividades.todasAtividades
})

export default connect(mapStateToProps, null)(Header);