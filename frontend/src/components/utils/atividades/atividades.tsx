import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from './editarAtividade'
import CardView from '../card'
import { bindActionCreators } from 'redux';
import { setAtividades } from '../../../redux/reducers/atividades/atividadeAction'
import { connect } from 'react-redux';
import { IUser, IAtividade } from '../../../models/models';

interface IAtividadeProps {
    user?: IUser;
    setAtividades: (data: any) => void;
    todasAtividades?: IAtividade[];
}

const Atividades = ({ setAtividades, user, todasAtividades }: IAtividadeProps) => {

    const [atividade, setAtividade] = useState<IAtividade>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getAtividade = async () => {
            let url = `http://localhost:10001/get-atividades/${user.id}`
            let { data } = await axios.get(url)
            setAtividades(data as IAtividade);
        }
        if (user) {
            getAtividade();
        }
    }, [user, setAtividades])

    const finalizaAtividade = (row: IAtividade) => {
        let url = `http://localhost:10001/delete-atividade/${row.id}`
        axios.post(url).then(
            () => alert(`A atividade ${row.titulo} foi finalizada`)
        )
    }

    const handleOpen = (atividade: IAtividade) => {
        setOpen(true)
        setAtividade(atividade)
    };

    const handleClose = () => setOpen(false)

    return (
        <div className="w-75 mr-auto ml-auto justify-content-center text-center">
            <p className="h3"> Aqui estão todas suas atividades pendentes!</p>
            <div className="d-flex justify-content-center flex-wrap p-2">
                {todasAtividades ? todasAtividades.map((atividade, idx) => (
                    <CardView atividade={atividade} showModal={() => { handleOpen(atividade) }} finaliza={finalizaAtividade} key={idx} />
                )) : <div />}
            </div>
            <Modal show={open} close={handleClose} atividade={atividade} />
        </div>
    )

}

const mapStateToProps = state => ({
    user: state.login.user,
    todasAtividades: state.atividades.todasAtividades
})

function mapDipatchToProps(dispatch) {
    return bindActionCreators({ setAtividades }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(Atividades);