<script lang="ts">
	import { cn } from "$lib/utils";
	import { Separator } from "teil-ui";
	import type { SeparatorProps } from "teil-ui/components/Select/Separator.svelte";
	import type { Orientation } from "teil-ui/components/Separator/types";

    interface $$Props extends SeparatorProps {};
    export let orientation: Orientation = "horizontal";
</script>

<Separator {...$$restProps} {orientation} class={cn(
    "bg-slate-200 dark:bg-slate-700",
    orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
    $$props.class
)}/>