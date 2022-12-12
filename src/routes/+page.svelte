<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import Input from '$molecules/Input.svelte';
	import Output from '$molecules/Output.svelte';

	// stores
	import { inputEl, inputString, outputEl, outputString } from '$stores/formsStore';
	import { clearField } from '$utils/functionsLibrary';

	// functions

	$: console.log($inputString);

	// input field events

	function onInputFieldInput(e: CustomEvent) {}
	function onInputFieldKeydown(e: CustomEvent) {}
	function onInputFieldPast(e: CustomEvent) {
		console.log('onInputFieldPaste');
	}

	async function copyPugToClipboard() {
		let copy = await navigator.clipboard.writeText($outputString);
		const copyConf: HTMLElement | null = document.querySelector('#copy-conf');
		copyConf ? copyConf.classList.add('opacity-100') : null;
	}
	// output field events
	function onOutputFieldButtonClick(e: CustomEvent) {
		// copy
	}
</script>

<template lang="pug">
main.w-full.mb-auto.px-2.pb-2.overflow-x-hidden
	section.pt-16.min-h-screen.h-screen.grid.grid-cols-1.text-white.gap-4.pb-6(class="lg:grid-cols-2")
		Input(
			on:inputFieldButtonClick!="{clearField($inputEl)}"
			on:inputFieldInput!="{onInputFieldInput}"
			on:inputFieldKeydown!="{onInputFieldKeydown}"
			on:inputFieldPaste!="{onInputFieldPast}"
			)
		Output(
			on:outputFieldButtonClick!="{onOutputFieldButtonClick}"
			)


//-Prefooter(
	href="https://skinnypug.dev"
	title="Hit the ground running with Svelte, Typescript, Tailwind, and Pug"
	) New: Svelte, Typescript, Tailwind, Pug starter template @ https://skinnypug.dev
</template>
