import { DropdownMenu as DropdownMenuPrimitive } from "teil-ui";

export const DropdownMenu = DropdownMenuPrimitive.Container;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export { default as DropdownMenuContent } from "./DropdownMenuContent.svelte";
export { default as DropdownMenuItem } from "./DropdownMenuItem.svelte";
export { default as DropdownMenuShortcut } from "./DropdownMenuShortcut.svelte";
export { default as DropdownMenuLabel } from "./DropdownMenuLabel.svelte";
export { default as DropdownMenuSeparator } from "./DropdownMenuSeparator.svelte";
export { default as DropdownMenuSubContent } from "./DropdownMenuSubContent.svelte";
export { default as DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger.svelte";