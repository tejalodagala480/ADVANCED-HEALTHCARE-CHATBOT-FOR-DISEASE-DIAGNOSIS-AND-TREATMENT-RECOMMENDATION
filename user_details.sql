-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 20, 2023 at 11:29 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `med_chatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `user details`
--

DROP TABLE IF EXISTS `user details`;
CREATE TABLE IF NOT EXISTS `user details` (
  `sno` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `Phone Number` varchar(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user details`
--

INSERT INTO `user details` (`sno`, `name`, `email`, `Phone Number`, `address`, `password`, `image`) VALUES
(1, 'User1', 'user1@gmail.com', '1234567895', 'Kol', 'Abc@123', 'media/user/honda_civic_sedan_2019_4k_2-3840x2160.jpg'),
(2, 'User2', 'user2@gmail.com', '1234567895', 'Abcd', 'Abc@123', 'media/user/ligoria-removebg-preview.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
