create SCHEMA IF NOT EXISTS `portal`;

create TABLE IF NOT EXISTS `portal`.`Wybory`
(
 `idwybory`              int NOT NULL ,
 `data`                  date NOT NULL ,
 `frekwencja`            int NOT NULL ,
 `godzinaR`              date NOT NULL ,
 `godzinaZ`              date NOT NULL ,
 `ING`                   int NOT NULL ,


 CONSTRAINT `PK_Wybory` PRIMARY KEY (`idwybory` ASC)
);
-- ************************************** [Wyborca]

create TABLE IF NOT EXISTS `portal`.`User`
(
 `idUser`     int NOT NULL ,
 `imie`          varchar(50) NOT NULL ,
 `nazwisko`      varchar(50) NOT NULL ,
 `pesel`         varchar(50) NOT NULL ,
 `dataUrodzenia` varchar(50) NOT NULL ,
 `nrDowodu`      varchar(50) NOT NULL ,
 `idUzytkownik`  int NOT NULL ,


 CONSTRAINT `PK_Wyborca` PRIMARY KEY (`idUser` ASC)
);

create TABLE IF NOT EXISTS `portal`.`Kandydat`
(
 `idkandydat`              int NOT NULL ,
 `miejsce`                 int NOT NULL ,
 `imie`                    varchar(50) NOT NULL ,
 `nazwisko`                varchar(50) NOT NULL ,
 `nrLegitymacjiPoselskiej` int NOT NULL ,
 `idLista`                 int NOT NULL ,
 `idUgrupowanie`           int NOT NULL ,
 `idKandydujeDo`           int NOT NULL ,


 CONSTRAINT `PK_Kandydat` PRIMARY KEY (`idKandydat` ASC)
);


-- ************************************** [KandydujeW]

create TABLE IF NOT EXISTS `portal`.`KandydujeW`
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