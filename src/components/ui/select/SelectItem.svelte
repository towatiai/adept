<script lang="ts">
	import { cn } from "$lib/utils";
	import { Check } from "lucide-svelte";
	import { Select } from "teil-ui";

    type SelectProps = {
        value: string
    }

    $: props = $$props as SelectProps;
</script>

<Select.Item {...props} class={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
    $$props.class
)}>
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Select.Indicator>
            <Check class="w-4 h-4"/>
        </Select.Indicator>
    </span>

    <Select.Text>
        <slot />
    </Select.Text>
</Select.Item>