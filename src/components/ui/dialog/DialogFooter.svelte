<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
    interface $$Props extends HTMLAttributes<HTMLDivElement>{};
</script>

<div {...$$props} class={cn(
    "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    $$props.class
)}>
    <slot/>
</div>