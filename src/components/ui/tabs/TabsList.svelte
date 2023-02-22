<script lang="ts">
	import { cn } from "$lib/utils";
    import { Tabs } from "teil-ui";
</script>

<Tabs.List {...$$restProps} class={cn(
    "inline-flex items-center justify-center rounded-md bg-slate-100 p-1",
    $$props.class
)}>
    <slot />
</Tabs.List>