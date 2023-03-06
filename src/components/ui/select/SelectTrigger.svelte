<script lang="ts">
	import { cn } from "$lib/utils";
	import { ChevronDown } from "lucide-svelte";
	import { Select } from "teil-ui";


</script>

<Select.Trigger {...$$props} class={cn(
    "flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
    $$props.class
)}>
    <slot />
    <ChevronDown class="h-4 w-4 opacity-50"/>
</Select.Trigger>