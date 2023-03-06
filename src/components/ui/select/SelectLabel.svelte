<script lang="ts">
	import { cn } from "$lib/utils";
	import { Select } from "teil-ui";

</script>

<Select.Label {...$$props} class={cn(
    "py-1.5 pr-2 pl-8 text-sm font-semibold text-slate-900 dark:text-slate-300",
    $$props.class 
)}>
    <slot />
</Select.Label>