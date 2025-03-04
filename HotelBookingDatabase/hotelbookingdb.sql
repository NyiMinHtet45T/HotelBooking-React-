-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: hotelbookingdb
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `booking` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `booking_confirmation_code` varchar(255) DEFAULT NULL,
  `check_in_date` date DEFAULT NULL,
  `check_out_date` date DEFAULT NULL,
  `number_of_adults` int(11) NOT NULL,
  `number_of_children` int(11) NOT NULL,
  `total_number_of_adults` int(11) NOT NULL,
  `room_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq83pan5xy2a6rn0qsl9bckqai` (`room_id`),
  KEY `FK7udbel7q86k041591kj6lfmvw` (`user_id`),
  CONSTRAINT `FK7udbel7q86k041591kj6lfmvw` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKq83pan5xy2a6rn0qsl9bckqai` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (5,'YPHMRQ3QPN','2024-09-04','2024-10-05',3,3,6,18,5),(6,'FIMJC9TVZI','2024-09-03','2024-10-03',3,1,4,7,5),(29,'18JHFH7IRK','2024-09-23','2024-10-03',3,1,4,19,5),(30,'OAFDD41A4N','2024-10-09','2024-10-25',1,0,1,19,5),(32,'IBRJNYWK3V','2024-09-24','2024-10-10',4,1,5,15,5),(33,'5CM01374NF','2024-10-31','2024-11-21',3,1,4,13,5),(34,'FEME5NFYG7','2024-09-17','2024-09-18',1,0,1,6,7);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN'),(3,'ROLE_USER'),(4,'ROLE_USER'),(5,'ROLE_USER'),(6,'ROLE_ADMIN'),(7,'ROLE_USER'),(8,'ROLE_USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `population` int(11) DEFAULT NULL,
  `room_description` varchar(255) DEFAULT NULL,
  `room_main_url` varchar(255) DEFAULT NULL,
  `room_number` varchar(255) DEFAULT NULL,
  `room_price` double NOT NULL,
  `room_type` varchar(255) DEFAULT NULL,
  `room_photo_url_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK7kx8rbqatddr71prukpaus5jl` (`room_photo_url_id`),
  CONSTRAINT `FKdi07ydiun1xh7n3wn5mkf68oq` FOREIGN KEY (`room_photo_url_id`) REFERENCES `room_photo_url` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (5,2,' A basic room with essential amenities such as a bed, a bathroom, a desk, and a TV. Ideal for budget-conscious travelers.','bedroom-5664221_1920.jpg','101',300000,'Standard',5),(6,3,'A high-end room with premium furnishings, amenities, and services, often featuring unique decor and additional comforts.','room-interior-hotel-bedroom_23-2150683419.jpg','102',500000,'Luxury',6),(7,4,'A step up from the standard room, offering more space, better views, or additional amenities like a mini-fridge or a coffee maker.','elegant-hotel-room-with-big-bed_1203-1494.jpg','103',450000,'Superior',7),(8,2,'Designed for two people, usually featuring one double bed or two single beds.','small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg','104',320000,'Double',8),(9,2,' A basic room with essential amenities such as a bed, a bathroom, a desk, and a TV. Ideal for budget-conscious travelers.','pillow-bed_74190-2140.jpg','105',410000,'Standard',9),(10,3,'A step up from the standard room, offering more space, better views, or additional amenities like a mini-fridge or a coffee maker.','perfect-bed-with-black-cushion_1203-548.jpg','106',370000,'Superior',10),(11,2,'A high-end room with premium furnishings, amenities, and services, often featuring unique decor and additional comforts.','modern-stylish-hotel-rooms_1417-8488.jpg','107',600000,'Luxury',11),(12,5,'Designed to accommodate families, these rooms typically have multiple beds or a combination of beds and sofa beds, and sometimes include additional amenities like a kitchenette.','hotel-textile-comfort-luxury-interior_1203-4764.jpg','108',460000,'Family',12),(13,3,'A step up from the standard room, offering more space, better views, or additional amenities like a mini-fridge or a coffee maker.','white-pillows-with-orange-cushions_1203-742.jpg','201',480000,'Superior',13),(14,3,'A step up from the standard room, offering more space, better views, or additional amenities like a mini-fridge or a coffee maker.','pillow-bed-decoration-interior-bedroom_74190-11181.jpg','202',470000,'Superior',14),(15,2,'A room with a view of the sea, often featuring a balcony or large windows to enjoy the scenery.','white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12054.jpg','203',520000,'Sea View',15),(16,5,'Designed to accommodate families, these rooms typically have multiple beds or a combination of beds and sofa beds, and sometimes include additional amenities like a kitchenette.','close-up-bed-with-two-pillows_1203-1480.jpg','204',540000,'Family',16),(17,3,'A room with a view of the sea, often featuring a balcony or large windows to enjoy the scenery.','hotel-white-home-lamp-cushion_1203-5183.jpg','205',630000,'Sea View',17),(18,1,'Designed for solo travelers, typically featuring one single bed and basic amenities.','white-bed-with-white-pillows_1203-460_2.jpg','206',467000,'Single',18),(19,2,'Designed for two people, usually featuring one double bed or two single beds.','hotel-room-luxury-resort_53876-138105.jpg','208',480000,'Double',19);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_photo_url`
--

DROP TABLE IF EXISTS `room_photo_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_photo_url` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `room_photo_url1` varchar(255) DEFAULT NULL,
  `room_photo_url2` varchar(255) DEFAULT NULL,
  `room_photo_url3` varchar(255) DEFAULT NULL,
  `room_photo_url4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_photo_url`
--

