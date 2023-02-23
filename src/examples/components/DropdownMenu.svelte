<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuShortcut,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuGroup,
		DropdownMenuSub,
		DropdownMenuSubContent,
		DropdownMenuSubTrigger
	} from '@/components/ui/dropdown-menu';
	import Button from '@/components/ui/Button.svelte';
	import {
		User,
		CreditCard,
		Settings,
		Users,
		Keyboard,
		UserPlus,
		Mail,
		MessageSquare,
		PlusCircle,
		Plus,
		LogOut
	} from 'lucide-svelte';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="outline">Open</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel>My Account</DropdownMenuLabel>
		<DropdownMenuSeparator />

		<DropdownMenuGroup>
			<DropdownMenuItem>
				<User class="h-4 w-4 mr-2" />
				<span>Profile</span>
				<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
			</DropdownMenuItem>

			<DropdownMenuItem>
				<CreditCard class="mr-2 h-4 w-4" />
				<span>Billing</span>
				<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
			</DropdownMenuItem>

			<DropdownMenuItem>
				<Settings class="mr-2 h-4 w-4" />
				<span>Settings</span>
				<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
			</DropdownMenuItem>

			<DropdownMenuItem>
				<Keyboard class="mr-2 h-4 w-4" />
				<span>Keyboard shortcuts</span>
				<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuGroup>
		<DropdownMenuSeparator />

		<DropdownMenuGroup>
			<DropdownMenuItem>
				<Users class="mr-2 h-4 w-4" />
				<span>Team</span>
			</DropdownMenuItem>

			<DropdownMenuSub>
				<DropdownMenuSubTrigger slot="item">
					<UserPlus class="mr-2 h-4 w-4" />
					<span>Invite users</span>
				</DropdownMenuSubTrigger>
				<DropdownMenuSubContent slot="menu">
					<DropdownMenuItem>
						<Mail class="mr-2 h-4 w-4" />
						<span>Email</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<MessageSquare class="mr-2 h-4 w-4" />
						<span>Message</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<PlusCircle class="mr-2 h-4 w-4" />
						<span>More...</span>
					</DropdownMenuItem>
				</DropdownMenuSubContent>
			</DropdownMenuSub>

			<DropdownMenuItem>
				<Plus class="mr-2 h-4 w-4" />
				<span>New Team</span>
				<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
            <LogOut class="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>

	</DropdownMenuContent>
</DropdownMenu>
