import { writable } from 'svelte/store';
type TextAreaField = HTMLTextAreaElement | null | undefined;
let dummyTextArea: TextAreaField;
let dummyDiv: HTMLDivElement | undefined;

// Create a store for the input and output text areas
export const inputEl = writable(dummyTextArea);
export const inputString = writable('');
export const outputEl = writable(dummyTextArea);
export const outputString = writable('');
export const outputButton = writable(dummyDiv);
export const outputCopyConf = writable(dummyDiv);
