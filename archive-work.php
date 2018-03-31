<?php
/* Template name: Archive work*/

$context = Timber::get_context();
$args = array( 'posts_per_page' => -1 );
$context['posts'] = Timber::get_posts( $args );
Timber::render( 'archive-work.twig', $context );
