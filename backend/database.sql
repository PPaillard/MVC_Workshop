-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Table `firemen`.`user`
-- -----------------------------------------------------

CREATE TABLE
IF NOT EXISTS `user`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR
(100) NOT NULL,
  `lastname` VARCHAR
(100) NOT NULL,
  `email` VARCHAR
(100) NOT NULL,
  `status` TINYINT
(2) NOT NULL,
  `hashedPassword` VARCHAR
(200) NOT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `firemen`.`caserne`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `firemen`.`caserne`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR
(45) NULL,
  `capacity` VARCHAR
(45) NULL,
  `longitude` VARCHAR
(45) NULL,
  `latitude` VARCHAR
(45) NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `firemen`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `firemen`.`vehicle`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `modele` VARCHAR
(100) NOT NULL,
  `category` VARCHAR
(45) NOT NULL,
  `is_available` TINYINT NOT NULL,
  `caserne_id` INT NOT NULL,
  `in_maintenance` TINYINT NOT NULL,
  PRIMARY KEY
(`id`),
  FOREIGN KEY
(`caserne_id`)
  REFERENCES `firemen`.`caserne`
(`id`))
ENGINE = InnoDB;


INSERT INTO vehicle
VALUE
(1,
'Renault',
'VSAV',
0,
1,
0
),
(2, 'Renault', 'VSAV', 0, 2, 0),
(3, 'Man', 'VSAV', 0, 3, 0),
(4, 'Man', 'VSAV', 0, 4, 0),
(5, 'Renault', 'VSR', 0, 4, 0),
(6, 'Renault', 'VSR', 0, 4, 0),
(7, 'Mitsubishi', 'VSR', 0, 4, 0),
(8, 'Mitsubishi', 'VSR', 0, 4, 0),
(9, 'Mercedes', 'EPA', 0, 5, 0),
(10, 'Mercedes', 'EPA', 0, 2, 0),
(11, 'IVECO', 'EPA', 0, 1, 0),
(12, 'IVECO', 'EPA', 0, 3, 0),
(13, 'Mercedes', 'FPT', 0, 4, 0),
(14, 'Mercedes', 'FPT', 0, 4, 0),
(15, 'Mercedes', 'FPT', 0, 4, 0),
(16, 'IVECO', 'FPT', 0, 5, 0),
(17, 'IVECO', 'FPT', 0, 4, 0),
(18, 'IVECO', 'FPT', 0, 3, 0),
(19, 'Renault', 'CCF', 0, 2, 0),
(20, 'Renault', 'CCF', 0, 1, 0);



INSERT INTO caserne
VALUE
(1,
'Caserne Lyon-Confluence',
?,
?),
(2,
'Centre dintervention Lyon Corneille',
?,
?),
(3,
'Centre dintervention Lyon Rochat',
?,
?),
(4,
'Caserne Lyon - Gerland',
?,
?),
(5,
'Centre dintervention Lyon Croix-Rousse',
?,
?),
(6,
'Rhône Sapeurs Pompiers',
?,
?);

INSERT INTO user
VALUE

-- -----------------------------------------------------
-- Table `firemen`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `firemen`.`vehicle`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `modele` VARCHAR
(100) NOT NULL,
  `category` VARCHAR
(45) NOT NULL,
  `is_available` TINYINT NOT NULL,
  `caserne_id` INT NOT NULL,
  `in_maintenance` TINYINT NOT NULL,
  PRIMARY KEY
(`id`),
  FOREIGN KEY
(`caserne_id`)
  REFERENCES `firemen`.`caserne`
(`id`))
ENGINE = InnoDB;