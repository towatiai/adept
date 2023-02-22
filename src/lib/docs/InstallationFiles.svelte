<script lang="ts">
    import { HighlightSvelte} from "svelte-highlight";
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
    <TabsList>
        { #each components as component}
        <TabsTrigger value={component.file}>{component.file}</TabsTrigger>
        {/each}
    </TabsList>
    { #each components as component}
    <TabsContent value={component.file} class="p-0 relative {open ? 'overflow-auto max-h-[auto]' : 'overflow-hidden max-h-36'}">
        <HighlightSvelte code={component.content} />
        <div class="absolute bg-gradient-to-t from-slate-900/90 to-slate-900/30 inset-0">
            <div class="absolute bottom-3 flex justify-center inset-x-0">
                <button class="text-slate-900 text-xs rounded-md py-2 px-4 bg-slate-100 cursor-pointer" on:click={() => open = !open}>
                    View primitive
                </button>
            </div>
            
        </div>
    </TabsContent>
    {/each}
</Tabs>
{/if}
{/await}