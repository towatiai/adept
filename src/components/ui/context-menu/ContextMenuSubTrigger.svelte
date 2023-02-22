<script lang="ts">
	import { cn } from "$lib/utils";
    import { ChevronRight } from "lucide-svelte";

    // TODO: Add a proper SubMenu trigger that can be styled.
    //import { ContextMenu } from "teil-ui";

    export let inset = false;
</script>

<a href="#" class={cn(
    "flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700",
    inset && "pl-8",
    $$props.class
)}>
    <slot/>
    <ChevronRight class="ml-auto h-4 w-4"/>
</a>