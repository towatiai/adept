<script lang="ts">
	import { cn } from "$lib/utils";
	import { X } from "lucide-svelte";
	import { Dialog } from "teil-ui";
	import DialogOverlay from "./DialogOverlay.svelte";
</script>

<DialogOverlay />
<Dialog.Content {...$$props} class={cn(
    "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid w-full gap-4 rounded-b-lg bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
    "dark:bg-slate-900",
    $$props.class
)}>
    <slot/>
    <Dialog.Close class="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800">
        <X class="h-4 w-4"/>
        <span class="sr-only">Close</span>
    </Dialog.Close>
</Dialog.Content>