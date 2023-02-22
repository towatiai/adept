<script lang="ts">
	import { cn } from "$lib/utils";
    import { ContextMenu } from "teil-ui";
</script>

<ContextMenu.Content {...$$props} class={cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 shadow-md animate-in slide-in-from-left-1 dark:border-slate-700 dark:bg-slate-800",
    $$props.class
)}>
    <slot/>
</ContextMenu.Content>