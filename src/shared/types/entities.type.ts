import { ImageSourcePropType } from 'react-native';

export type Note = {
	id: string;
	title: string;
	description: string;
};

export enum BudgetType {
	WYDATEK = 'WYDATEK',
	SKARBONKI = 'SKARBONKI',
	DOCHOD = 'DOCHOD',
}

export type ImageData = {
	source: ImageSourcePropType;
	index: number;
};

export type Budget = {
	id: string;
	name: string;
	total: string;
	image: ImageData;
	date: string;
	type: BudgetType;
	deposit?: string;
	bonus?: number;
};
