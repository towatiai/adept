<script lang="ts">
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectLabel,
		SelectTrigger,
		SelectValue,
		SelectItem,
		SelectSeparator
	} from '@/components/ui/select';
</script>

<Select>
	<SelectTrigger class="w-[180px]">
		<SelectValue placeholder="Select a fruit" />
	</SelectTrigger>
	<SelectContent>
		<SelectGroup>
			<SelectLabel>Fruits</SelectLabel>
			<SelectItem value="apple">Apple</SelectItem>
			<SelectItem value="banana">Banana</SelectItem>
			<SelectItem value="blueberry">Blueberry</SelectItem>
			<SelectItem value="grapes">Grapes</SelectItem>
			<SelectItem value="pineapple">Pineapple</SelectItem>
		</SelectGroup>
		<SelectSeparator />
		<SelectGroup>
			<SelectLabel>Vegetables</SelectLabel>
			<SelectItem value="aubergine">Aubergine</SelectItem>
			<SelectItem value="broccoli">Broccoli</SelectItem>
			<SelectItem value="carrot">Carrot</SelectItem>
			<SelectItem value="courgette">Courgette</SelectItem>
			<SelectItem value="leek">Leek</SelectItem>
		</SelectGroup>
		<SelectSeparator />
		<SelectGroup>
			<SelectLabel>Meat</SelectLabel>
			<SelectItem value="beef">Beef</SelectItem>
			<SelectItem value="chicken">Chicken</SelectItem>
			<SelectItem value="lamb">Lamb</SelectItem>
			<SelectItem value="pork">Pork</SelectItem>
		</SelectGroup>
	</SelectContent>
</Select>
