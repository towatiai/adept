<script lang="ts">
	import Button from "@/components/ui/Button.svelte";
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
	import { Menu } from "lucide-svelte";
	import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<header class="sticky top-0 w-full h-16 flex justify-between items-center border-b border-slate-200 px-4 md:px-8 bg-white z-40">
    <div class="flex gap-8 items-center">
        <span class="hidden md:inline-block">
            <a href="/">
                <span class="font-bold">Adept</span>
            </a>
            <span class="text-xs font-semibold py-1 px-2 bg-blue-100 rounded-md text-blue-500/80">WIP</span>
        </span>

        <span class="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button class="px-3">
                        <Menu class="w-5 h-5 mr-2"/>
                        Menu
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-52">
                    <DropdownMenuLabel>
                        Adept
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>

                    { #await data.lazy.components}
                        Loading...
                    {:then components} 
                        { #each components as componentName}
                        <DropdownMenuItem>
                            {@const href = `/docs/primitives/${componentName}`}
                            <a {href} class="capitalize">
                            {componentName?.replace('-', ' ')}
                            </a>
                        </DropdownMenuItem>
                        {/each}
                    {/await}
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </span>

        <a href="/docs">
            <span class="text-sm">Docs</span>
        </a>
        <a href="/docs/primitives/accordion">
            <span class="text-sm">Components</span>
        </a>
    </div>
</header>