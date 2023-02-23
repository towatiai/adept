<script lang="ts">
	import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import type { LayoutData } from "./$types";
    import './styles.css';

    export let data: LayoutData;
</script>

<div class="flex flex-col min-h-screen text-slate-900">

    <Header {data}/>

	<div class="flex-1">
		<slot />
	</div>

	<Footer />
</div>

<style>
	
</style>
