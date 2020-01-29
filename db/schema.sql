CREATE SCHEMA IF NOT EXISTS `portal`;

CREATE TABLE IF NOT EXISTS `portal`.`Wybory`
(
 `idwybory`              int NOT NULL ,
 `data`                  YEAR NOT NULL ,
 `frekwencja`            int NOT NULL ,
 `godzinaR`              time NOT NULL ,
 `godzinaZ`              time NOT NULL ,
 `ING`                   int NOT NULL ,


 CONSTRAINT `PK_Wybory` PRIMARY KEY (`idwybory` ASC)
);
-- ************************************** [Wyborca]

CREATE TABLE IF NOT EXISTS `portal`.`User`
(
 `idUser`     int NOT NULL ,
 `imie`          varchar(50) NOT NULL ,
 `nazwisko`      varchar(50) NOT NULL ,
 `pesel`         varchar(50) NOT NULL ,
 `dataUrodzenia` varchar(50) NOT NULL ,
 `nrDowodu`      varchar(50) NOT NULL ,
 `idUzytkownik`  int ,


 CONSTRAINT `PK_Wyborca` PRIMARY KEY (`idUser` ASC)
);

CREATE TABLE IF NOT EXISTS `portal`.`Kandydat`
(
 `idkandydat`              int NOT NULL ,
 `miejsce`                 varchar(50) NOT NULL ,
 `imie`                    varchar(50) NOT NULL ,
 `nazwisko`                varchar(50) NOT NULL ,
 `nrLegitymacjiPoselskiej` int NOT NULL ,
 `idLista`                 int,
 `idUgrupowanie`           int,
 `idKandydujeDo`           int,


 CONSTRAINT `PK_Kandydat` PRIMARY KEY (`idKandydat` ASC)
);


-- ************************************** [KandydujeW]

CREATE TABLE IF NOT EXISTS `portal`.`KandydujeW`
(
 `idwybory`   int NOT NULL ,
 `idkandydat` int NOT NULL ,


 CONSTRAINT `PK_KandydujeW` PRIMARY KEY (`idwybory` ASC, `idkandydat` ASC),
 CONSTRAINT `FK_26` FOREIGN KEY (`idwybory`)  REFERENCES Wybory(`idwybory`),
 CONSTRAINT `FK_29` FOREIGN KEY (`idkandydat`)  REFERENCES Kandydat(`idkandydat`)
);

insert IGNORE INTO `portal`.`Wybory` ( `idwybory`, `data`,`frekwencja`,`godzinaR`,`godzinaZ`,`ING`) VALUES
  (1, STR_TO_DATE('1-01-2012', '%d-%m-%Y') ,21, '20:00:00','08:00:00',71),
  (2, STR_TO_DATE('1-01-2012', '%d-%m-%Y') ,21, '20:00:00','08:00:00',71),
  (3, STR_TO_DATE('1-01-2012', '%d-%m-%Y') ,21, '20:00:00','08:00:00',71)
;

insert IGNORE INTO `portal`.`kandydat` (  `idkandydat`,`miejsce`,`imie`,`nazwisko`,`nrLegitymacjiPoselskiej`,`idLista`,`idUgrupowanie`,`idKandydujeDo`)VALUES           
(1,10, 'Mikolaj','Kowal',132313123,1,1,1),
(2,16, 'Maciek','Kowal',132313123,3,3,3),
(3,20, 'Maciek','Kowal',132313123,8,8,8)
;

insert IGNORE INTO `portal`.`KandydujeW`(`idwybory`,`idkandydat`)VALUES
(1,2),
(2,2),
(3,1),
(1,1)
;

