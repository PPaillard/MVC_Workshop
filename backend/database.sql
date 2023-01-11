-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Table `firemen`.`user`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `firemen`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `status` TINYINT(2) NOT NULL,
  `hashedPassword` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `firemen`.`caserne`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `firemen`.`caserne` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `capacity` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `firemen`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `firemen`.`vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `modele` VARCHAR(100) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `is_available` TINYINT NOT NULL,
  `caserne_id` INT NOT NULL,
  `in_maintenance` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`caserne_id`)
  REFERENCES `firemen`.`caserne` (`id`))
ENGINE = InnoDB;