<script lang="ts">
	// dispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// components
	import IconDelete from '$atoms/IconDelete.svelte';
	import IconCopy from '$atoms/IconCopy.svelte';

	// stores
	import { outputButton, outputCopyConf } from '$stores/formsStore';

	// props
	export let formName = '';

	// variables
	let button: HTMLDivElement;
	let copyConf: HTMLDivElement | undefined;

	// reactive variables
	$: isInput = formName == 'input';
	$: isOutput = formName == 'output';
	const buttonType = isInput ? 'delete' : 'copy';

	// reactive expressions
	// safe reference to copy confirmation in store
	$: {
		if (isOutput && copyConf) {
			$outputCopyConf = copyConf;
		} else {
			// do nothing
		}
	}

	// functions
	function buttonClick(type: string) {
		if (formName == 'input') {
			dispatch('inputFieldButtonClick', {
				message: 'input field button click'
			});
		} else {
			dispatch('outputFieldButtonClick', {
				message: 'output field button click'
			});
		}
	}
</script>

<template lang="pug">
.p-1.relative
	.p-2.opacity-60.transition-opacity(
		bind:this!="{button}"
		id!="{buttonType + '-button'}"
		class="hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-5 rounded"
		on:click!="{buttonClick}"
		)
		+if('isInput')
			IconDelete
			+elseif('isOutput')
				IconCopy
	+if('isOutput')
		#copy-conf.absolute.bg-white.bg-opacity-80.right-0.mr-2.mt-2.p-2.rounded.text-midnight.transition-opacity.opacity-0.pointer-events-none(
			bind:this!="{copyConf}"
			class="z-50"
			) Copied!

</template>
