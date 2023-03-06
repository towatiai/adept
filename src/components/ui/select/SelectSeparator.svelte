<script lang="ts">
	import { Select } from "teil-ui";
    import { cn } from "$lib/utils";
</script>

<Select.Separator {...$$props} class={cn(
    "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700",
    $$props.class
)}/>