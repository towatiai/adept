<script lang="ts">
	import { cn } from "$lib/utils";
	import { Dialog } from "teil-ui";
</script>

<Dialog.Overlay {...$$props} class={cn(
    "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
    $$props.class
)}/>