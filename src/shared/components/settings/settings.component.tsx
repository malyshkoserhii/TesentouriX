import * as React from 'react';
import {
	FlatList,
	ImageBackground,
	ImageSourcePropType,
	ListRenderItem,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { styles } from './settings.styles';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';

type Setting = {
	id: string;
	title: string;
	onPress?: () => void;
};

type SettingListItemProps = {
	setting: Setting;
};

const ListItem: React.FunctionComponent<SettingListItemProps> = ({
	setting,
}) => {
	return (
		<TouchableOpacity
			onPress={setting?.onPress}
			disabled={!setting?.onPress}
			style={styles.item}
		>
			<Text>{setting.title}</Text>
			<View style={styles.currencyBlock}>
				{setting.title === 'Waluta' && (
					<Text style={styles.currency}>USD</Text>
				)}
				<ArrowRightIcon />
			</View>
		</TouchableOpacity>
	);
};

const SettingListItem = React.memo(ListItem);

type SettingsListProps = {
	navigateToProfile: () => void;
	toggleWebview: () => void;
};

export const SettingsList: React.FunctionComponent<SettingsListProps> = ({
	navigateToProfile,
	toggleWebview,
}) => {
	const SETTINGS: Array<Setting> = React.useMemo(() => {
		return [
			{
				id: '1',
				title: 'Profil',
				onPress: navigateToProfile,
			},
			{
				id: '2',
				title: 'Waluta',
			},
			{
				id: '3',
				title: 'Polityka prywatności',
				onPress: toggleWebview,
			},
		];
	}, []);

	const renderItem: ListRenderItem<Setting> = React.useCallback(
		({ item }) => {
			return <SettingListItem setting={item} />;
		},
		[SETTINGS],
	);

	const keyExtractor = React.useCallback((item: Setting) => {
		return item.id;
	}, []);

	return (
		<FlatList
			data={SETTINGS}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			contentContainerStyle={styles.contentContainer}
		/>
	);
};
