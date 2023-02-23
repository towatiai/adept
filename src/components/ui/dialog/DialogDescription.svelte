<script lang="ts">
	import { cn } from "$lib/utils";
	import { Dialog } from "teil-ui";
</script>

<Dialog.Description {...$$props} class={cn(
    "text-sm text-slate-500", "dark:text-slate-400",
    $$props.class
)}>
    <slot/>
</Dialog.Description>