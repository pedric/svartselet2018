<?php

$context = Timber::get_context();
$args = array(
'post_type' => 'portfolio',
'posts_per_page' => -1
);
$context['portfolio'] = Timber::get_posts( $args );
$post = new TimberPost();

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

$context['post'] = $post;
Timber::render( 'page-portfolio.twig', $context );