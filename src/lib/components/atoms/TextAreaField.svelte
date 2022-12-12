<script lang="ts">
	// dispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// props
	export let formName = '';
	export let formValue = formName == 'output' ? 'test' : '';

	// stores
	import { inputEl, inputString, outputEl, outputString } from '$stores/formsStore';
	export let form: HTMLTextAreaElement;

	// binding the textarea to the store
	$: {
		if (formName == 'input') {
			$inputEl = form;
		} else if (formName == 'output') {
			$outputEl = form;
		}
	}

	// binding the form value to the correct store
	$: {
		if (formName == 'input') {
			inputString.set(formValue);
		} else if (formName == 'output') {
			outputString.set(formValue);
		}
	}

	// functions
	// forwarding these events to the parent component
	function onInput(e: Event) {
		if (formName == 'input') {
			dispatch('inputFieldInput', {
				message: 'input field input'
			});
		}
	}
	function onKeyDown(e: KeyboardEvent) {
		if (formName == 'input') {
			dispatch('inputFieldKeydown', {
				message: 'input field keydown'
			});
		}
	}
	function onPaste(e: ClipboardEvent) {
		if (formName == 'input') {
			dispatch('inputFieldPaste', {
				message: 'field field paste'
			});
		}
	}

	// variables
	const readonly = formName == 'output';
	const spellcheck = 'false';
	const uniqueClasses =
		formName == 'input'
			? 'whitespace-pre-line break-normal overflow-x-hidden !pr-6'
			: 'whitespace-pre overflow-x-scroll';
</script>

<!-- svelte-ignore a11y-autofocus -->
<template lang="pug">
textarea(
	autofocus!="{!readonly}"
	autocomplete!="off"
	bind:value!="{formValue}"
	bind:this!="{form}"
	class!="-z-10 h-full max-h-screen w-full resize-none bg-transparent px-4 pt-12 pb-8 font-mono leading-relaxed !outline-none focus:!outline-none {uniqueClasses}"
	id!="{formName}"
	name!="{formName}"
	on:input="{onInput}"
	on:keydown="{onKeyDown}"
	on:paste="{onPaste}"
	"{readonly}"
	"{spellcheck}"
	)
</template>
