<script lang="ts">
    import { HighlightSvelte} from "svelte-highlight";
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
	import Button from "@/components/ui/Button.svelte";
    import { IconBrandSvelte, IconBrandTypescript } from "@tabler/icons-svelte";

    export let files: Promise<{ file: string, content: string}[]>;

    let open = false;
</script>

{#await files}
Loading..
{:then components}
{#if components.length === 0}
No installation files
{:else}
<Tabs value={components[0].file}>
    <div class="max-w-[100%] overflow-y-auto pb-2">
        <TabsList>
            { #each components as component}
            <TabsTrigger value={component.file}>
                { @const filetype = component.file.split('.').at(-1)}
                { #if filetype === "svelte" }
                <IconBrandSvelte class="w-4 h-4 mr-2 text-orange-600" />
                {:else if filetype === "ts" }
                <IconBrandTypescript class="w-4 h-4 mr-2 text-blue-600"/>
                { /if }
                {component.file.split('.').at(0)}
            </TabsTrigger>
            {/each}
        </TabsList>
    </div>
    { #each components as component}
    <TabsContent value={component.file} class="p-0 m-0 relative {open ? 'overflow-auto max-h-[auto]' : 'overflow-hidden max-h-36'}">
        <HighlightSvelte code={component.content} class="source text-sm" />
        <div class="absolute bg-gradient-to-t from-slate-900/90 to-slate-900/30 {open ? 'bottom-0 inset-x-0' : 'inset-0'}">
            <div class="absolute bottom-3 flex justify-center inset-x-0">
                <Button variant="subtle" size="sm" class="h-8" on:click={() => open = !open }>
                    {open ? 'Collapse' : 'View primitive'}
                </Button>
            </div>
        </div>
    </TabsContent>
    {/each}
</Tabs>
{/if}
{/await}

<style>
    :global(.source .hljs) {
        padding-bottom: 64px;
    }
</style>