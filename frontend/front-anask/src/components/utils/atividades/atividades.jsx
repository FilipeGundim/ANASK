import React from 'react'
import axios from 'axios';
import Modal from './editarAtividade'
import CardView from '../card'
import { bindActionCreators } from 'redux';
import { getAtividades } from '../../../redux/reducers/atividades/atividadeAction'
import { connect } from 'react-redux';

class Atividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            atividade: {},
            open: false
        }
    }

    componentDidMount() {
        this.props.getAtividades(this.props.user_id);
    }

    finalizaAtividade(row) {
        let url = `http://localhost:3001/finaliza-atividade/${row.id}`
        axios.post(url).then(alert(`A atividade ${row.titulo} foi finalizada`))
    }

    handleOpen = (atividade) => {
        this.setState({
            open: true,
            atividade
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const { todasAtividades } = this.props
        return (
            <div className="w-75 mr-auto ml-auto justify-content-center text-center">
                <p className="h3"> Aqui estão todas suas atividades pendentes!</p>
                <div className="d-flex justify-content-center flex-wrap p-2">
                    {todasAtividades.map((atividade, idx) => (
                       <CardView atividade={atividade} showModal={()=>{this.handleOpen(atividade)}} finalza={this.handleClose} key={idx}/>
                    ))}
                </div>
                <Modal show={this.state.open} close={() => this.handleClose()} atividade={this.state.atividade} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_id: state.login.user_id,
    todasAtividades: state.atividades.todasAtividades
})

function mapDipatchToProps(dispatch) {
    return bindActionCreators({ getAtividades }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(Atividades);