<script lang="ts">
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
</script>

<Tabs value="account" class="w-[400px]">

    <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>

    <TabsContent value="account">
        <p class="text-sm text-slate-500">Make changes to your account here. Click save when you're done.</p>
    </TabsContent>

    <TabsContent value="password">
        <p>password</p>
    </TabsContent>

</Tabs>