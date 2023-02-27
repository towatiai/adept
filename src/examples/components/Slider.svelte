<script lang="ts">
	import Slider from "@/components/ui/Slider.svelte";

    let value = [50];
</script>

<Slider bind:value max={100} class="w-[60%]"/>