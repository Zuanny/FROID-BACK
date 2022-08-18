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
status_bateria text not null,
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

INSERT INTO froid.veiculos_modelo
(model, volume_total_vendas, conectado, atualizacao_software)
VALUES ('Ranger', 145760, 70000, 27550),
 ('Mustang', 1500, 500, 750),
 ('Territory', 4560, 4000, 3050),
 ('Bronco Sport', 7560, 4060, 20500);

INSERT INTO froid.veiculos
(vin, pressao_pneu, status_veiculo, status_bateria, nivel_combustivel, latitude, longitude)
VALUES('2FRHDUYS2Y63NHD22454', 23344, 'on', 'Ok', 76,-12.2322, -35.2314),
('2RFAASDY54E4HDU34874', 130000, 'off', 'Recharge', 19,-12.2322, -35.2314),
('2FRHDUYS2Y63NHD22455', 50000,  'on', 'Ok', 90,-12.2322, -35.2314),
('2RFAASDY54E4HDU34875', 10000, 'off', 'Ok', 25,-12.2322, -35.2314)