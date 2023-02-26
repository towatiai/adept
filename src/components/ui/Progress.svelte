<script lang="ts">
	import { cn } from "$lib/utils";
	import { Progress } from "teil-ui";

    export let value: number;
</script>

<Progress.Track {...$$restProps} {value} class={cn(
    "relative h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
    $$props.class
)}>
    <Progress.Bar class="h-full w-full flex-1 bg-slate-900 transition-all dark:bg-slate-400"
    style="transform: translateX(-{100 - (value || 0)}%)"/>
</Progress.Track>