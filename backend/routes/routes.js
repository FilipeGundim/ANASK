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
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/criar-user', (req, res) => {
    const { nome, datanasc, sexo, email, senha } = req.body
    request.query(`insert into usuario values ('${nome}', '${datanasc}', '${sexo}', '${email}', '${senha}');`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            console.log("usuario inserido")
            res.status(200)
        })
})

app.get('/atividades/:id', (req, res) => {
    const { id } = req.params
    request.query(`SELECT * FROM usuario_atividade WHERE id_usuario = ${id} and status = 1 ;`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.get('/todas-atividades/:id', (req, res) => {
    const { id } = req.params
    request.query(`SELECT * FROM usuario_atividade WHERE id_usuario = ${id} and status =0;`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.post('/cria-atividade', (req, res) => {
    const { titulo, descricao, data_ini, data_fim, responsavel } = req.body
    request.query(`INSERT INTO usuario_atividade VALUES ('${titulo}', '${descricao}', '${data_ini}', 
    '${data_fim}', 1, '${responsavel}')`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }

        })
    res.status(200);
})

app.post('edita-atividade', (req, res) => {
    const { titulo, descricao, data_ini, data_fim, atividade } = req.body
    request.query(`UPDATE usuario_atividade SET titulo = '${titulo}', descricao ='${descricao}', data_ini= '${data_ini}', 
     data_fim = '${data_fim}' WHERE id = ${atividade}`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }

        })
    res.status(200);
})

app.post('/finaliza-atividade/:atividade', (req, res) => {
    const { atividade } = req.params
    request.query(`UPDATE usuario_atividade SET status = 0  WHERE id = ${atividade}`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
        })
    res.status(200);
})

app.post('/cria-projeto', (req, res) => {
    const { titulo, descricao, data_ini, data_fim, responsavel } = req.body
    request.query(`INSERT INTO projeto VALUES 
    ('${titulo}', '${descricao}', '${data_ini}','${data_fim}','${responsavel}', 1, '${responsavel}')`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
        })
    res.status(200);
})

app.post('/usuario-projeto/:id/:projeto', (req, res) => {
    const { id, projeto } = req.params
    request.query(`INSERT INTO usuario_projeto VALUES(${id}, ${projeto}, ${id})`, (err, recordset) => {
        if (err) {
            console.log(err)
        }
    })
    res.status(200);
})

app.get('/projeto/:id', (req, res) => {
    const { id } = req.params
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
    const { filtro } = req.params
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