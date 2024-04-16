import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { containerStyles } from './layout.styles';
import { COLORS } from 'src/shared/themes';

type LayoutProps = {
	children: React.ReactNode;
	backgroundColor?: string;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
	children,
	backgroundColor = COLORS.cultured,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={containerStyles(insets).contentContainer}>
			<View style={containerStyles(insets, backgroundColor).safeArea}>
				{children}
			</View>
		</View>
	);
};
