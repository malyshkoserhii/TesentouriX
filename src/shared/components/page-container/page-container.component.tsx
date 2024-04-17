import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './page-container.styles';

type PageContainerProps = {
	children: React.ReactNode;
};

export const PageContainer: React.FunctionComponent<PageContainerProps> = ({
	children,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles(insets).container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{children}
			</ScrollView>
		</View>
	);
};
