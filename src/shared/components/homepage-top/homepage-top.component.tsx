import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

import { container, styles } from './homepage-top.styles';
import { Avatar } from '../avatar/avatar.component';
import { useAppStore } from 'src/store';
import NotesIcon from '../../../assets/icons/tabler_notes.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { IMAGES } from 'src/shared/constants/image-map.const';

type PageContainerProps = {
	navigateToSettings: () => void;
	navigateToNotes: () => void;
};

export const HomePageTop: React.FunctionComponent<PageContainerProps> = ({
	navigateToSettings,
	navigateToNotes,
}) => {
	const insets = useSafeAreaInsets();

	const [
		user,
		getAllBudgets,
		addBudget,
		updateBudget,
		removeBudget,
		saldo,
		countSaldo,
	] = useAppStore((state) => [
		state.user,
		state.getAllBudgets,
		state.addBudget,
		state.updateBudget,
		state.removeBudget,
		state.saldo,
		state.countSaldo,
	]);

	const isFocused = useIsFocused();

	React.useEffect(() => {
		getAllBudgets();
		countSaldo();
	}, [addBudget, updateBudget, removeBudget, isFocused]);

	const saldoValue = (saldo: number) => {
		const value = String(saldo).split('.');

		return {
			dollars: value[0],
			cents: value[1] ?? '00',
		};
	};

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
								extraAvatarMainWrapperStyles={
									styles.avatarWrapper
								}
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
								onPress={navigateToNotes}
								extraStyles={styles.notesIcon}
							/>
							<PressarableIcon
								icon={<SettingsIcon />}
								onPress={navigateToSettings}
							/>
						</View>
					</View>

					<View style={styles.incomeBlock}>
						<Text style={styles.icomeTitle}>Całkowite saldo</Text>
						<View style={styles.sumWrapper}>
							<Text numberOfLines={1} style={styles.dollars}>
								${saldoValue(saldo?.saldo).dollars}
							</Text>
							<Text numberOfLines={1} style={styles.cents}>
								.{saldoValue(saldo?.saldo).cents}
							</Text>
						</View>
					</View>

					<View style={styles.budgetBlock}>
						<View style={styles.incomeInfo}>
							<Text style={styles.budgetTitle}>Dochód</Text>
							<Text style={styles.incomeDigits}>
								{saldo.dochod === 0 ? 0 : `+${saldo.dochod}`}
							</Text>
						</View>
						<View style={styles.costsInfo}>
							<Text style={styles.budgetTitle}>Wydatki</Text>
							<Text style={styles.costsDigits}>
								{saldo.wydatki === 0 ? 0 : `-${saldo.wydatki}`}
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.imageWrapper}>
					<Image
						source={IMAGES.homepage}
						style={styles.homepageImg}
					/>
				</View>
			</View>
		</View>
	);
};
