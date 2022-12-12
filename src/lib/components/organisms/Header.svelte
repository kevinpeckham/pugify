<script lang="ts">
	import Logo from '$atoms/Logo.svelte';
</script>

<template lang="pug">
header.absolute.px-5.group.top-0.left-0.w-full(class="lg:pt-0")
	//- inner
	.overflow-hidden.relative.flex.flex-wrap.items-center.w-full
		//- branding
		a.brand.flex.items-center.cursor-pointer.opacity-1.absolute.-translate-x-40.ml-1.transition-transform(class="group-hover:translate-x-0 md:h-16" href="https://lightningjar.com" aria-label="Lightning Jar home")
			picture
				.w-44.mr-2
					Logo
			.lockup.opacity-0(class="group-hover:opacity-100")
				.inline-block.mr-3.opacity-60 |
				.inline-block.opacity-90 Dev Tools
		.text.flex.flex-wrap.h-16.leading-9.pointer-events-none.ml-6.items-center.transition-opacity(class='group-hover:opacity-0 md:flex-nowrap')
			.text-lg.font-medium.tracking-widest.uppercase.mr-3(class="sm:mt-0")
				| Pugify
			.inline-block.mr-3.opacity-60  |
			h1.inline-block.font-normal.italic.opacity-1.leading-none.text-accent
				div(class="sm:inline") HTML to Pug Converter

		//- messaging
		.hidden.ml-auto.text-sm.justify-self-end(class="md:block")
			span No ads, trackers, cookies&nbsp;
			span.hidden(class="lg:inline") or funny stuff.
</template>
