<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


</script>

<Accordion class="w-[450px]" type="single">
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
</Accordion>