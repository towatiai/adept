<script lang="ts">
	import { cn } from "$lib/utils";
	import { Scroll } from "teil-ui";
	import type { Orientation } from "teil-ui/components/Scroll/types";

    export let orientation: Orientation = "vertical";
</script>

<Scroll.Bar {orientation} class={cn(
    "flex touch-none select-none transition-colors",
    orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
    orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
    $$props.class
)}>
    <Scroll.Thumb class="relative flex-1 rounded-full bg-slate-300 dark:bg-slate-700"/>
</Scroll.Bar>