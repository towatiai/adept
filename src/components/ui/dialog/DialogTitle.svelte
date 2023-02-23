<script lang="ts">
	import { cn } from "$lib/utils";
	import { Dialog } from "teil-ui";
</script>

<Dialog.Title {...$$props} class={cn(
    "text-lg font-semibold text-slate-900 dark:text-slate-50",
    $$props.class
)}>
    <slot/>
</Dialog.Title>