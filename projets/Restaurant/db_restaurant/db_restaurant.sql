-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour db_restaurant
CREATE DATABASE IF NOT EXISTS `db_restaurant` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_restaurant`;

-- Listage de la structure de la table db_restaurant. jour
CREATE TABLE IF NOT EXISTS `jour` (
  `id_jour` int(11) NOT NULL AUTO_INCREMENT,
  `jour` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jour`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Listage des données de la table db_restaurant.jour : ~7 rows (environ)
/*!40000 ALTER TABLE `jour` DISABLE KEYS */;
INSERT INTO `jour` (`id_jour`, `jour`) VALUES
	(1, 'lundi'),
	(2, 'mardi'),
	(3, 'mercredi'),
	(4, 'jeudi'),
	(5, 'vendredi'),
	(6, 'samedi'),
	(7, 'dimanche');
/*!40000 ALTER TABLE `jour` ENABLE KEYS */;

-- Listage de la structure de la table db_restaurant. menu
CREATE TABLE IF NOT EXISTS `menu` (
  `id_menu` int(11) NOT NULL AUTO_INCREMENT,
  `id_jour` int(11) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id_menu`),
  KEY `id_jour` (`id_jour`),
  CONSTRAINT `FK_menu_jour` FOREIGN KEY (`id_jour`) REFERENCES `jour` (`id_jour`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Listage des données de la table db_restaurant.menu : ~9 rows (environ)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id_menu`, `id_jour`, `image`, `nom`, `description`) VALUES
	(1, 1, 'platDuJourFish.png', 'Escalope de poisson', 'Escalope de poisson pané avec ses pommes de terre sauté'),
	(2, 2, 'platDuJourQuiche.png', 'Quiche', 'Quiche de saison accompagnée de sa salade'),
	(3, 3, 'platDuJourBolo.png', 'Spaghetti bolognaise', 'Spaghetti bolognaise et sa salade de saison'),
	(4, 4, 'platDuJourPizza.png', 'Pizza', 'Pizza aux 2 options'),
	(5, 5, 'PlatDuJourRissoto.png', 'Risotto', 'Le risotto qui réchauffe le coeur'),
	(6, 6, 'platDuJourGrillade.jpg', 'Grillades', 'Grillade de réconfort enfin le Week end'),
	(7, 7, 'platDuJourPoulet.png', 'Poulet rôti', 'Poulet rôti à la broche et ses accompagnements'),
	(12, NULL, 'realisateur-logo.jpg', 'test', 'tset test test'),
	(13, NULL, 'fond.jpg', 'PLAT TEST', 'C&#39;est un faux platpour teser');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Listage de la structure de la table db_restaurant. reservation
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_reservation` int(11) NOT NULL AUTO_INCREMENT,
  `id_jour` int(11) NOT NULL,
  `nom_prenom` varchar(50) NOT NULL,
  `nbPersonnes` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text,
  `heure` varchar(50) NOT NULL,
  `creneau` varchar(50) NOT NULL,
  PRIMARY KEY (`id_reservation`),
  KEY `id_jour` (`id_jour`),
  CONSTRAINT `FK_reservation_jour` FOREIGN KEY (`id_jour`) REFERENCES `jour` (`id_jour`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Listage des données de la table db_restaurant.reservation : ~0 rows (environ)
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` (`id_reservation`, `id_jour`, `nom_prenom`, `nbPersonnes`, `email`, `message`, `heure`, `creneau`) VALUES
	(1, 1, 'john doe', 2, 'test@test.fr', 'c&#39;est un test', 'midi', '13h15');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
