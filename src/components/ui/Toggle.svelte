<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { Toggle } from 'teil-ui';

	const toggleVariants = cva(
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors aria-pressed:bg-slate-200 dark:hover:bg-slate-800 dark:aria-pressed:bg-slate-700 focus:outline-none dark:text-slate-100 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-offset-slate-900 hover:bg-slate-100  dark:hover:text-slate-100 dark:aria-pressed:text-slate-100',
		{
			variants: {
				variant: {
					default: 'bg-transparent',
					outline: 'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700'
				},
				size: {
					default: 'h-10 px-3',
					sm: 'h-9 px-2.5',
					lg: 'h-11 px-5'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

    interface $$Props extends HTMLButtonAttributes, VariantProps<typeof toggleVariants> {}

    export let variant : $$Props["variant"] = "default";
    export let size : $$Props["size"] = "default";
</script>

<Toggle class={cn(toggleVariants({variant, size, class: $$props.class}))}>
    <slot/>
</Toggle>
