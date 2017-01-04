CREATE TABLE `persondb`.`contactinfo` (
  `contactId` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  PRIMARY KEY (`contactId`),
  UNIQUE INDEX `contactId_UNIQUE` (`contactId` ASC));


INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('asda', 'asdas', 'sadas', 'adas@dasd', '12312');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('adas', 'adasd', 'adas', 'das@dsa', '12312');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`) VALUES ('asdas', 'adfa', 'dsaas', 'das@adsd');


CREATE TABLE `persondb`.`additionalinfo` (
  `infoId` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `contactId` INT NOT NULL,
  PRIMARY KEY (`infoId`),
  UNIQUE INDEX `infoId_UNIQUE` (`infoId` ASC),
  INDEX `contactId_idx` (`contactId` ASC),
  CONSTRAINT `contactId`
    FOREIGN KEY (`contactId`)
    REFERENCES `persondb`.`contactinfo` (`contactId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('male', 'us', '234', '1');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('male', 'asd', '12', '2');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('male', 'sad', '123', '3');
