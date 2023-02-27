<script lang="ts">
	import { cn } from "$lib/utils";
	import { Slider } from "teil-ui";

    export let value: number[];
</script>

<Slider.Container {...$$restProps} bind:value class={cn(
    "relative flex w-full touch-none select-none items-center",
    $$props.class
)}>
    <Slider.Track class="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <Slider.Range class="absolute h-full bg-slate-900  dark:bg-slate-400" />
    </Slider.Track>
    <Slider.Thumb class="block h-5 w-5 rounded-full border-2 border-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-100 dark:bg-slate-400 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"/>
</Slider.Container>