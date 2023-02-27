<script lang="ts">
    import Button from "@/components/ui/Button.svelte";
    import Input from "@/components/ui/Input.svelte";
    import Label from "@/components/ui/Label.svelte";
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
</script>

<Tabs value="account" class="w-[400px]">

    <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>

    <TabsContent value="account">
        <p class="text-sm text-slate-500">Make changes to your account here. Click save when you're done.</p>
        <div class="grid gap-2 py-4">
            <div class="space-y-1">
                <Label>Name</Label>
                <Input value="Pedro Duarte"/>
            </div>
            <div class="space-y-1">
                <Label>Username</Label>
                <Input value="@peduarte"/>
            </div>
        </div>
        
        <Button>Save changes</Button>
    </TabsContent>

    <TabsContent value="password">
        <p class="text-sm text-slate-500">Change your password here. After saving, you'll be logged out.</p>
        <div class="grid gap-2 py-4">
            <div class="space-y-1">
                <Label>Current password</Label>
                <Input type="password"/>
            </div>
            <div class="space-y-1">
                <Label>New password</Label>
                <Input type="password"/>
            </div>
        </div>
        
        <Button>Save password</Button>
    </TabsContent>

</Tabs>