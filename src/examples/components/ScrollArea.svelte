<script lang="ts">
	import { ScrollArea } from "@/components/ui/scroll-area";
	import Separator from "@/components/ui/Separator.svelte";

    const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

</script>

<ScrollArea class="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700">
    <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
        <ul>
            { #each tags as tag }
            <li class="text-sm">
                {tag}
            </li>
            <Separator class="my-2"/>
        { /each }
        </ul>
        
    </div>
</ScrollArea>