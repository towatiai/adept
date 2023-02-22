<script lang="ts">
	import { cn } from "$lib/utils";
    import { Accordion } from "teil-ui";
    import { ChevronDown } from "lucide-svelte";
</script>

<Accordion.Trigger {...$$props} class={cn(
    'flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[aria-expanded="true"]>svg]:rotate-180',
    $$props.class
)}>
    <slot/>
    <ChevronDown class="h-4 w-4 transition-transform duration-200" />
</Accordion.Trigger>