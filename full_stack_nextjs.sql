-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Jan 2023 pada 11.01
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `full_stack_nextjs`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20221215094936_create_posts_table.js', 1, '2022-12-15 09:58:42'),
(2, '20221229181218_create_users_table.js', 2, '2022-12-29 18:21:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`, `updated_at`) VALUES
(3, 'Post title from body 1', 'Post content from body 1', '2022-12-17 18:23:40', '2022-12-17 18:23:40'),
(4, 'Post title from body 2', 'Post content from body 2', '2022-12-17 18:25:23', '2022-12-17 18:25:23'),
(5, 'Post title from body 3', 'Post content from body 3', '2022-12-17 18:27:41', '2022-12-17 18:27:41'),
(6, 'Post title with auth updated', 'Post content with auth updated', '2022-12-30 15:47:47', '2022-12-30 15:47:47'),
(7, 'Post title with auth', 'Post content with auth', '2022-12-30 15:49:15', '2022-12-30 15:49:15'),
(9, 'Berita 1', 'Berita konten 1', '2022-12-31 07:07:51', '2022-12-31 07:07:51'),
(10, 'Berita 2', 'Berita konten 2', '2022-12-31 07:08:01', '2022-12-31 07:08:01'),
(11, 'Berita 3', 'Berita konten 3', '2022-12-31 07:08:06', '2022-12-31 07:08:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'user@gmail.com', '$2a$10$DE0H1KcgEDm9irMwEOWV..R4euJWAjIpAYL50yucdF8R4WdhI8EWK', '2022-12-30 17:49:09', '2022-12-30 17:49:09'),
(3, 'joe@user.com', '$2a$10$yZUXA8zttLXpud.hq4wsteTh98S7qZjV.H9xiK.tFPuONoQLSfrtK', '2022-12-30 17:56:10', '2022-12-30 17:56:10'),
(5, 'qwety@user.com', '$2a$10$Z8.QQmo9g1ghREHlpnX8B.IPdeSsTlZG2R5L9GSKbTf9j8kd.hKsy', '2022-12-30 17:58:48', '2022-12-30 17:58:48'),
(6, 'admin@user.com', '$2a$10$TnS79yRPJCPD8JPNGwOAN.lN3apBMcP.GvTivKWjx29f1lQpbW4jy', '2022-12-30 18:00:21', '2022-12-30 18:00:21'),
(10, 'user1@gmail.com', '$2a$10$phA5tnWUeVKF/KNJdgSVI.K.4.a80X4/OLwIyZFnLFw1K9g9T5QlW', '2022-12-31 05:43:03', '2022-12-31 05:43:03'),
(12, 'user2@gmail.com', '$2a$10$yjIyYOOPVU8FxlibyuHjuePXCZkSI82nV7akshwou.5Wk0TJ0x8rq', '2022-12-31 05:44:42', '2022-12-31 05:44:42');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indeks untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
