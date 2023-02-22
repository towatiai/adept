<script lang="ts">
	import { cn } from "$lib/utils";
    import { Accordion } from "teil-ui";
    import type { ItemProps } from "teil-ui/components/Accordion/Item.svelte";

    interface $$Props extends ItemProps {}
    $: props = $$props as $$Props;
</script>

<Accordion.Item {...props} class={cn(
    "border-b border-b-slate-200 dark:border-b-slate-700",
    $$props.class
)}>
    <slot/>
</Accordion.Item>