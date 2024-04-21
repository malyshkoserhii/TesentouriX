import * as React from 'react';
import { Image, View } from 'react-native';
import * as yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './create-note-form.styles';
import { useAppStore } from 'src/store';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { IMAGES } from 'src/shared/constants/image-map.const';
import TickIcon from '../../../assets/icons/tick.svg';
import { generateId } from 'src/shared/utils';
import { Note } from 'src/shared/types';

type CreateNoteFormValues = {
	title: string;
	description: string;
};

type CreateNoteFormProps = {
	back: () => void;
	note: Note | undefined;
	navigateToNotes: () => void;
};

export const createNoteFormSchema = yup.object().shape({
	title: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	description: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
});

export const CreateNoteForm: React.FunctionComponent<CreateNoteFormProps> = ({
	back,
	note,
	navigateToNotes,
}) => {
	const [addNote, updateNote] = useAppStore((state) => [
		state.addNote,
		state.updateNote,
	]);

	const formikRef = React.useRef<FormikProps<CreateNoteFormValues>>(null);

	const onSubmit = async (values: CreateNoteFormValues) => {
		if (note) {
			updateNote({
				id: note.id,
				title: values?.title,
				description: values?.description,
			});
			navigateToNotes();
			return;
		}
		addNote({
			id: generateId(),
			title: values?.title,
			description: values?.description,
		});
		back();
	};

	return (
		<Formik<CreateNoteFormValues>
			initialValues={{
				title: note?.title ?? '',
				description: note?.description ?? '',
			}}
			onSubmit={onSubmit}
			validateOnMount={true}
			validationSchema={createNoteFormSchema}
			innerRef={formikRef}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => {
				return (
					<KeyboardAwareScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.contentContainer}
					>
						<View style={styles.pageWrapper}>
							<View style={styles.form}>
								<Image
									source={IMAGES.notesImg}
									style={styles.image}
									resizeMode="contain"
								/>
								<Input
									value={values.title}
									placeholder="Nazwa"
									onChange={handleChange('title')}
									onBlur={handleBlur('title')}
									error={errors.title}
									touched={touched.title}
								/>

								<Input
									value={values.description}
									placeholder="Opis"
									onChange={handleChange('description')}
									onBlur={handleBlur('description')}
									error={errors.description}
									touched={touched.description}
								/>
							</View>

							<View style={styles.btnWrapper}>
								{note ? (
									<Button
										text="Zapisz zmiany"
										onPress={handleSubmit}
										extraBtnStyles={styles.button}
										extraContentWrapperStyles={
											styles.buttonContetnt
										}
										icon={<TickIcon />}
									/>
								) : (
									<Button
										text="Zaloguj sie"
										onPress={handleSubmit}
										extraBtnStyles={[styles.button]}
										extraContentWrapperStyles={
											styles.buttonContetnt
										}
										icon={<TickIcon />}
									/>
								)}
							</View>
						</View>
					</KeyboardAwareScrollView>
				);
			}}
		</Formik>
	);
};
