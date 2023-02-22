<script lang="ts">
	import { Checkbox } from "teil-ui";
    import { Check } from "lucide-svelte";
	import { cn } from "$lib/utils";
</script>

<Checkbox.Box {...$$props} class={cn(
    "peer h-4 w-4 shrink-0 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
    $$props.class
)}>
    <Checkbox.Indicator class={cn("flex items-center justify-center", $$props.class)}>
        <svelte:fragment slot="checked">
            <Check class="h-4 w-4" />
        </svelte:fragment>
    </Checkbox.Indicator>
</Checkbox.Box>