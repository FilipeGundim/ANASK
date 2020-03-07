import axios from 'axios'

export function getAtividades(user_id) {
    let atividades = []

    const setAtividades = (e) => {
        atividades = e
    }

    const getAtividade = () => {
        let url = `http://localhost:3001/atividades/${user_id}`
        axios.get(url).then(res => {
            let data = res.data
            setAtividades(data.recordsets[0])
        })
    }

    getAtividade();

    return {
        type: 'GET_ATIVIDADES',
        payload: atividades
    }
}