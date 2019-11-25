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

app.post('/criar-user', (req, res) => {
    let body = req.body
    request.query(`insert into usuario values ('${body.nome}', '${body.datanasc}', '${body.sexo}', '${body.email}', '${body.senha}');`,
        (err, recordset) => {
            if (err) {
                console.log(err) 
            }
            console.log("usuario inserido")
            res.status(200)
        })
})

app.get('/atividades/:id', (req, res) => {
    let id = req.params.id
    request.query(`SELECT * FROM usuario_atividade WHERE id_usuario = ${id} and status = 1 ;`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.get('/todas-atividades/:id', (req, res) => {
    let id = req.params.id
    request.query(`SELECT * FROM usuario_atividade WHERE id_usuario = ${id} and status =0;`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.post('/cria-atividade', (req, res) => {
    let body = req.body
    request.query(`INSERT INTO usuario_atividade VALUES ('${body.titulo}', '${body.descricao}', '${body.data_ini}', 
    '${body.data_fim}', 1, '${body.responsavel}')`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }

        })
    res.status(200);
})

app.post('edita-atividade',(req, res)=>{

    let body = req.body

    request.query(`UPDATE usuario_atividade SET titulo = '${body.titulo}', descricao ='${body.descricao}', data_ini= '${body.data_ini}', 
     data_fim = '${body.data_fim}' WHERE id = ${body.atividade}`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }

        })
    res.status(200);
})

app.post('/finaliza-atividade/:atividade', (req, res) => {
    let atividade = req.params.atividade
    request.query(`UPDATE usuario_atividade SET status = 0  WHERE id = ${atividade}`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
        })
    res.status(200);
}) 

app.post('/cria-projeto', (req, res) => {
    let body = req.body
    request.query(`INSERT INTO projeto VALUES 
    ('${body.titulo}', '${body.descricao}', '${body.data_ini}', 
    '${body.data_fim}','${body.responsavel}', 1, '${body.responsavel}')`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
        })
    res.status(200);
})

app.post('/usuario-projeto/:id/:projeto', (req, res) => {
    let id = req.params.id
    let projeto = req.params.projeto
    request.query(`INSERT INTO usuario_projeto VALUES(${id}, ${projeto}, ${id})`, (err, recordset) => {
        if (err) {
            console.log(err)
        }
    })
    res.status(200);
})

app.get('/projeto/:id', (req, res) => {
    let id = req.params.id
    request.query(`SELECT * FROM projeto AS p
    INNER JOIN usuario_projeto AS up
    ON p.id = up.projeto_id
    WHERE up.usuario_id = ${id} and status = 1 ;`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})


app.get('/projetos/:filtro', (req, res) => {
    let filtro = req.params.filtro

    request.query(`SELECT * FROM projeto WHERE titulo LIKE '%${filtro}%'`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
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