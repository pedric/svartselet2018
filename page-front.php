<?php

/* Template Name: Startsida */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( 'page-front.twig', $context );