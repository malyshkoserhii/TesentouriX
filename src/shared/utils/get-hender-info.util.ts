import { GenderInfo } from '@src/store';
import { Character } from '../types';

export const addGenderUtil = (
	characters: Array<Character>,
	genderInfo: GenderInfo,
	favoriteCharacterName: string,
) => {
	const character = characters?.find(
		(character) => character?.name === favoriteCharacterName,
	);

	if (character?.gender === 'male') {
		return {
			...genderInfo,
			male: genderInfo?.male + 1,
		};
	}

	if (character?.gender === 'female') {
		return {
			...genderInfo,
			female: genderInfo?.female + 1,
		};
	}

	return {
		...genderInfo,
		others: genderInfo?.others + 1,
	};
};

export const removeGenderUtil = (
	characters: Array<Character>,
	genderInfo: GenderInfo,
	favoriteCharacterName: string,
) => {
	const character = characters?.find(
		(character) => character?.name === favoriteCharacterName,
	);

	if (character?.gender === 'male') {
		return {
			...genderInfo,
			male: genderInfo?.male - 1,
		};
	}

	if (character?.gender === 'female') {
		return {
			...genderInfo,
			female: genderInfo?.female - 1,
		};
	}

	return {
		...genderInfo,
		others: genderInfo?.others - 1,
	};
};
