<script lang="ts">
	import { cn } from "$lib/utils";
    import { Scroll } from "teil-ui";
	import ScrollBar from "./ScrollBar.svelte";
</script>

<Scroll.Area {...$$props} type="hover" class={cn(
    "relative overflow-hidden", 
    $$props.class
)}>
    <Scroll.Viewport class="h-full w-full rounded-[inherit]">
        <slot/>
    </Scroll.Viewport>
    <ScrollBar />
    <!-- <Scroll.Corner /> -->
</Scroll.Area>