<script lang="ts">
	import { ToggleGroup, ToggleGroupButton } from "@/components/ui/toggle-group";
	import { AlignJustify, AlignLeft, AlignRight } from "lucide-svelte";
</script>

<ToggleGroup type="single">
    <ToggleGroupButton value="align-left">
        <AlignLeft class="w-4 h-4" />
    </ToggleGroupButton>
    <ToggleGroupButton value="align-justify">
        <AlignJustify class="w-4 h-4" />
    </ToggleGroupButton>
    <ToggleGroupButton value="align-right">
        <AlignRight class="w-4 h-4" />
    </ToggleGroupButton>
</ToggleGroup>