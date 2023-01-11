-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `firemen`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `firemen`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `hashedpassword` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `firemen`.`caserne`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `firemen`.`caserne` (
  `id` INT NOT NULL,
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
  INDEX `fk_vehicle_caserne_idx` (`caserne_id` ASC) VISIBLE,
  CONSTRAINT `fk_vehicle_caserne`
    FOREIGN KEY (`caserne_id`)
    REFERENCES `firemen`.`caserne` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;