<script lang="ts">
	import { cn } from "$lib/utils";
    import { Accordion } from "teil-ui";
    import { slide } from "svelte/transition";
</script>

<Accordion.Content {...$$props} class={cn(
    "overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
    $$props.class
)}>
    <div class="pt-0 pb-4" transition:slide><slot/></div>
</Accordion.Content>