import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { container, styles } from './homepage-top.styles';
import { Avatar } from '../avatar/avatar.component';
import { useAppStore } from 'src/store';
import NotesIcon from '../../../assets/icons/tabler_notes.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { IMAGES } from 'src/shared/constants/image-map.const';

type PageContainerProps = {};

export const HomePageTop: React.FunctionComponent<PageContainerProps> = () => {
	const insets = useSafeAreaInsets();

	const [user] = useAppStore((state) => [state.user]);

	return (
		<View style={styles.contentContainer}>
			<View style={styles.folderWrapper}>
				<View style={container(insets).topFolder}>
					<View style={styles.homepageHeader}>
						<View style={styles.userInfo}>
							<Avatar
								avatarUrl={user?.photoURL ?? undefined}
								disabled={true}
								onImageLibraryPress={() => {}}
								isAvatarMsg={false}
								extraAvatarStyles={styles.avatar}
								extraAvatarWrapperStyles={styles.avatarWrapper}
								placeholderImgSize={36}
							/>
							{user?.displayName && (
								<View style={styles.usernameBlock}>
									<Text style={styles.username}>
										{user?.displayName}
									</Text>
									<Text style={styles.grats}>
										Gratulacje!
									</Text>
								</View>
							)}
						</View>
						<View style={styles.usermenu}>
							<PressarableIcon
								icon={<NotesIcon />}
								onPress={() => {}}
								extraStyles={styles.notesIcon}
							/>
							<PressarableIcon
								icon={<SettingsIcon />}
								onPress={() => {}}
							/>
						</View>
					</View>

					<View style={styles.icomeBlock}>
						<Text style={styles.icomeTitle}>Całkowite saldo</Text>
						<View style={styles.sumWrapper}>
							<Text style={styles.dollars}>$2,362</Text>
							<Text style={styles.cents}>.43</Text>
						</View>
					</View>

					<View style={styles.budgetBlock}>
						<View style={styles.incomeInfo}>
							<Text style={styles.budgetTitle}>Dochód</Text>
							<Text
								style={styles.incomeDigits}
							>{`+${'5,560.43'}`}</Text>
						</View>
						<View style={styles.costsInfo}>
							<Text style={styles.budgetTitle}>Wydatki</Text>
							<Text
								style={styles.costsDigits}
							>{`-${'3,198.00'}`}</Text>
						</View>
					</View>
				</View>

				<View style={styles.imageWrapper}>
					<Image
						source={IMAGES.homepage}
						style={styles.homepageImg}
						resizeMode="contain"
					/>
				</View>
			</View>
		</View>
	);
};
