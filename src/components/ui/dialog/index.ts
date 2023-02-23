import { Dialog as DialogPrimitive } from "teil-ui";

export const Dialog = DialogPrimitive.Container;
export const DialogTrigger = DialogPrimitive.Trigger;

export { default as DialogContent } from "./DialogContent.svelte";
export { default as DialogOverlay } from "./DialogOverlay.svelte";
export { default as DialogTitle } from "./DialogTitle.svelte";
export { default as DialogDescription } from "./DialogDescription.svelte";
export { default as DialogFooter } from "./DialogFooter.svelte";
