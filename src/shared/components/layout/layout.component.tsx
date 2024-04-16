import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { containerStyles } from './layout.styles';
import { COLORS } from 'src/shared/themes';
import { IMAGES } from 'src/shared/constants/image-map.const';

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

type LayoutWithBgProps = {
	children: React.ReactNode;
	backgroundImage?: ImageSourcePropType;
};

export const LayoutWithBg: React.FunctionComponent<LayoutWithBgProps> = ({
	children,
	backgroundImage = IMAGES.layoutBg,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={containerStyles(insets).contentContainer}>
			<ImageBackground
				source={backgroundImage}
				style={containerStyles(insets).bgImg}
			>
				<View style={containerStyles(insets).safeArea}>{children}</View>
			</ImageBackground>
		</View>
	);
};
