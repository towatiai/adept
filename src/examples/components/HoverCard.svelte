<script lang="ts">
	import Button from "@/components/ui/Button.svelte";
    import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
    import { Users } from "lucide-svelte";

</script>

<HoverCard>
    <HoverCardTrigger>
        <Button variant="link">@sveltejs</Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
            <img src="https://avatars.githubusercontent.com/u/23617963?s=200&v=4" alt="Svelte logo" class="h-10 w-10 rounded-full "/>
            <div class="space-y-1">
                <h4 class="text-sm font-semibold">@sveltejs</h4>
                <p class="text-sm">Cybernetically enhanced web apps</p>
                <div class="flex items-center pt-2">
                    <Users class="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span class="text-xs text-slate-500 dark:text-slate-400">
                        1.6k followers
                    </span>
                </div>
            </div>
        </div>
    </HoverCardContent>
</HoverCard>