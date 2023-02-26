<script lang="ts">
	import { cn } from '$lib/utils';
	import { Circle } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Radio } from 'teil-ui';
	import type { ButtonProps } from 'teil-ui/components/Radio/Button.svelte';

	interface $$Props extends ButtonProps, HTMLAttributes<HTMLButtonElement> {};
	$: props = $$props as ButtonProps;
</script>

<Radio.Button {...props} class={cn(
	'group text:fill-slate-50 h-4 w-4 border border-slate-300 text-slate-900 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:text-slate-900 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 rounded-full',
	$$props.class
)}>
	<Radio.Indicator class="flex items-center justify-center">
		<Circle class="fill-slate-900 w-2.5 h-2.5 hidden group-aria-checked:block" />
	</Radio.Indicator>
</Radio.Button>
