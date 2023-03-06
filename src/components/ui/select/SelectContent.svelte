<script lang="ts">
	import { cn } from "$lib/utils";
	import { Select } from "teil-ui";


</script>

<Select.Content {...$$props} class={cn(
    "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md animate-in fade-in-80 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
    $$props.class
)}>
    <Select.Viewport class="p-1">
        <slot />
    </Select.Viewport>
</Select.Content>