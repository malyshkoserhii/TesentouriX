import * as React from 'react';
import {
	FlatList,
	Image,
	ListRenderItem,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { styles } from './notes.styles';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import NotesIcon from '../../../assets/icons/notes.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import { Note } from 'src/shared/types';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { COLORS } from 'src/shared/themes';

type NotesListItemProps = {
	note: Note;
	onNote: (note: Note) => void;
};

const ListItem: React.FunctionComponent<NotesListItemProps> = ({
	note,
	onNote,
}) => {
	const onPress = () => {
		onNote(note);
	};

	return (
		<TouchableOpacity onPress={onPress} style={styles.item}>
			<View style={styles.content}>
				<Image
					source={IMAGES.notesImg}
					style={styles.image}
					resizeMode="cover"
				/>
				<View style={styles.textWrapper}>
					<Text style={styles.title}>{note.title}</Text>
					<Text style={styles.description} numberOfLines={1}>
						{note.description}
					</Text>
				</View>
			</View>
			<ArrowIcon style={styles.arrow} />
		</TouchableOpacity>
	);
};

const NoteListItem = React.memo(ListItem);

type NotesListProps = {
	onNote: (note: Note) => void;
	notes: Array<Note>;
	onPlus: () => void;
};

export const NotesList: React.FunctionComponent<NotesListProps> = ({
	onNote,
	notes,
	onPlus,
}) => {
	const renderItem: ListRenderItem<Note> = React.useCallback(
		({ item }) => {
			return <NoteListItem note={item} onNote={onNote} />;
		},
		[notes],
	);

	const keyExtractor = React.useCallback((item: Note) => {
		return item.id;
	}, []);

	const NotesEmpty = React.useCallback(() => {
		return (
			<View style={styles.emptyWrapper}>
				<View style={styles.emptyTextWrapper}>
					<View>
						<View style={styles.emptyContainerText}>
							<NotesIcon />
							<Text style={styles.emptyText}>
								Utwórz pierwszą notatkę
							</Text>
						</View>
						<PressarableIcon
							onPress={onPlus}
							icon={
								<PlusIcon
									strokeWidth={2}
									stroke={COLORS.white}
								/>
							}
							extraStyles={styles.plus}
						/>
					</View>
				</View>
			</View>
		);
	}, []);

	return (
		<FlatList
			data={notes}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			contentContainerStyle={styles.contentContainer}
			ListEmptyComponent={<NotesEmpty />}
		/>
	);
};
