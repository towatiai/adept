import { ContextMenu as ContextMenuPrimitive } from "teil-ui";

export const ContextMenu = ContextMenuPrimitive.Container;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuSub = ContextMenuPrimitive.Sub;

export { default as ContextMenuCheckboxItem } from "./ContextMenuCheckboxItem.svelte";
export { default as ContextMenuContent } from "./ContextMenuContent.svelte";
export { default as ContextMenuItem } from "./ContextMenuItem.svelte";
export { default as ContextMenuLabel } from "./ContextMenuLabel.svelte";
export { default as ContextMenuRadioItem } from "./ContextMenuRadioItem.svelte";
export { default as ContextMenuSeparator } from "./ContextMenuSeparator.svelte";
export { default as ContextMenuShortcut } from "./ContextMenuShortcut.svelte";
export { default as ContextMenuSubContent } from "./ContextMenuSubContent.svelte";
export { default as ContextMenuSubTrigger } from "./ContextMenuSubTrigger.svelte";