<script>
	import Footer from './Footer.svelte';
import Header from './Header.svelte';
    import './styles.css';
</script>

<div class="flex flex-col min-h-screen text-slate-900">

    <Header />

	<div class="flex-1">
		<slot />
	</div>

	<Footer />
</div>

<style>
	
</style>
