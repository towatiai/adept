<script lang="ts">
	import { cn } from "$lib/utils";
    import { Tabs } from "teil-ui";
    import type { ContentProps } from "teil-ui/components/Tabs/Content.svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface $$Props extends ContentProps, HTMLAttributes<HTMLDivElement> {};
    $: props = $$props as $$Props;
</script>

<Tabs.Content {...props} class={cn(
    "mt-2 rounded-md border border-slate-200 p-6",
    $$props.class
)}>
    <slot />
</Tabs.Content>