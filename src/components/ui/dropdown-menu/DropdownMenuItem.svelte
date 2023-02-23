<script lang="ts">
	import { cn } from "$lib/utils";
	import { DropdownMenu } from "teil-ui";

    export let inset = false;
</script>

<DropdownMenu.Item {...$$props} class={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
    inset && "pl-8",
    $$props.class
)}>
    <slot />
</DropdownMenu.Item>