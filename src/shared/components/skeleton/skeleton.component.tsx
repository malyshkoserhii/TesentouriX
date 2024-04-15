import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './skeleton.styles';

type SkeletonProps = {
	children: React.ReactNode;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
};

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
	children,
	extraSafeAreaStyles = {},
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={[styles(insets).safeArea, extraSafeAreaStyles]}>
			{children}
		</View>
	);
};
