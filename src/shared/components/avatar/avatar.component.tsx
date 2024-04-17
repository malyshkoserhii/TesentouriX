import * as React from 'react';
import {
	ActivityIndicator,
	Image,
	ImageStyle,
	StyleProp,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

import { styles } from './avatar.styles';
import Account from '../../../assets/icons/account.svg';
import { COLORS } from 'src/shared/themes';

type AvatarProps = {
	avatarUrl: string | undefined;
	onImageLibraryPress: () => void;
	disabled?: boolean;
	size?: number;
	placeholderImgSize?: number;
	extraAvatarWrapperStyles?: StyleProp<ViewStyle>;
	isAvatarMsg?: boolean;
	extraAvatarStyles?: StyleProp<ImageStyle>;
};

type AvatarPlaceholderProps = {
	onImageLibraryPress: () => void;
	placeholderImgSize: number;
	disabled?: boolean;
	extraAvatarWrapperStyles?: StyleProp<ViewStyle>;
};

const AvatarPlaceholder: React.FunctionComponent<AvatarPlaceholderProps> = ({
	onImageLibraryPress,
	disabled = false,
	extraAvatarWrapperStyles = {},
	placeholderImgSize,
}) => {
	return (
		<TouchableOpacity
			style={[styles.avatarPlaceholder, extraAvatarWrapperStyles]}
			onPress={onImageLibraryPress}
			disabled={disabled}
		>
			<Account
				width={placeholderImgSize}
				height={placeholderImgSize}
				fill={COLORS.dimGrey}
			/>
		</TouchableOpacity>
	);
};

export const Avatar: React.FunctionComponent<AvatarProps> = ({
	avatarUrl,
	onImageLibraryPress,
	extraAvatarWrapperStyles = {},
	extraAvatarStyles = {},
	disabled = false,
	placeholderImgSize = 60,
	isAvatarMsg = true,
	size = 12,
}) => {
	const [loading, setLoading] = React.useState(false);
	return (
		<TouchableOpacity
			style={[styles.avatarWrapper, extraAvatarWrapperStyles]}
			onPress={onImageLibraryPress}
			disabled={disabled}
		>
			<View style={styles.imgWrapper}>
				{Boolean(avatarUrl) ? (
					<Image
						source={{ uri: avatarUrl }}
						style={[styles.avatar, extraAvatarStyles]}
						onLoadStart={() => setLoading(true)}
						onLoadEnd={() => setLoading(false)}
						onError={() => setLoading(false)}
					/>
				) : (
					<AvatarPlaceholder
						onImageLibraryPress={onImageLibraryPress}
						extraAvatarWrapperStyles={extraAvatarWrapperStyles}
						placeholderImgSize={placeholderImgSize}
					/>
				)}
				{loading && (
					<ActivityIndicator
						size={size}
						style={styles.loader}
						color={COLORS.eerieBlack}
					/>
				)}
			</View>

			{isAvatarMsg && (
				<Text style={styles.text}>Dodaj zdjęcie profilowe</Text>
			)}
		</TouchableOpacity>
	);
};
