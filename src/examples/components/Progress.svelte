<script lang="ts">
	import Progress from "@/components/ui/Progress.svelte";
	import { onMount } from "svelte";
    
    let value = 13;

    onMount(() => {
        const timer = setTimeout(() => value = 66, 500);
        return () => clearTimeout(timer);
    });
</script>

<Progress {value} class="w-[60%]"/>