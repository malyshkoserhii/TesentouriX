import {
	Image,
	ImageSourcePropType,
	ScrollView,
	Text,
	View,
} from 'react-native';

import { styles } from './onboarding.styles';
import { Title } from '../title/title.component';
import { Button } from '../button/button.component';

type OnboardingProps = {
	stepImg: ImageSourcePropType;
	mainImg: ImageSourcePropType;
	title: string;
	description: string;
	onPress: () => void;
	narrowTitle?: boolean;
};

export const Onboarding: React.FunctionComponent<OnboardingProps> = ({
	stepImg,
	mainImg,
	title,
	description,
	onPress,
	narrowTitle = false,
}) => {
	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.pageContainer}>
				<View style={styles.titleWrapper}>
					<Image source={stepImg} style={styles.stepImg} />
					<Title />
				</View>
				<View style={styles.content}>
					<Text
						style={[styles.title, narrowTitle && styles.titleWidth]}
					>
						{title}
					</Text>
					<Text style={styles.description}>{description}</Text>
					<Image
						source={mainImg}
						style={styles.mainImg}
						resizeMode="contain"
					/>
					<Button text="Dalej" onPress={onPress} />
				</View>
			</View>
		</ScrollView>
	);
};
