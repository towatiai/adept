<script lang="ts">
	import { cn } from "$lib/utils";
	import { ToggleGroup } from "teil-ui";
</script>

<ToggleGroup.Group {...$$restProps} class={cn(
    "border border-slate-300 rounded-md p-0.5 flex space-x-0.5",
    $$props.class
)}>
    <slot/>
</ToggleGroup.Group>