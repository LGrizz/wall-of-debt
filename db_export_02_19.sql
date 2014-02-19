-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 19, 2014 at 11:48 AM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wallofdebt`
--
CREATE DATABASE `wallofdebt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `wallofdebt`;

-- --------------------------------------------------------

--
-- Table structure for table `wallpost`
--

CREATE TABLE `wallpost` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `debt` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `school` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `wallpost`
--

INSERT INTO `wallpost` (`id`, `name`, `email`, `debt`, `school`, `created_at`) VALUES
(1, 'Kyle Langille', 'langille.kyle@gmail.com', '20000', 'Dalhousie', '2014-02-18 20:58:11'),
(2, 'Levin Dixon', 'levin@gmail.com', '14000', 'SAIT', '2014-02-18 21:32:43'),
(3, 'Tim Nakamura', 'tim@gmail.com', '27000', 'University of Calgary', '2014-02-18 21:34:37'),
(4, 'Malcom Allen', 'text@test.com', '4000', 'University of Victoria', '2014-02-19 09:31:35'),
(5, 'Eve Adams', 'test@test.com', '6500', 'University of Calgary', '2014-02-19 09:32:13'),
(6, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 09:32:51'),
(7, 'Scott Armstrong', '', '1200', 'Queen''s University', '2014-02-19 09:33:11'),
(8, 'David Markus', '', '7000', 'University of Ottawa', '2014-02-19 09:33:29'),
(9, 'Scarlett Chu', '', '22000', 'York University', '2014-02-19 09:33:53'),
(10, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 09:34:17'),
(11, 'Scott Andrews', '', '1200', 'University of Toronto', '2014-02-19 09:34:34'),
(12, 'Niki Ashton', '', '9000', 'University of Waterloo', '2014-02-19 09:34:50'),
(13, 'Malcom Allen', '', '4000', 'University of Victoria', '2014-02-19 09:35:08'),
(14, 'Eve Adams', '', '6500', 'University of Calgary', '2014-02-19 09:35:24'),
(15, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 09:35:41'),
(16, 'Scott Armstrong', '', '1200', 'Queen''s University', '2014-02-19 09:36:01'),
(17, 'David Markus', '', '7000', 'University of Ottawa', '2014-02-19 09:36:22'),
(18, 'Scarlett Chu', '', '22000', 'York University', '2014-02-19 09:36:37'),
(19, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 09:36:53'),
(20, 'Scott Andrews', '', '1200', 'University of Toronto', '2014-02-19 09:37:09'),
(21, 'Niki Ashton', '', '9000', 'University of Waterloo', '2014-02-19 09:37:27'),
(22, 'Kyle Langille', 'langille.kyle@gmail.com', '20000', 'Dalhousie', '2014-02-19 10:47:21'),
(23, 'Levin Dixon', 'levin@gmail.com', '14000', 'SAIT', '2014-02-19 10:47:21'),
(24, 'Tim Nakamura', 'tim@gmail.com', '27000', 'University of Calgary', '2014-02-19 10:47:21'),
(25, 'Malcom Allen', 'text@test.com', '4000', 'University of Victoria', '2014-02-19 10:47:21'),
(26, 'Eve Adams', 'test@test.com', '6500', 'University of Calgary', '2014-02-19 10:47:21'),
(27, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 10:47:21'),
(28, 'Scott Armstrong', '', '1200', 'Queen''s University', '2014-02-19 10:47:21'),
(29, 'David Markus', '', '7000', 'University of Ottawa', '2014-02-19 10:47:21'),
(30, 'Scarlett Chu', '', '22000', 'York University', '2014-02-19 10:47:21'),
(31, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 10:47:21'),
(32, 'Scott Andrews', '', '1200', 'University of Toronto', '2014-02-19 10:47:21'),
(33, 'Niki Ashton', '', '9000', 'University of Waterloo', '2014-02-19 10:47:21'),
(34, 'Malcom Allen', '', '4000', 'University of Victoria', '2014-02-19 10:47:21'),
(35, 'Eve Adams', '', '6500', 'University of Calgary', '2014-02-19 10:47:21'),
(36, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 10:47:21'),
(37, 'Scott Armstrong', '', '1200', 'Queen''s University', '2014-02-19 10:47:21'),
(38, 'David Markus', '', '7000', 'University of Ottawa', '2014-02-19 10:47:21'),
(39, 'Scarlett Chu', '', '22000', 'York University', '2014-02-19 10:47:21'),
(40, 'Rob Anders', '', '19000', 'McMaster University', '2014-02-19 10:47:21'),
(41, 'Scott Andrews', '', '1200', 'University of Toronto', '2014-02-19 10:47:21'),
(42, 'Niki Ashton', '', '9000', 'University of Waterloo', '2014-02-19 10:47:21');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
