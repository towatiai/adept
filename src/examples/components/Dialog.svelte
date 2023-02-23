<script lang="ts">
	import Button from "@/components/ui/Button.svelte";
	import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
</script>

<Dialog>
    <DialogTrigger>
        <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>

        <DialogFooter>
            <Button>Save changes</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>