<script lang="ts">
	export let formName = '';
	export let heading = '';
</script>

<template lang="pug">
.flex.w-full.items-center
	label.text-sm.uppercase.px-4.block.text-slate-100.text-opacity-80.tracking-wider(
		for!="{formName}"
		class="group-focus-within:text-opacity-100"
	) {heading}
</template>
