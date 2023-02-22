<script lang="ts">
	import { cn } from "$lib/utils";
    import { ContextMenu } from "teil-ui";
</script>

<ContextMenu.Content {...$$props} class={cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in fade-in-80 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
    $$props.class
)}>
    <slot/>
</ContextMenu.Content>
