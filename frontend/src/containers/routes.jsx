import React from 'react'
import { Switch, Route } from 'react-router'
import Inicio from './inicio'
import Atividades from '../components/utils/atividades/atividades'
import AtividadeForm from '../components/utils/atividades/novaAtividade'
import ProjetoForm from '../components/utils/projetos/novoProjeto'
import Projetos from '../components/utils/projetos/projetos'
import Historico from '../components/utils/atividades/historico'
import ProjetosPendentes from '../components/utils/projetos/projetosPendentes'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/atividades-pendentes" component={Atividades} />
            <Route path="/criar-atividade" component={AtividadeForm} />
            <Route path="/criar-projeto" component={ProjetoForm} />
            <Route path="/busca-projetos" component={Projetos} />
            <Route path="/projeto-pendente" component={ProjetosPendentes} />
            <Route path="/historico-atividades" component={Historico} />
        </Switch>
    )
}

export default Router;
