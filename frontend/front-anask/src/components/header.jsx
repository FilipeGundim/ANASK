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
            badgeA: [],
            badgeP: [],
            open: false
        }
        this.getBadgeA();
    }

    getBadgeA() {
        let url = `http://localhost:3001/atividades/${this.props.user_id}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                badgeA: data.recordsets[0]
            })
        })
    }

    getBadgeP() {
        let url = `http://localhost:3001/atividades/${this.props.user_id}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                badgeP: data.recordsets[0]
            })
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
                        <Nav.Item><Link to='/'>Inicio</Link></Nav.Item>
                        <NavDropdown title="Atividades" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/atividades-pendentes">Pendentes</Link><Badge variant="primary">{this.state.badgeA.length}</Badge></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/historico-atividades">Histórico</Link></NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item><Link to="/criar-atividade">Criar Atividade</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Projetos" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/projetos-pendentes">Pendentes</Link><Badge variant="primary">{this.state.badgeP.length}</Badge></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/historico-projetos">Histórico</Link></NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item><Link to="/criar-projeto">Criar Projeto</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <ButtonGroup aria-label="Basic example" className="mr-2">
                        <Button variant="secondary">Log-in</Button>
                        <Button variant="secondary" onClick={() => { this.cadastroOpen() }}>Cadastrar</Button>
                    </ButtonGroup>
                    <Form inline>
                        <Button variant="outline-success"><Link to="/busca-projetos">Projetos no ANASK</Link></Button>
                    </Form>
                </Navbar.Collapse>
                <CadastroModel show={this.state.open} close={() => { this.cadastroClose() }} />
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id
})

export default connect(mapStateToProps)(Header);