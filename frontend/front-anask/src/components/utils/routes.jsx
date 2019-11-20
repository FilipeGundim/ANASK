import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from '../inicio'
import Atividades from './atividades/atividades'
import AtividadeForm from './atividades/novaAtividade'
import ProjetoForm from './projetos/novoProjeto'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/atividades-pendentes" component={Atividades} />
                    <Route path="/criar-atividade" component={AtividadeForm} />
                    <Route path="/criar-projeto" component={ProjetoForm} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;
