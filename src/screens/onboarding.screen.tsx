import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { Layout, Onboarding } from 'src/shared/components';
import { IMAGES } from 'src/shared/constants/image-map.const';

type OnboardingFirstStepScreenParams =
	NativeStackScreenProps<RootStackParamList>;

export const OnboardingFirstStepScreen = ({
	navigation,
}: OnboardingFirstStepScreenParams) => {
	const navigate = () =>
		navigation.navigate(NAVIGATION_KEYS.ONBOARDING_SECOND_STEP);

	return (
		<Layout>
			<Onboarding
				stepImg={IMAGES.firstStep}
				mainImg={IMAGES.mainFirstStep}
				title="Wspólne Oszczędności"
				description="Witaj w TesentouriX! Rozpocznij wygodne oszczędzanie na wyjątkowe doświadczenia. Oszczędzaj pieniądze na wyjątkowych przygodach kulinarnych i twórz niezapomniane wspomnienia. Twórz osobiste rezerwy oszczędnościowe na przyszłe rozkosze."
				narrowTitle
				onPress={navigate}
			/>
		</Layout>
	);
};

type OnboardingSecondStepScreenParams =
	NativeStackScreenProps<RootStackParamList>;

export const OnboardingSecondStepScreen = ({
	navigation,
}: OnboardingSecondStepScreenParams) => {
	const navigate = () =>
		navigation.navigate(NAVIGATION_KEYS.ONBOARDING_THIRD_STEP);

	return (
		<Layout>
			<Onboarding
				stepImg={IMAGES.secondStep}
				mainImg={IMAGES.mainSecondStep}
				title="Poznaj Doświadczenie Oszczędzania "
				description="Dołącz do TesentouriX i wzbogać swoją podróż oszczędnościową. Oszczędzaj na przygodach kulinarnych i odkrywaj świat wysokiej kuchni oraz unikalnych doświadczeń. Twórz osobiste rezerwy oszczędnościowe na przyszłe przyjemności."
				onPress={navigate}
			/>
		</Layout>
	);
};

type OnboardingThirdStepScreenParams =
	NativeStackScreenProps<RootStackParamList>;

export const OnboardingThirdStepScreen = ({
	navigation,
}: OnboardingThirdStepScreenParams) => {
	const navigate = () => navigation.navigate(NAVIGATION_KEYS.REGISTER);

	return (
		<Layout>
			<Onboarding
				stepImg={IMAGES.thirdStep}
				mainImg={IMAGES.mainThirdStep}
				title="Ciesz się Oszczędnościami, Dziel się Radością"
				description="Poczuj radość oszczędzania z TesentouriX. Oszczędzaj pieniądze, rozkoszuj się wykwintnymi doznaniami kulinarnymi i delektuj się różnorodnymi smakami świata. Twórz osobiste rezerwy oszczędnościowe na przyszłe przyjemności."
				onPress={navigate}
			/>
		</Layout>
	);
};
