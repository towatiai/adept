<script lang="ts">
	import { cn } from "$lib/utils";
    import { Label } from "teil-ui";
</script>

<Label {...$$props} class={cn(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    $$props
)}><slot /></Label>