import * as React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { styles } from './note.styles';
import { Note as NoteType } from 'src/shared/types';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { Button } from '../button/button.component';
import { useAppStore } from 'src/store';

type NoteProps = {
	note: NoteType;
	navigateToUpdate: () => void;
};

export const Note: React.FunctionComponent<NoteProps> = ({
	note,
	navigateToUpdate,
}) => {
	const [updateNote] = useAppStore((state) => [state.updateNote]);

	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View>
				<Image source={IMAGES.notesImg} style={styles.img} />
				<View style={styles.textWrapper}>
					<Text style={styles.title}>{note.title}</Text>
					<Text style={styles.description}>{note.description}</Text>
				</View>
			</View>
			<Button text="Edytować" onPress={navigateToUpdate} />
		</ScrollView>
	);
};
