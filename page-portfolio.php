<?php

/* Template Name: Portfolio */

$context = Timber::get_context();
$args = array(
'post_type' => 'portfolio',
'posts_per_page' => -1
);
$context['portfolio'] = Timber::get_posts( $args );
$post = new TimberPost();
$context['post'] = $post;
Timber::render( 'page-portfolio.twig', $context );