<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;


// Set related posts
if($post->related) {
	$related_ids = $post->related;
	$related_posts = Timber::get_posts(array(
		'post__in' => $related_ids
	));
	$context['relatedPosts'] = $related_posts;
} else {
	$context['relatedPosts'] = false;
}

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	// Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
	// Render all in page for now, looks the same
	Timber::render( 'page.twig', $context );
}
