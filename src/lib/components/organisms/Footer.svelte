<script lang="ts">
	const version = 'v1.0';
</script>

<template lang="pug">
footer.px-6.pt-24.pb-8.text-sm.flex.justify-between
	.flex
		span.opacity-60 Made in Philadelphia @
		a.inline-block.ml-1(class="opacity-60 hover:opacity-100 hover:text-accent transition-all" href="https://lightningjar.com") Lightning Jar
	div#version.opacity-60 v #{version}
</template>
