<script>
	import Header from './Header.svelte';
    import './styles.css';
</script>

<div class="flex flex-col min-h-screen text-slate-900">

    <Header />

	<div class="flex-1">
		<slot />
	</div>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	
</style>
