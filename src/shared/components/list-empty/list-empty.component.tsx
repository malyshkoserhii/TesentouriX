import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './list-empty.styles';
import NotesIcon from '../../../assets/icons/notes.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { COLORS } from 'src/shared/themes';

type ListEmptyProps = {
	text: string;
	onPlus: () => void;
};

export const ListEmpty: React.FunctionComponent<ListEmptyProps> = ({
	text,
	onPlus,
}) => {
	return (
		<View style={styles.emptyWrapper}>
			<View style={styles.emptyTextWrapper}>
				<View>
					<View style={styles.emptyContainerText}>
						<NotesIcon />
						<Text style={styles.emptyText}>{text}</Text>
					</View>
					<PressarableIcon
						onPress={onPlus}
						icon={
							<PlusIcon strokeWidth={2} stroke={COLORS.white} />
						}
						extraStyles={styles.plus}
					/>
				</View>
			</View>
		</View>
	);
};
