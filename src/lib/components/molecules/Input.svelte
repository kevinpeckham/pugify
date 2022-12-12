<script lang="ts">
	// components
	import TextAreaBlock from '$molecules/TextAreaBlock.svelte';

	// stores
	import { inputEl, inputString } from '$stores/formsStore';

	// variables
	const formName = 'input';
	const heading = 'HTML';
</script>

<template lang="pug">

TextAreaBlock(
  formName!="{formName}"
  heading!="{heading}"
	on:inputFieldButtonClick
	on:inputFieldInput
	on:inputFieldKeydown
	on:inputFieldPaste
	)
</template>
