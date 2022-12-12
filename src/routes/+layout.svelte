<script lang="ts">
	import '../app.css';
	import Header from '$organisms/Header.svelte';
	import Footer from '$organisms/Footer.svelte';
</script>

<template lang="pug">
.relative.flex.min-h-screen.w-full.max-w-full.flex-col.justify-end.overflow-x-hidden.leading-tight
	Header
	slot
Footer
</template>
