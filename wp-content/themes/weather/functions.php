<?php





function load_styles() {
	$timestamp = filemtime( get_template_directory() . '/dist/theme.css');
	wp_enqueue_style('frontend-stylesheet', get_template_directory_uri() . '/dist/theme.css', null, null);
}

add_action('wp_enqueue_scripts', 'load_styles');



add_action('wp_enqueue_scripts', 'brave_load_javascript_files');


// Register the scripts
function brave_load_javascript_files() {
	
	$timestamp = filemtime( get_template_directory() . '/dist/theme.js');
	
	wp_register_script('theme', get_template_directory_uri() . '/dist/theme.js', array ('jquery'), null, true);

  
	wp_localize_script('theme', 'my_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

//	Google Map

    $apiKey = 'AIzaSyDSlUPakAyYt93WlibVWCnl1GjeHa2kk2Y';
    wp_enqueue_script( 'googleMap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSlUPakAyYt93WlibVWCnl1GjeHa2kk2Y', false );

	/* Pass theme URL through to script */
	$theme_uri = array( 'stylesheet_directory_uri' => get_stylesheet_directory_uri() );
	wp_localize_script( 'theme', 'directory_uri', $theme_uri );

	wp_enqueue_script('theme');

}