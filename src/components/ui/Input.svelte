<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes, HTMLInputAttributes } from "svelte/elements";

    interface $$Props extends HTMLAttributes<HTMLInputElement>, HTMLInputAttributes{};
    export let value: string = "";
</script>

<input {...$$props} bind:value class={cn(
    "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
    $$props.class
)}>