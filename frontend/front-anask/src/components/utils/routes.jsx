import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from '../inicio'
import Atividades from './atividades/atividades'
import AtividadeForm from './atividades/novaAtividade'
import ProjetoForm from './projetos/novoProjeto'
import Projetos from './projetos/projetos'

const Router = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/atividades-pendentes" component={Atividades} />
                    <Route path="/criar-atividade" component={AtividadeForm} />
                    <Route path="/criar-projeto" component={ProjetoForm} />
                    <Route path="/busca-projetos" component={Projetos} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;
