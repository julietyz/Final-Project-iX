-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: fs_bnb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(256) DEFAULT NULL,
  `lastName` varchar(256) DEFAULT NULL,
  `cellPhone` varchar(256) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Brett','Farve','123456789','brett@appstrax.tech','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(2,'Samantha','Farve','123456789','sam@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(5,'Fred','Burg','563','fred@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(6,'Frank','George','122','frank@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(8,'Chad','Rex','123456789','chad@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(9,'Tex','Rex','123456789','tex@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(10,'Tex','Long','23','tex@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(11,'Harold','King','123','king@mail.com','$2a$10$j47g/1aczNWuQYLvd7S3regtFHXyEnQdzYZngydjM3JeuyeErkx1m','user',NULL),(14,'Manny','McMan','123','manny@mail.com','$2a$10$GjNfUA2PP6utvPPnj8fjXe/3kZEO7gswRxmJ8Bt6CjXRYTgka2B/W','user',NULL),(18,'Juliet','Yznaga','123','juliet@mail.com','$2a$10$vqkT3DC3vMLjN3nWcX8.ROURUS7UQhaV.LdwVrWZDpx6U.8irigdK','user',NULL),(19,'Bella','Booty','12344','bella@mail.com','$2a$10$9l3RYWwJQlNUbaVgJDQJYeuZ62m1FlblrTRiJnE4hzuecUY86D4ES','user',NULL),(20,'dummy','man','455','dummy@mail.com','$2a$10$D0XtLvyk4FckkJZTh54eveonV/taXIxWCPQlsn3ttdc1Tfo9r8edS','user',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-03 10:14:47
