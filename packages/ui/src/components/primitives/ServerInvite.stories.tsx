import type { Story } from '@ladle/react';
import { mockChannelWithSettings, mockPublicServer } from '~ui/test/props';
import { ServerInviteRenderer } from './ServerInvite';

type ServerInviteRendererProps = React.ComponentPropsWithoutRef<
	typeof ServerInviteRenderer
>;

export const InServer: Story<ServerInviteRendererProps> = (props) => (
	<ServerInviteRenderer {...props} />
);

InServer.args = {
	server: mockPublicServer(),
	channel: mockChannelWithSettings({
		// AO's Discord server
		inviteCode: 'sxDN2rEdwD',
	}),
	location: 'Search Results',
	isUserInServer: 'in_server',
};

export const NotInServer = InServer.bind({});

NotInServer.args = {
	server: mockPublicServer(),
	channel: mockChannelWithSettings({
		// AO's Discord server
		inviteCode: 'sxDN2rEdwD',
	}),
	isUserInServer: 'not_in_server',
};
