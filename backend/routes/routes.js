const express = require('express');
const app = express();
const cors = require('./cors');
const sql = require('mssql');
const bodyParser = require('body-parser')

const config = {
    user: 'Filipe',
    password: 'sou123eu',
    server: 'localhost',
    database: 'anask_backend'
};

app.use(cors);
app.use(bodyParser.json())

app.post('/criar-user/:nome/:datanasc/:sexo/:email/:senha', (req, res) => {
    let nome = req.params.nome
    let datanasc = req.params.datanasc
    let sexo = req.params.sexo
    let email = req.params.email 
    let senha = req.params.senha
    request.query(`insert into usuario values ('${nome}', '${datanasc}', '${sexo}', '${email}', '${senha}');`,
     (err, recordset) => {  
        if (err) {
            console.log(err)
        }
     res.status(200)
    })
})

app.get('/atividades/:id', (req, res)=>{
    let id = req.params.id
    request.query(`SELECT * FROM usuario_atividade WHERE id_usuario = ${id} ;`,
     (err, recordset) => {  
        if (err) {
            console.log(err)
        }
     res.json(recordset) 
    })
})

app.post('/atividade', (req, res)=>{
    let body = req.body
    request.query(`INSERT INTO usuario_atividade VALUES 
    ('${body.titulo}', '${body.descricao}', '${body.data_ini}', 
    '${body.data_fim}', 1, ${body.responsavel})`,
    (err, recordset) => {  
        if (err) {
            console.log(err)
        }
     res.status(200);
    })
})

app.listen(3001, () => {
    sql.connect(config).then(() => {
        console.log("se pa foi")
    }).catch((err) => {
        console.log(err)
    });
    request = new sql.Request();
})