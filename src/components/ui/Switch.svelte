<script lang="ts">
	import { cn } from "$lib/utils";
	import { Switch } from "teil-ui";
</script>

<Switch.Track {...$$props} class={cn(
    "group peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 aria-checked:bg-slate-900",
    $$props.class
)}>
    <Switch.Thumb class={cn("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform translate-x-0 group-aria-checked:translate-x-5")}></Switch.Thumb>
</Switch.Track>