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
-- Table structure for table `listing_image_mapping`
--

DROP TABLE IF EXISTS `listing_image_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `listing_image_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `listingID` int(6) unsigned NOT NULL,
  `imageURL` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `imageURL_UNIQUE` (`imageURL`),
  KEY `listingImgMapID_idx` (`listingID`),
  CONSTRAINT `listingImgMapID` FOREIGN KEY (`listingID`) REFERENCES `listing` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listing_image_mapping`
--

LOCK TABLES `listing_image_mapping` WRITE;
/*!40000 ALTER TABLE `listing_image_mapping` DISABLE KEYS */;
INSERT INTO `listing_image_mapping` VALUES (1,1,'https://www.garrettrealty.com/media/45050.jpg'),(2,1,'https://www.garrettrealty.com/media/45052.jpg'),(4,1,'https://www.garrettrealty.com/media/45080.jpg'),(10,2,'https://media.timeout.com/images/104722227/1372/772/image.jpg'),(11,3,'https://files.tripstodiscover.com/files/2017/12/hilltop-retreat.jpg'),(12,3,'https://files.tripstodiscover.com/files/2017/12/modern-downtown-loft-by-6th.jpg'),(13,4,'https://assets3.thrillist.com/v1/image/1668577/size/tmg-article_default_mobile.jpg'),(103,60,'http://static.trip101.com/paragraph_media/pictures/001/670/094/large/c5d2adda-7a90-4efa-8a8f-69a84569aad7.jpg?1562222733'),(104,60,'https://secureservercdn.net/45.40.144.200/23h.d61.myftpupload.com/wp-content/uploads/2018/12/Historic-French-Quarter-Mansion.jpg?time=1563639229'),(105,60,'https://hospitalitynola.com/wp-content/uploads/2018/07/Bourbon_Burbon4.jpg');
/*!40000 ALTER TABLE `listing_image_mapping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-03 10:14:48
