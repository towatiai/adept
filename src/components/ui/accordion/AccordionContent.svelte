<script lang="ts">
	import { cn } from "$lib/utils";
    import { Accordion } from "teil-ui";
    import { slide } from "svelte/transition";
</script>

<Accordion.Content {...$$props} class={cn(
    "overflow-hidden text-sm",
    $$props.class
)}>
    <div class="pt-0 pb-4" transition:slide><slot/></div>
</Accordion.Content>