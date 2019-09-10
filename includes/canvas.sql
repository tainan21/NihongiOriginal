CREATE DATABASE canvas;

use canvas;

create table aluno(
	aluno__ra int(4) PRIMARY KEY AUTO_INCREMENT,
	aluno__nome varchar(30) NOT NULL,
	aluno__email varchar(50),
	aluno__curso varcHar(50),
	aluno__login varchar(20),
	aluno__senha varchar(30),
	PRIMARY KEY (aluno__ra)
);


create table canvas(
	canvas__cod		 		int(4) PRIMARY KEY AUTO_INCREMENT,
	canvas__dor 			varchar(30) NOT NULL, 	
	canvas__hip 			varchar(30) NOT NULL,
	canvas__problematica	varchar(30) NOT NULL,
	canvas__beneficios		varchar(30) NOT NULL,
	canvas__ass    			varchar(30) NOT NULL,
	canvas__te    			varchar(30) NOT NULL,
	canvas__pd    			varchar(30) NOT NULL,
	canvas__most    		varchar(30) NOT NULL,
	canvas__og    			varchar(30) NOT NULL,
	canvas__oe 				varchar(30) NOT NULL,
	canvas__riscos			varchar(30) NOT NULL,
	canvas__custos			varchar(30) NOT NULL,
	canvas__cronograma		varchar(30) NOT NULL,
	PRIMARY KEY (canvas__cod)
	/*	CONSTRAINT aluno__canvas FOREIGN KEY (aluno__ra) REFERENCES Pessoa (aluno__ra) */
); 

create table canvas__objetivo(
	canvas__cod		 		int(4) PRIMARY KEY AUTO_INCREMENT,
	canvas__name 			varchar(30) NOT NULL,
	canvas__name 			varchar(30) NOT NULL,
);

create table canvas__objetivo(
	canvas__cod		 		int(4) PRIMARY KEY AUTO_INCREMENT,
	canvas__name 			varchar(30) NOT NULL,
	canvas__name 			varchar(30) NOT NULL,
);



create table postit(
	postit__cod				int(3) Primary Key AUTO_INCREMENT,
	postit__nome 			varchar(30) NOT NULL,
	postit__cor 			char(6) NOT NULL,
);

create table professor(
	professor__crm int(4) PRIMARY KEY AUTO_INCREMENT,
	professor__nome varchar(30) NOT NULL,
	professor__email varchar(50),
	professor__login varchar(20),
	professor__senha varchar(30),
	PRIMARY KEY (professor__crm)
);
INSERT INTO aluno(aluno__ra, aluno__nome, aluno__email, aluno__login, aluno__senha) VALUES (null, 12, "admin@gmail.com", "administrador", "admin", "admin");
INSERT INTO professor(professor__crm, professor__nome, professor__email, professor__login, professor__senha) VALUES (null, 123, "promaster@gmail.com", "promaster", "promaster", "promaster");
/* 
Estudar o DreamSheaper, pegar cadastro com o Felipe
/*




