<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'brighter_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|9(#|~P`c{{<m5~N{zO(cLM)[9*?+>$|yW]/:74yrY%1a?Tm{d!p)]c5].e0@0n~' );
define( 'SECURE_AUTH_KEY',  '._QJWHCKK.QU6gU[ZOq>,G{C;-6soSy(nC<yR7ygoSdh[2M!Mb>ba-ih~JZc]tyW' );
define( 'LOGGED_IN_KEY',    'l#d8[=M*,>Q:cLH6&(CqNrmjeoV%C69L8v:^hZ[ =RuJ?h|n|.IV[datC%s=c*_f' );
define( 'NONCE_KEY',        '/xB5|(5ciA+KficnKUjEArtX38pj^3%M1jns%Nl9lf!<OH2==8J)N0`5AQ$;)XQx' );
define( 'AUTH_SALT',        '()5g6~@N-z_Q^bU]vLbn,F[CF,%~yxW<e4&c@1 nf(xJEu^r4W8S)Q?r6D(NTmG_' );
define( 'SECURE_AUTH_SALT', 'pM[.FT%v^8`~x#U+YGZ/Qx<Gz2K{qw.>u|b}<?ZP+Qp@U4kTmbm*Jvyi?ZqdMyz1' );
define( 'LOGGED_IN_SALT',   '=[CZmgbs.e=^giWRrWUb{^%xF#oe&^*cGi:e=`,pv{1)ZODsvT>sq~s>M|3-4rvM' );
define( 'NONCE_SALT',       '7DC}?C_?XVJzaKR^bd4=X-in4,7?N=k+8sG:ysIqZp>52z=`$Dz[iz4E[8H2Z!b)' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';