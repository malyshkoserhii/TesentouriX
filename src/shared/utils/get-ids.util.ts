export const getIds = (urls: Array<string>) => {
	return urls?.map((url) => {
		return getEntityId(url);
	});
};

export const getEntityId = (url: string) => {
	const arr = url.split('/');
	const res = arr.filter((el) => el).join(' ');

	return res.slice(-2);
};
