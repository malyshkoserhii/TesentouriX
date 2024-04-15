import * as React from 'react';

import { Text, View } from 'react-native';
import { Skeleton } from 'src/shared/components';
import { commonStyles } from 'src/shared/themes/common';

export const HomeScreen = () => {
	return (
		<Skeleton>
			<View>
				<Text style={commonStyles.subTitle}>Home Screen</Text>
				<Text style={{ fontSize: 24 }}>Home Screen</Text>
			</View>
		</Skeleton>
	);
};
