<script lang="ts">
    import { HighlightSvelte} from "svelte-highlight";
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
	import { getExample } from "@/examples";
    import theme from "svelte-highlight/styles/github-dark";

	export let example: string;
    export let source: Promise<string>;
</script>

<svelte:head>
    {@html theme}
</svelte:head>

<Tabs value="preview">

    <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>

    <TabsContent value="preview" class="p-10 flex justify-center items-center min-h-[350px]">
            { #await getExample(example)}
            <span>Loading...</span>
            {:then example}
            <svelte:component this={example}></svelte:component>
            {:catch error}
            <span>{error}</span>
            {/await}
    </TabsContent>

    <TabsContent value="code" class="p-0 overflow-auto min-h-[350px]">
        { #await source}
        <span>Loading...</span>
        {:then code}
        <HighlightSvelte {code} class="text-sm"/>
        {:catch error}
        <span>{error}</span>
        {/await}
    </TabsContent>

</Tabs>

<style>
    :global(.hljs) {
        min-height: 350px;
    }
</style>