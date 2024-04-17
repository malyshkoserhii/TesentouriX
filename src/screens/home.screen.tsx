import * as React from 'react';

import { View } from 'react-native';
import { logout } from 'src/shared/api';
import { Button, HomePageTop, PageContainer } from 'src/shared/components';

export const HomeScreen = () => {
	return (
		<PageContainer>
			<HomePageTop />
			{/* <Button text="Logout" onPress={logout} /> */}
		</PageContainer>
	);
};
