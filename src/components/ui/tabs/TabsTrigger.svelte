<script lang="ts">
	import { cn } from "$lib/utils";
    import { Tabs } from "teil-ui";
    import type { TriggerProps } from "teil-ui/components/Tabs/Trigger.svelte";

    $: props = $$props as TriggerProps;
</script>

<Tabs.Trigger {...props} class={cn(
    "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-white aria-selected:text-slate-900 aria-selected:shadow-sm",
    $$props.class
)}>
    <slot />
</Tabs.Trigger>