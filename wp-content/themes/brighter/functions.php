<?php 





add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

   

        acf_register_block_type(array(
            'name'              => 'weather',
            'title'             => __('Weather'),
            'description'       => __('A custom Weather block.'),
            'render_template'   => 'template-parts/blocks/weather/weather.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'weather'),
        ));


    }
}

function wpdocs_theme_name_scripts() {
    $parent_style = 'brighter';
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/custom.css' );
  
}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );


?>