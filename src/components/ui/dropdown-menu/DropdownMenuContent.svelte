<script lang="ts">
	import { cn } from "$lib/utils";
	import { DropdownMenu } from "teil-ui";

</script>

<DropdownMenu.Content {...$$props} class={cn(
    `z-50 min-w-[8rem] overflow-hidden rounded-md border 
    border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in 
    data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 
    dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400`,
    $$props.class
)}>
    <slot/>
</DropdownMenu.Content>