-- MySQL dump 10.13  Distrib 8.0.31, for macos12.6 (x86_64)
--
CREATE SCHEMA forumDB;
USE forumDB
-- Host: localhost    Database: forumDB
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned NOT NULL,
  `question_id` bigint unsigned NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `points` int NOT NULL DEFAULT '0',
  `isAnswer` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `answers_user_id_foreign` (`user_id`),
  KEY `answers_question_id_foreign` (`question_id`),
  CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `answers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,'2023-01-25 08:39:42','2023-01-25 08:39:42',1,1,'this is an answer!',0,0),(3,'2023-02-04 12:49:53','2023-02-04 12:49:53',1,1,'you can find whatever you like',0,0),(4,'2023-02-06 12:52:19','2023-02-06 12:52:19',1,1,'you can choose whateves peripheral you **want**',0,0),(5,'2023-02-06 12:59:31','2023-02-06 12:59:31',1,1,'do what you think it\'s best',0,0),(6,'2023-02-06 12:59:39','2023-02-06 12:59:39',1,1,'do what you think it\'s best',0,0),(7,'2023-02-15 18:47:39','2023-02-15 18:47:39',13,10,'this is a really nice question!',0,0),(8,'2023-02-21 19:36:34','2023-02-21 19:36:34',5,18,'Answer for question #18 - Lorem ipsum dolor sit amet.',0,0),(9,'2023-02-21 19:36:34','2023-02-21 19:36:34',3,11,'Answer for question #11 - Lorem ipsum dolor sit amet.',0,0),(11,'2023-02-21 19:36:34','2023-02-21 19:36:34',9,1,'Answer for question #1 - Lorem ipsum dolor sit amet.',0,0),(12,'2023-02-21 19:36:34','2023-02-21 19:36:34',1,19,'Answer for question #19 - Lorem ipsum dolor sit amet.',0,0),(13,'2023-02-21 19:36:34','2023-02-21 19:36:34',13,13,'Answer for question #13 - Lorem ipsum dolor sit amet.',0,0),(14,'2023-02-21 19:36:34','2023-02-21 19:36:34',15,10,'Answer for question #10 - Lorem ipsum dolor sit amet.',0,0),(15,'2023-02-21 19:36:34','2023-02-21 19:36:34',13,17,'Answer for question #17 - Lorem ipsum dolor sit amet.',0,0),(17,'2023-02-21 19:36:34','2023-02-21 19:36:34',13,15,'Answer for question #15 - Lorem ipsum dolor sit amet.',0,0),(18,'2023-02-21 19:36:34','2023-02-21 19:36:34',15,12,'Answer for question #12 - Lorem ipsum dolor sit amet.',0,0),(23,'2023-02-21 19:36:39','2023-02-21 19:36:39',17,13,'Answer for question #13 - Lorem ipsum dolor sit amet.',0,0),(24,'2023-02-21 19:36:39','2023-02-21 19:36:39',8,10,'Answer for question #10 - Lorem ipsum dolor sit amet.',0,0),(25,'2023-02-21 19:36:39','2023-02-21 19:36:39',13,17,'Answer for question #17 - Lorem ipsum dolor sit amet.',0,0),(27,'2023-02-21 19:36:39','2023-02-21 19:36:39',10,19,'Answer for question #19 - Lorem ipsum dolor sit amet.',0,0),(28,'2023-02-21 19:36:39','2023-02-21 19:36:39',5,1,'Answer for question #1 - Lorem ipsum dolor sit amet.',0,0),(29,'2023-02-21 19:36:39','2023-02-21 19:36:39',2,16,'Answer for question #16 - Lorem ipsum dolor sit amet.',0,0),(30,'2023-02-21 19:36:39','2023-02-21 19:36:39',3,18,'Answer for question #18 - Lorem ipsum dolor sit amet.',0,0),(31,'2023-02-21 19:36:39','2023-02-21 19:36:39',2,12,'Answer for question #12 - Lorem ipsum dolor sit amet.',0,0),(32,'2023-02-21 19:36:39','2023-02-21 19:36:39',5,15,'Answer for question #15 - Lorem ipsum dolor sit amet.',0,0),(33,'2023-02-21 19:36:39','2023-02-21 19:36:39',17,11,'Answer for question #11 - Lorem ipsum dolor sit amet.',0,0),(34,'2023-02-21 19:36:39','2023-02-21 19:36:39',18,14,'Answer for question #14 - Lorem ipsum dolor sit amet.',0,0),(48,'2023-04-12 06:44:49','2023-04-12 06:46:30',4,11,'this is a contentfull answer i wrote',0,0);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'2023-01-25 08:37:27','2023-01-25 08:37:27','html'),(2,'2023-01-25 08:37:34','2023-01-25 08:37:34','php'),(3,'2023-01-25 08:37:39','2023-01-25 08:37:39','css'),(4,'2023-02-21 09:15:47','2023-02-21 09:15:47','eligendi');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(4,'2016_06_01_000001_create_oauth_auth_codes_table',1),(5,'2016_06_01_000002_create_oauth_access_tokens_table',1),(6,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(7,'2016_06_01_000004_create_oauth_clients_table',1),(8,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(9,'2019_08_19_000000_create_failed_jobs_table',1),(10,'2019_12_14_000001_create_personal_access_tokens_table',1),(11,'2023_01_23_153842_create_questions_table',1),(12,'2023_01_24_165634_create_categories_table',1),(13,'2023_01_24_170619_add_category_id_to_question',1),(14,'2023_01_25_081616_create_answers_table',1),(15,'2023_02_07_074736_add_profile_image_to_users_table',2),(16,'2023_02_15_173231_make_content_column_longer',3),(17,'2023_04_06_155903_update_answers_content_type',4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `points` int NOT NULL DEFAULT '0',
  `user_id` bigint unsigned NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_user_id_foreign` (`user_id`),
  KEY `questions_category_id_foreign` (`category_id`),
  CONSTRAINT `questions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `questions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'2023-01-25 08:38:23','2023-01-25 08:38:23','W Find Your peripheral','title 3434',0,1,3),(10,'2023-02-15 16:46:27','2023-02-15 16:46:27','This is a long question Examples','An h1 header\n============\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nUse 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it\'s all\nin chapters 12--14\"). Three dots ... will be converted to an ellipsis.\nUnicode is supported. ☺',0,13,1),(11,'2023-02-18 09:29:51','2023-02-18 09:29:51','this is a new question','new question by **professor Oak**',0,14,1),(12,NULL,NULL,'Domanda sulla programmazione #1','Qual è la soluzione migliore per organizzare un progetto di grandi dimensioni?',0,2,2),(13,NULL,NULL,'Domanda sulla programmazione #2','Qual è la soluzione migliore per debuggare il codice quando si verifica un errore?',0,3,3),(14,NULL,'2023-04-12 06:30:59','Domanda sulla programmazione #3','Qual è la soluzione migliore per gestire i dati in un database?',0,4,3),(15,NULL,'2023-03-22 08:52:47','Domandina Domandona','è la soluzione migliore per organizzare un progetto di grandi dimensioni?',0,5,1),(16,NULL,NULL,'Domanda sulla programmazione #5','Qual è la soluzione migliore per debuggare il codice quando si verifica un errore?',0,1,2),(17,NULL,NULL,'Domanda sulla programmazione #6','Qual è la soluzione migliore per gestire i dati in un database?',0,2,3),(18,NULL,NULL,'Domanda sulla programmazione #7','Qual è la soluzione migliore per organizzare un progetto di grandi dimensioni?',0,3,4),(19,NULL,'2023-04-12 13:53:52','Domanda sulla programmazione #1022','Qual è la soluzione migliore per debuggare il codice quando si verifica un',0,4,3),(45,'2023-04-12 06:55:04','2023-04-12 06:55:04','this is a new html question','this is the content of the new html question',0,4,1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `profile_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jon','jon@info.com',NULL,'$2y$10$xLQzFLF.QRbNrPk18HGhyufjhrCQxTud14rK0kifEHKyKdqLYgIj.',NULL,NULL,'At6KQEGMlAzoOds36xAretSk1n7IsDU7czRo6xysVVLS0Nmwy3damVdrh9UF','2023-01-25 08:29:21','2023-01-25 08:29:21','user.svg'),(2,'manny','manny@info.com',NULL,'$2y$10$ndtO6fEjctTppJOxa75H3ePwrexTERzwQ2rTwcnecF7F/3VcD9se2',NULL,NULL,NULL,'2023-02-11 10:02:18','2023-02-11 10:02:18','user.svg'),(3,'bob','bob@info.com',NULL,'$2y$10$Vm3xlTbDG5MZ57r8b/3pXeWNye8TJKXKnWtYX2t1pSRsQxORhPWBu',NULL,NULL,NULL,'2023-02-11 10:08:12','2023-02-11 10:08:12','user.svg'),(4,'jack','jack@info.com',NULL,'$2y$10$ly4t4IUboTSRYa3THCvycuvnYJhJ/HEsmKYj5sMo7wwXsKw.BQyo.',NULL,NULL,'ZsbvLvLmVAzRdwU1sXtAMJYwJeJFVFmLutg3oKaApWaqU9locClGIh8vAEAD','2023-02-11 10:16:45','2023-02-11 10:16:45','user.svg'),(5,'perry','perry@info.com',NULL,'$2y$10$kZbrhXTbpF4udA1LXhD3fetqaESZpU2SlCXoE84Tt90YjLc.GmpvO',NULL,NULL,'M89SjyHRmLBeMTi4YBkphfjJCzfpJ96nOdNrTxiUUtJG4f2O53xKfSnEC6vj','2023-02-11 10:17:48','2023-02-11 10:17:48','user.svg'),(6,'perry','perry@example.com',NULL,'$2y$10$9Yj8oIxzb6THxZgtHVklYuG0M1F07F3awlUbzm3xtnUXRvYMOQ/iy',NULL,NULL,NULL,'2023-02-11 10:21:05','2023-02-11 10:21:05','user.svg'),(7,'Max','max@info.com',NULL,'$2y$10$EV/abfsHOHGqyo4hBQSI0eoL5ZNc5C0ZBFolLGXnmc4zT1mNVEfay',NULL,NULL,NULL,'2023-02-14 08:21:43','2023-02-14 08:21:43','user.svg'),(8,'dylan','dylan@info.com',NULL,'$2y$10$j3UgQ2ujJjFw3KJI4m2sCeOcLRxrBITOOm9xAHPECZWkZ6ab8kvs6',NULL,NULL,NULL,'2023-02-14 08:39:04','2023-02-14 08:39:04','user.svg'),(9,'Fred','fred@info.com',NULL,'$2y$10$0b9ey8MW7gFg.NBkdE8EZeYsPN9n37IzprbC9LZzK76byemE6su3e',NULL,NULL,NULL,'2023-02-14 15:08:36','2023-02-14 15:09:30','user.svg'),(10,'Kody','kody@example.com',NULL,'$2y$10$ITfGCtqVgsQ0j/4ND/shqet8G0YQAf56qsneiFwqbaecWvQHKghTm',NULL,NULL,NULL,'2023-02-14 15:39:03','2023-02-14 15:39:27','user.svg'),(11,'foo','foo@info.com',NULL,'$2y$10$nCJ2XFsBE3qC1Ch0gaDx/.mIBM2LSOojOYw5nDbXGBd38rKAKmSCS',NULL,NULL,'eqMszgJaXJB0UpWplrMVWjszm8QnpDFAf5mpWAPwVWqmRiQ1zQp3CiB0VBJv','2023-02-15 08:21:26','2023-02-15 08:21:38','user.svg'),(12,'bar','bar@info.com',NULL,'$2y$10$e6T5dtVzY9LuKfEWqsJrS.swlvuEXm4akTFPhZMaiPjxQ2x/hOlUa',NULL,NULL,NULL,'2023-02-15 08:30:01','2023-02-15 08:30:17','user.svg'),(13,'baar','baar@info.com',NULL,'$2y$10$Q4qDZMO/34dN61hxe0spYObR5JIVDsc0dBApbNIyP48R9sQ3Hz.fG',NULL,NULL,'AilPOl111CVOnR3T8MoLG5NFB2U9PyLbkHM3pcQ995ClJ2fSavMjZoV4tAWm','2023-02-15 08:37:02','2023-02-15 08:37:25','user.svg'),(14,'Oak','oak@info.com',NULL,'$2y$10$dsdkKY6ufgki29LEEAujK.o0dBMKXs5wKt09hCyPAY32lTtPOYHhS',NULL,NULL,NULL,'2023-02-18 09:26:08','2023-02-18 09:26:44','user.svg'),(15,'Alice Will','xlubowitz@example.com','2023-02-21 09:01:35','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',NULL,NULL,'7aIJzrtbVM','2023-02-21 09:01:35','2023-02-21 09:01:35','user.svg'),(16,'Hassie Willms','akreiger@example.net','2023-02-21 09:11:48','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',NULL,NULL,'F6QqzA7X5h','2023-02-21 09:11:48','2023-02-21 09:11:48','user.svg'),(17,'Mr. Carlos Cassin Sr.','green.ethyl@example.org','2023-02-21 09:14:50','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',NULL,NULL,'XViMnEm9a0','2023-02-21 09:14:50','2023-02-21 09:14:50','user.svg'),(18,'Branson Lockman','neha.batz@example.net','2023-02-21 09:17:40','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',NULL,NULL,'DW8LAvYM1n','2023-02-21 09:17:40','2023-02-21 09:17:40','user.svg'),(19,'Mando_01','armando.pagano2001@gmail.com',NULL,'$2y$10$5AFks5w8BWi7wzAq8Qg2ZeQ3wIyDFtqblIachcbE3I271FUbY0wcy',NULL,NULL,NULL,'2023-03-10 11:34:22','2023-03-10 11:34:49','ffc4881579fc4694fa53c64ec14da943'),(20,'ginopaoli','ginopaoli@info.com',NULL,'$2y$10$WDhW0g9lLdT9z2/Q34RieOoiKZ7k.c/XyhIhYfcwuME6KgKWmiBoi',NULL,NULL,NULL,'2023-03-26 10:52:04','2023-03-26 11:06:39','e294139ab954f3ef316690c2d6ff217d');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-14 18:20:46
