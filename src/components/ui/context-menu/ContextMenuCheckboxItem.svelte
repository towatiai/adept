<script lang="ts">
	import { cn } from "$lib/utils";
    import { ContextMenu } from "teil-ui";
    import { Check } from "lucide-svelte";
</script>

<ContextMenu.ItemCheck {...$$props} class={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
    $$props.class
)}>
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenu.ItemIndicator>
            <svelte:fragment slot="checked">
                <Check class="h-4 w-4" />
            </svelte:fragment>
        </ContextMenu.ItemIndicator>
    </span>
    <slot/>
</ContextMenu.ItemCheck>