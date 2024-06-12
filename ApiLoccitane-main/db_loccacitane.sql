CREATE DATABASE  IF NOT EXISTS `db_loccitane` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_loccitane`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_loccitane
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `tb_corredores_nivel`
--

DROP TABLE IF EXISTS `tb_corredores_nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_corredores_nivel` (
  `id_corredor_nivel` binary(16) NOT NULL,
  `prateleira` varchar(4) NOT NULL,
  `registro` date NOT NULL,
  `id_usuario` binary(16) NOT NULL,
  `codigo` varchar(4) NOT NULL,
  PRIMARY KEY (`id_corredor_nivel`),
  UNIQUE KEY `id_corredor_nivel_UNIQUE` (`id_corredor_nivel`),
  UNIQUE KEY `prateleira_UNIQUE` (`prateleira`),
  UNIQUE KEY `registro_UNIQUE` (`registro`) /*!80000 INVISIBLE */,
  KEY `id_usu` (`id_usuario`),
  CONSTRAINT `id_usuario_1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_corredores_nivel`
--

LOCK TABLES `tb_corredores_nivel` WRITE;
/*!40000 ALTER TABLE `tb_corredores_nivel` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_corredores_nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_paletes`
--

DROP TABLE IF EXISTS `tb_paletes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_paletes` (
  `id_palete` binary(16) NOT NULL,
  `entrada` date NOT NULL,
  `saida` date DEFAULT NULL,
  `tempo_estoque` date DEFAULT NULL,
  `registro` date NOT NULL,
  `id_usuario` binary(16) NOT NULL,
  PRIMARY KEY (`id_palete`),
  KEY `id_usuario_1_idx` (`id_usuario`),
  CONSTRAINT `id_usuario_2` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_paletes`
--

LOCK TABLES `tb_paletes` WRITE;
/*!40000 ALTER TABLE `tb_paletes` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_paletes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produtos`
--

DROP TABLE IF EXISTS `tb_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produtos` (
  `id_produto` binary(16) NOT NULL,
  `nome_produto` varchar(60) NOT NULL,
  `valor_produto` float NOT NULL,
  `juros_produto` tinyint NOT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `id_produto_UNIQUE` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produtos`
--

LOCK TABLES `tb_produtos` WRITE;
/*!40000 ALTER TABLE `tb_produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produtos_paletes`
--

DROP TABLE IF EXISTS `tb_produtos_paletes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produtos_paletes` (
  `id_produto_palete` binary(16) NOT NULL,
  `id_produto` binary(16) NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`id_produto_palete`),
  KEY `id_produto_1_idx` (`id_produto`),
  CONSTRAINT `id_produto_1` FOREIGN KEY (`id_produto`) REFERENCES `tb_produtos` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produtos_paletes`
--

LOCK TABLES `tb_produtos_paletes` WRITE;
/*!40000 ALTER TABLE `tb_produtos_paletes` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_produtos_paletes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produtos_paletes_many`
--

DROP TABLE IF EXISTS `tb_produtos_paletes_many`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produtos_paletes_many` (
  `id_produtos_paletes` binary(16) NOT NULL,
  `id_paletes` binary(16) NOT NULL,
  KEY `id_produto_many_idx` (`id_produtos_paletes`),
  KEY `id_palete_many_idx` (`id_paletes`),
  CONSTRAINT `id_palete_many` FOREIGN KEY (`id_paletes`) REFERENCES `tb_paletes` (`id_palete`),
  CONSTRAINT `id_produto_many` FOREIGN KEY (`id_produtos_paletes`) REFERENCES `tb_produtos_paletes` (`id_produto_palete`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produtos_paletes_many`
--

LOCK TABLES `tb_produtos_paletes_many` WRITE;
/*!40000 ALTER TABLE `tb_produtos_paletes_many` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_produtos_paletes_many` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_setores`
--

DROP TABLE IF EXISTS `tb_setores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_setores` (
  `id_setor` binary(16) NOT NULL,
  `codigo` varchar(2) NOT NULL,
  `registro` date NOT NULL,
  `id_usuario` binary(16) NOT NULL,
  PRIMARY KEY (`id_setor`),
  UNIQUE KEY `id_corredor_UNIQUE` (`id_setor`),
  KEY `id_usuario_3_idx` (`id_usuario`),
  CONSTRAINT `id_usuario_3` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_setores`
--

LOCK TABLES `tb_setores` WRITE;
/*!40000 ALTER TABLE `tb_setores` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_setores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id_usuario` binary(16) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `registro` date NOT NULL,
  `tipo_usuario` bit(2) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-09 17:17:22
