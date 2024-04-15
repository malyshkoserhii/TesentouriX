import * as React from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './loader.styles';

type LoaderProps = {
	size?: number;
	extraLoaderWrapperStyles?: StyleProp<ViewStyle>;
};

export const Loader: React.FunctionComponent<LoaderProps> = ({
	size = 16,
	extraLoaderWrapperStyles = {},
}) => {
	return (
		<View style={[styles.loaderWrapper, extraLoaderWrapperStyles]}>
			<ActivityIndicator size={size} />
		</View>
	);
};
