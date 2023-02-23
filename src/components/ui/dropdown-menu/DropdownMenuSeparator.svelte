<script lang="ts">
	import { cn } from "$lib/utils";
	import { Separator } from "teil-ui";
</script>

<Separator class={cn(
    "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700",
    $$props.class
)} />