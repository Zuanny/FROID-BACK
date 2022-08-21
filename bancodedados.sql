
create database froid;
use froid;

CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL, 
    join_date TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS VEHICLE (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    model TEXT DEFAULT ('') NOT NULL, 
    volumetotal INTEGER,
    connected INTEGER,
    softwareUpdates INTEGER
)

CREATE TABLE IF NOT EXISTS VEHICLEDATA (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    vin VARCHAR(20) NOT NULL UNIQUE, 
    odometer VARCHAR(30) DEFAULT ('') NOT NULL, 
    tirePressure VARCHAR(30) DEFAULT ('') NOT NULL,
    status VARCHAR(30) DEFAULT ('') NOT NULL,
    batteryStatus VARCHAR(30) DEFAULT ('') NOT NULL,
    fuelLevel VARCHAR(30) DEFAULT ('') NOT NULL,
    latitude VARCHAR(30) DEFAULT ('') NOT NULL,
    longitude VARCHAR(30) DEFAULT ('') NOT null,
    vehicle_id INTEGER,
    FOREIGN KEY (vehicle_id) REFERENCES VEHICLE(id)
)



INSERT INTO VEHICLE (
    model, 
    volumetotal,
    connected,
    softwareUpdates
) values ('Ranger', 145760, 70000, 27550), ('Mustang', 1500, 500, 750), ('Territory', 4560, 4000, 3050),
('Bronco Sport', 7560, 4060, 2050);


INSERT INTO VEHICLEDATA (
    vin, 
    odometer, 
    tirePressure,
    status,
    batteryStatus,
    fuelLevel,
    latitude,
    longitude,
    vehicle_id
) values ('2FRHDUYS2Y63NHD22454', '23344', '36,36,35,34', 'on', 'Ok', '76','-12,2322', '-35,2314', 1),
('2RFAASDY54E4HDU34874', '130000', '36,34,36,33', 'off', 'Recharge', '19','-12,2322', '-35,2314', 2),
('2FRHDUYS2Y63NHD22455', '50000', '36,36,35,34', 'on', 'Ok', '90','-12,2322', '-35,2314', 3),
('2RFAASDY54E4HDU34875', '10000', '36,34,36,33', 'off', 'Ok', '25','-12,2322', '-35,2314',4)