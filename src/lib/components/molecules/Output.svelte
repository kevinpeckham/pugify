<script lang="ts">
	// components
	import TextAreaBlock from '$molecules/TextAreaBlock.svelte';

	// stores
	import { outputEl, outputString } from '$stores/formsStore';

	const name = 'output';
	const heading = 'Pug';
</script>

<template lang="pug">

TextAreaBlock(
  formName!="{name}"
  heading!="{heading}"
	on:outputFieldButtonClick
  ) {$outputString}

</template>
