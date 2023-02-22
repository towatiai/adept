<script lang="ts">
	import type { PageData } from "./$types";
	import { page } from "$app/stores";

    export let data: PageData;
</script>

<div class="grid grid-cols-[220px_minmax(0,1fr)] gap-10 px-4">
    <aside class="border-r border-slate-200 py-6 pr-4 sticky top-16 shrink-0 w-full h-[calc(100vh-3.5rem)]">
        <div>
            <h4 class="text-sm font-semibold mb-2 pl-2">Components</h4>
            <div class="flex flex-col text-sm">
                { #each data.components as componentName }
                    {@const href = `/docs/${componentName}`}
                    <a {href} class="px-2.5 py-1.5 rounded-md capitalize
                        { $page.url.pathname === href ? 'bg-slate-100 hover:bg-slate-100' : 'hover:bg-slate-50' }">
                        {componentName}
                    </a>
                {/each}
            </div>
        </div>
    </aside>
    
    <main class="flex-1">
        <slot />
    </main>
</div>
