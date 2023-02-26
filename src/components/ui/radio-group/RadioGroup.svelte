<script lang="ts">
	import { cn } from "$lib/utils";
	import { Radio } from "teil-ui";

    export let value: string;
</script>

<Radio.Group {...$$restProps} bind:value class={cn(
    "grid gap-2",
    $$props.class
)}>
    <slot/>
</Radio.Group>