import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { loGin } from '../../redux/reducers/login/loginAction'
import { Button, FormControl } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Login = (props) => {

    const { open, close, logged } = props
    const [user, setUser] = useState({ email: '', senha: '' })

    const login = async () => {
        const { email, senha } = user
        const url = `http://localhost:10001//login/${email}/${senha}`
        const { data } = await axios.get(url)
        props.loGin(data)
        if (data.id) {
            logged()
        }
        close();
    }

    return (
        <Modal show={open} onClose={close} onHide={close} size="sm">
            <Modal.Dialog>
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Faça seu log-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="email" placeholder="Seu E-mail" className="mt-2 mb-2" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    <FormControl type="password" required placeholder="senha" className="mt-2 mb-2" onChange={(e) => { setUser({ ...user, senha: e.target.value }) }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Fechar</Button>
                    <Button variant="primary" onClick={() => { login() }}>Login</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

function mapDipatchToProps(dispatch) {
    return bindActionCreators({ loGin }, dispatch)
}

export default connect(null, mapDipatchToProps)(Login);