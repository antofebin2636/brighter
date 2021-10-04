<?php
/* ------------------------------------------------------
| 🗣 Header - head
|--------------------------------------------------------
This is used to wrap the site, and shouldn't be confused with the site header.
(header.php)
---------------------------------------------------------
*/
?>
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta name="format-detection" content="telephone=no">
    <!-- Google Fonts - async loading hack -->

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"  rel="stylesheet">

    <meta name="msapplication-TileColor" content="#1F325F">
    <meta name="theme-color" content="#1F325F">
    <?php wp_head(); ?>
</head>
<body <?php body_class('Body'); ?>>