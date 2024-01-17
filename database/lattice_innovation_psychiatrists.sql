-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: lattice_innovation
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `psychiatrists`
--

DROP TABLE IF EXISTS `psychiatrists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psychiatrists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hospitalId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `hospitalId` (`hospitalId`),
  CONSTRAINT `psychiatrists_ibfk_1` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psychiatrists`
--

LOCK TABLES `psychiatrists` WRITE;
/*!40000 ALTER TABLE `psychiatrists` DISABLE KEYS */;
INSERT INTO `psychiatrists` VALUES (1,'Psychiatrist 1','psychiatrist2@example.com','1234567890','Password123',4),(2,'Psychiatrist 2','psychiatrist4@example.com','1234567890','Password123',4),(3,'Psychiatrist 3','psychiatrist6@example.com','1234567890','Password123',4),(4,'Psychiatrist 4','psychiatrist8@example.com','1234567890','Password123',4),(5,'Psychiatrist 5','psychiatrist10@example.com','1234567890','Password123',4),(6,'Psychiatrist 1','psychiatrist7@example.com','1234567890','Password123',1),(7,'Psychiatrist 2','psychiatrist9@example.com','1234567890','Password123',1),(8,'Psychiatrist 3','psychiatrist11@example.com','1234567890','Password123',1),(9,'Psychiatrist 4','psychiatrist13@example.com','1234567890','Password123',1),(10,'Psychiatrist 5','psychiatrist15@example.com','1234567890','Password123',1),(11,'Psychiatrist 1','psychiatrist12@example.com','1234567890','Password123',3),(12,'Psychiatrist 2','psychiatrist14@example.com','1234567890','Password123',3),(13,'Psychiatrist 3','psychiatrist16@example.com','1234567890','Password123',3),(14,'Psychiatrist 4','psychiatrist18@example.com','1234567890','Password123',3),(15,'Psychiatrist 5','psychiatrist20@example.com','1234567890','Password123',3),(16,'Psychiatrist 1','psychiatrist17@example.com','1234567890','Password123',2),(17,'Psychiatrist 2','psychiatrist19@example.com','1234567890','Password123',2),(18,'Psychiatrist 3','psychiatrist21@example.com','1234567890','Password123',2),(19,'Psychiatrist 4','psychiatrist23@example.com','1234567890','Password123',2),(20,'Psychiatrist 5','psychiatrist25@example.com','1234567890','Password123',2);
/*!40000 ALTER TABLE `psychiatrists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-17 14:02:35
