<script lang="ts">
	import { cn } from "$lib/utils";
	import { HoverCard } from "teil-ui";
</script>

<HoverCard.Content {...$$props} class={cn(
    "z-50 w-64 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-slate-800 dark:bg-slate-800",
    $$props.class
)}>
    <slot/>
</HoverCard.Content>