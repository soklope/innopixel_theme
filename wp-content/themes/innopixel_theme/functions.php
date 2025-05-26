<?php
function my_block_theme_setup() {
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'my_block_theme_setup');

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('my-theme-style', get_stylesheet_uri());
});




function innopixel_register_theme_blocks() {
    register_block_type( get_template_directory() . '/blocks/my-custom-block' );
}
add_action( 'init', 'innopixel_register_theme_blocks' );



function innopixel_register_block_category( $categories, $post ) {
    $custom_category = array(
        array(
            'slug'  => 'innopixel',
            'title' => __( 'Innopixel', 'innopixel' ),
        )
    );

    return array_merge( $custom_category, $categories );
}
add_filter( 'block_categories_all', 'innopixel_register_block_category', 10, 2 );


