<script lang="ts">
    import { page } from "$app/stores";
    export let to : string;
    $: href = `/docs${to}`;
</script>

<a {href} class="px-2.5 py-1.5 rounded-md capitalize
    { $page.url.pathname === href ? 'bg-slate-100 hover:bg-slate-100' : 'hover:bg-slate-50' }">
    <slot/>
</a>