<script lang="ts">
	import type { PageData } from "./$types";
    import ExampleBox from "$lib/docs/ExampleBox.svelte";
	import InstallationFiles from "$lib/docs/InstallationFiles.svelte";
    
    export let data: PageData;
</script>

<svelte:head>
    <title>{data.attributes.title} - Adept</title>
</svelte:head>

<div class="xl:grid xl:grid-cols-[minmax(0,1fr)_280px] gap-6">
    <div class="py-6">
        <h1 class="text-[48px] font-extrabold">{data.attributes.title}</h1>

        <p class="max-w-[95%]">
            { data.attributes.description }
        </p>

        <div class="border-b border-slate-200 my-4"></div>

        <ExampleBox example={data.attributes.example} source={ data.lazy.source } />

        <h2 class="mt-12 text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">Installation</h2>

        <p class="mt-4 mb-8">
            Copy and paste the following code into your project.
        </p>

        <InstallationFiles files={data.lazy.files}/>
    </div>

    <nav class="hidden xl:block text-sm py-6 sticky top-16 h-[calc(100vh-3.5rem)]">
        <h4 class="font-semibold">On this page</h4>
    </nav>

</div>