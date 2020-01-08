DROP DATABASE IF EXISTS lms_db1;
CREATE DATABASE IF NOT EXISTS lms_db1;
USE lms_db1;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `api_users` (
  `id` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `password` varchar(2048) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `api_users`
--

INSERT INTO `api_users` (`id`, `username`, `password`, `created`) VALUES
(1,'dev1', 'demo123', '2020-01-08 00:39:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_users`
--
ALTER TABLE `api_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_users`
--
ALTER TABLE `api_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstname` varchar(256) NOT NULL,
  `lastname` varchar(256) NOT NULL,
  `username` varchar(256) NOT NULL,
  `password` varchar(2048) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `lastname`, `username`, `password`, `created`) VALUES
(1, 'Erick', 'Gaillard', 'dev1', 'demo123', '2020-01-08 00:39:46'),
(2, 'Fernando', 'Gaillard', 'dev2', 'demo123', '2020-01-08 00:39:46'),
(3, 'Juan', 'Gaillard', 'dev3', 'demo123', '2020-01-08 00:39:46'),
(4, 'Luis', 'Gaillard', 'dev4', 'demo123', '2020-01-08 00:39:46'),
(5, 'Pedro', 'Gaillard', 'dev5', 'demo123', '2020-01-08 00:39:46'),
(6, 'Jonh', 'Gaillard', 'dev6', 'demo123', '2020-01-08 00:39:46'),
(7, 'Luis', 'Gaillard', 'dev7', 'demo123', '2020-01-08 00:39:46'),
(8, 'rolando', 'Gaillard', 'dev8', 'demo123', '2020-01-08 00:39:46'),
(9, 'Brenda', 'Gaillard', 'dev9', 'demo123', '2020-01-08 00:39:46'),
(10, 'Carlos', 'Gaillard', 'dev10', 'demo123', '2020-01-08 00:39:46'),
(11, 'Edgar', 'Gaillard', 'dev11', 'demo123', '2020-01-08 00:39:46'),
(12, 'claudia', 'Gaillard', 'dev12', 'demo123', '2020-01-08 00:39:46'),
(13, 'Maria', 'Gaillard', 'dev13', 'demo123', '2020-01-08 00:39:46'),
(14, 'Fernando', 'Castañeda', 'dev14', 'demo123', '2020-01-08 01:18:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;