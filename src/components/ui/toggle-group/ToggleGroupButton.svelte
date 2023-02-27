<script lang="ts">
	import { cn } from "$lib/utils";
	import { ToggleGroup } from "teil-ui";
	import type { ButtonProps } from "teil-ui/components/ToggleGroup/Button.svelte";

    interface $$Props extends ButtonProps {};
    $: props = $$props as ButtonProps;
</script>

<ToggleGroup.Button {...props} class={cn(
    "px-3 py-2 rounded-[4px] flex items-center aria-pressed:bg-slate-200 hover:bg-slate-100",
    $$props.class
)}>
    <slot/>
</ToggleGroup.Button>