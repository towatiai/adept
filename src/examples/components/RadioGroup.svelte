<script lang="ts">
	import Label from "@/components/ui/Label.svelte";
	import { RadioGroup } from "@/components/ui/radio-group";
	import RadioGroupItem from "@/components/ui/radio-group/RadioGroupItem.svelte";

    let value = "comfortable";
</script>

<RadioGroup bind:value>
    <div class="flex items-center space-x-2">
        <RadioGroupItem value="default" />
        <Label>Default</Label>
    </div>
    <div class="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" />
        <Label>Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
        <RadioGroupItem value="compact" />
        <Label>Compact</Label>
    </div>
</RadioGroup>