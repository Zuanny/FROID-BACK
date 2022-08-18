create database froid;

use froid;

create table veiculos_modelo (
id int NOT NULL auto_increment primary key,
model text not null,
volume_total_vendas int not null,
conectado int not null,
atualizacao_software int not null
);

create table veiculos (
id int NOT NULL auto_increment primary key,
vin text not null,
pressao_pneu int not null,
status_veiculo text not null,
status_bateria int not null,
nivel_combustivel int not null,
latitude float not null,
longitude float not null,
check (status_veiculo = 'on' or status_veiculo = 'off' )
);

create table usuarios (
id int NOT NULL auto_increment primary key,
nome varchar(50) not null,
email varchar(150) not null,
senha text not null,
nome_completo text not null,
data_cadastro timestamp default CURRENT_TIMESTAMP
);

