<!--
@component
Includes a label, input field, and action button
* @prop {string} formName - e.g. "input" or "output"
-->
<script lang="ts">
	// components
	import TextAreaButton from '$molecules/TextAreaButton.svelte';
	import TextAreaField from '$atoms/TextAreaField.svelte';
	import TextAreaLabel from '$atoms/TextAreaLabel.svelte';

	// props
	export let formName = '';
	export let heading = '';
</script>

<template lang="pug">
.group.relative.border.border-white.border-opacity-50.rounded.bg-gray-700.bg-opacity-0.drop-shadow-xl.transition-all(
  class="!outline-0 min-h-[400px] focus-within:border-accent focus-within:border-opacity-100 focus-within:shadow-4xl focus-within:bg-opacity-10 pointer-events-auto")

  //- Text Box Header
  .flex.justify-between.absolute.w-full.z-20.rounded.shadow-md.bg-gradient-to-t.from-transparent.to-primary
    TextAreaLabel("{heading}" "{formName}")
    TextAreaButton(
      "{formName}"
      on:inputFieldButtonClick
      on:outputFieldButtonClick
    )

  //- Text Box Field
  TextAreaField(
    "{formName}"

    on:inputFieldInput
    on:inputFieldKeydown
    on:inputFieldPaste
    )
</template>
