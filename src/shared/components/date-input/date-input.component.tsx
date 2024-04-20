import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';

import { styles } from './date-input.styles';
import { COLORS, FONTS } from 'src/shared/themes';
import { Button } from '../button/button.component';

LocaleConfig.locales['pl'] = {
	monthNames: [
		'Styczeń',
		'Luty',
		'Marzec',
		'Kwiecień',
		'Maj',
		'Czerwiec',
		'Lipiec',
		'Sierpień',
		'Wrzesień',
		'Październik',
		'Listopad',
		'Grudzień',
	],
	dayNames: [
		'Poniedziałek',
		'Wtorek',
		'Środa',
		'Czwartek',
		'Piątek',
		'Sobota',
		'Niedizela',
	],
	dayNamesShort: ['PON', 'WT', 'ŚR', 'CZW', 'PT', 'SOB', 'NIEDZ'],
	today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'pl';

type DateInputProps = {
	isVisible: boolean;
	onOpenCalendar: () => void;
	onCloseCalendar: () => void;
	onDayPress: (day: DateData) => void;
	date: string;
};

export const DateInput: React.FunctionComponent<DateInputProps> = ({
	date,
	isVisible,
	onOpenCalendar,
	onCloseCalendar,
	onDayPress,
}) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.inputBox}>
					<TouchableOpacity
						onPress={onOpenCalendar}
						style={styles.input}
						activeOpacity={0.3}
					>
						<Text style={styles.inputText}>{date}</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Modal
				isVisible={isVisible}
				style={styles.modal}
				backdropOpacity={0.6}
				animationInTiming={500}
				animationOutTiming={500}
				backdropTransitionInTiming={500}
				backdropTransitionOutTiming={0}
			>
				<Calendar
					style={styles.calendarContainer}
					onDayPress={onDayPress}
					markedDates={{
						[date]: {
							selected: true,
							disableTouchEvent: true,
							selectedColor: COLORS.carmineRed,
						},
					}}
					theme={{
						textSectionTitleColor: COLORS.oldSilver,
						arrowColor: COLORS.coolGrey,
						dayTextColor: COLORS.eerieBlack,
						todayTextColor: COLORS.carmineRed,
						monthTextColor: COLORS.eerieBlack,
						textMonthFontFamily: FONTS.Lato.bold,
						textDayFontFamily: FONTS.Lato.medium,
						textDayHeaderFontFamily: FONTS.Lato.medium,
						agendaDayTextColor: COLORS.kuCrimson,
					}}
				/>

				<Button text="Wybierz" onPress={onCloseCalendar} />
			</Modal>
		</>
	);
};