LOCK TABLES `room_photo_url` WRITE;
/*!40000 ALTER TABLE `room_photo_url` DISABLE KEYS */;
INSERT INTO `room_photo_url` VALUES (5,'82690976.jpg','bedroom-5664221_1920.jpg','bed-1839184_1920.jpg','bedroom-5772286_1920.jpg'),(6,'142497239.jpg','room-interior-hotel-bedroom_23-2150683421.jpg','room-interior-hotel-bedroom_23-2150683419.jpg','room-interior-hotel-bedroom_23-2150683431_2.jpg'),(7,'503615932.jpg','bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg','elegant-hotel-room-with-big-bed_1203-1494.jpg','tidy-hotel-room-with-brown-curtains_1203-1493.jpg'),(8,'188597636.jpg','luxury-bedroom-design_305343-26374.jpg','small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg','small-hotel-room-interior-with-double-bed-bathroom_1262-12489.jpg'),(9,'432500273.jpg','bedroom-pillow_74190-294.jpg','pillow-bed_74190-2140.jpg','comfortable-pillow-decoration-bed-hotel-bedroom_1339-128470.jpg'),(10,'470350225.jpg','close-up-bed-with-black-cushion_1203-544.jpg','nice-lit-lamp-table_1203-546.jpg','perfect-bed-with-black-cushion_1203-548.jpg'),(11,'modern-stylish-hotel-rooms_1417-8489.jpg','modern-stylish-hotel-rooms_1417-8490.jpg','modern-stylish-hotel-rooms_1417-8491.jpg','modern-stylish-hotel-rooms_1417-8488.jpg'),(12,'170398874.jpg','decor-pillows-comfortable-textile-bedroom_1203-4538.jpg','hotel-textile-comfort-luxury-interior_1203-4764.jpg','interior-poster-mock-up-with-christmas-tree_163696-380.jpg'),(13,'corner-couch_1203-11.jpg','bed-with-armchair-near_1203-744.jpg','pillow-bed_74190-4383.jpg','white-pillows-with-orange-cushions_1203-742.jpg'),(14,'contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg','pillow-bed-decoration-interior-bedroom_74190-11180.jpg','pillow-bed-decoration-interior-bedroom_74190-11181.jpg','pillow-bed-decoration-interior-bedroom_74190-11182.jpg'),(15,'141006616.jpg','white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12050.jpg','white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12054.jpg','white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12060.jpg'),(16,'close-up-comfortable-bed-with-white-sheets_1203-1477.jpg','close-up-illuminated-lamp-phone_1203-1479.jpg','170263975.jpg','close-up-bed-with-two-pillows_1203-1480.jpg'),(17,'432520858.jpg','white-pillow-bed_74190-3608.jpg','hotel-white-home-lamp-cushion_1203-5183.jpg','white-pillow-bed_74190-3609.jpg'),(18,'170273856.jpg','pillow-bed_74190-4548.jpg','white-bed-with-white-pillows_1203-460.jpg','pillow-bed_74190-4548.jpg'),(19,'modern-empty-cozy-beautiful-interior-design-3d-illustration_259454-2135.jpg','pillow-bed_74190-2140.jpg','rolled-up-clean-towels-bed_53876-149702.jpg','hotel-room-luxury-resort_53876-138105.jpg');
/*!40000 ALTER TABLE `room_photo_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'MaMa@gmail.com','MaMa','$2a$10$fAxDhIGeGjGSQJpnyeWBBe4ok6Wt61Ox5n/JemzkwO7D7QvTx.gYG','09876326','MaMaThazin'),(2,'Nyi@gmail.com','NyiMin','$2a$10$fsr2fYc7mNADfYZt5r63oOL5WGoPxIsivjpNnbgMvR.cMCra025aq','098476563','NyiMinHtet'),(3,'MoeMoe@gmail.com','Moe','$2a$10$qABjzR3kgjRX10it/.71heQD4NbuNrtb0ZOGh7mV.XyU6cOgRhO4q','0931838487','MoeMoeKhaing'),(4,'HlaHla@gmail.com','HlaHla','$2a$10$eppeqkGaRs/leEPWeyXV9.s9vV3kw5EMUgibRhuuGHemYWInQz22m','09382638487','HlaHlaChit'),(5,'Shew@gmail.com','ShewYi','$2a$10$5TIHpFh7yCxQxbAJ.F8dkeMkYw9BUemW4C506qCZMxL8hKmOK3JWu','098327372237','ShewYiOo'),(6,'admin@gmail.com','admin','$2a$10$mXKdZ9rrfWoVjrrWf98LY.rgdkxmcKUPr2QiuP7oFSOex/b2FAeb.','098479832','admin'),(7,'KoNyi@gmail.com','KoNyi','$2a$10$wpLqLGsjbDpLfqzUKhL3SOOHNGB7Vm7p/l2hzC3YTXcmdGONapDbe','093837323','KoNyiLay'),(8,'user@gmail.com','UserLay','$2a$10$bxUHx2znLHm5TDchF6NDGeK/0uTAfxbOXtvPwOMK3Toboqtapm3Ki','0928328372','UserLay');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_role`
--

DROP TABLE IF EXISTS `users_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKeejqlb4gq1av9540jg66ju2pi` (`role_id`),
  CONSTRAINT `FKeejqlb4gq1av9540jg66ju2pi` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKqpe36jsen4rslwfx5i6dj2fy8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_role`
--

LOCK TABLES `users_role` WRITE;
/*!40000 ALTER TABLE `users_role` DISABLE KEYS */;
INSERT INTO `users_role` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8);
/*!40000 ALTER TABLE `users_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-29 20:07:40
