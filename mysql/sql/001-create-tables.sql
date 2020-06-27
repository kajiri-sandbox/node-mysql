---- drop ----
DROP TABLE IF EXISTS `mydata`;

---- create ----
create table IF not exists `mydata`
(
 `id` INT(20) AUTO_INCREMENT,
 `name` VARCHAR(40) NOT NULL,
 `mail` VARCHAR(40) DEFAULT NULL,
 `age` INT(3) DEFAULT NULL,
 `created_at`       Datetime DEFAULT NULL,
 `updated_at`       Datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
 ) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;