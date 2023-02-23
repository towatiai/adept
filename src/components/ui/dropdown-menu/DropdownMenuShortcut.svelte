<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
    interface $$Props extends HTMLAttributes<HTMLSpanElement> {};
</script>

<span class={cn(
    "ml-auto text-xs tracking-widest text-slate-500",
    $$props.class
)}>
    <slot/>
</span>