import { Select as SelectPrimitive } from "teil-ui";

export const Select = SelectPrimitive.Container;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export { default as SelectTrigger } from "./SelectTrigger.svelte";
export { default as SelectContent } from "./SelectContent.svelte";
export { default as SelectLabel } from "./SelectLabel.svelte";
export { default as SelectItem } from "./SelectItem.svelte";
export { default as SelectSeparator } from "./SelectSeparator.svelte";