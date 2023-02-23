<script lang="ts">
	import { cn } from "$lib/utils";
	import { DropdownMenu } from "teil-ui";

    export let inset = false;
</script>

<DropdownMenu.Label {...$$props} class={cn(
    "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300",
    inset && "pl-8",
    $$props.class
)}>
    <slot/>
</DropdownMenu.Label>