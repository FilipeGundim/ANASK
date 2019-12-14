import React from 'react'
import { Redirect, Switch, Route } from 'react-router'
import Inicio from '../inicio'
import Atividades from './atividades/atividades'
import AtividadeForm from './atividades/novaAtividade'
import ProjetoForm from './projetos/novoProjeto'
import Projetos from './projetos/projetos'
import Historico from './atividades/historico'
import ProjetosPendentes from './projetos/projetosPendentes'

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
            <Redirect fro='*' to='/' />
        </Switch>
    )
}

export default Router;
