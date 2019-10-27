CREATE DATABASE anask_database
USE anask_database
GO

CREATE TABLE user_login(
id				INT					NOT NULL,
senha			VARCHAR(200)		NOT NULL,
PRIMARY KEY (id)
)

CREATE TABLE usuario(
id				INT					NOT NULL,
nome			VARCHAR(200)		NOT NULL,
datanasc		DATE				NOT NULL,
sexo			VARCHAR(1)			NOT NULL,
email			VARCHAR(200) UNIQUE NOT NULL,
user_senha		INT					NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_senha) REFERENCES user_login(id)
)

CREATE TABLE projeto(
id				INT					NOT NULL,
descricao		VARCHAR(200),
data_ini		DATE				NOT NULL,
data_fim		DATE				NOT NULL,
lider			INT					NOT NULL,
status			CHAR(1)				NOT NULL,
PRIMARY KEY (id)
)

CREATE TABLE usuario_projeto(
usuario_id		INT					NOT NULL,
projeto_id		INT					NOT NULL,
FOREIGN KEY (usuario_id) REFERENCES usuario(id),
FOREIGN KEY (projeto_id) REFERENCES projeto(id),
PRIMARY KEY (usuario_id, projeto_id)
)

CREATE TABLE usuario_atividade(
id				INT					NOT NULL,
descricao		VARCHAR(200),
data_ini		DATE				NOT NULL,
data_fim		DATE				NOT NULL,
status			CHAR(1)				NOT NULL,
id_usuario		INT					NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
)

CREATE TABLE projeto_atividade(
id				INT					NOT NULL,
descricao		VARCHAR(200),
data_ini		DATE				NOT NULL,
data_fim		DATE				NOT NULL,
status			CHAR(1)				NOT NULL,
id_projeto		INT					NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id_projeto) REFERENCES projeto(id)
)

CREATE TABLE times(
id				INT					NOT NULL,
nome			VARCHAR(200)		NOT NULL,
descricao		VARCHAR(200),
PRIMARY KEY (id)
)

CREATE TABLE time_usuario(
id_time			INT					NOT NULL,
id_usuario		INT					NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES usuario(id),
FOREIGN KEY (id_time)	 REFERENCES times(id),
PRIMARY KEY (id_time, id_usuario)
)