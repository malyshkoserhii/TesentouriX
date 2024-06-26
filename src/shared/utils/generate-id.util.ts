export const generateId = (digits: number = 16) => {
	const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
	const uuid = [];
	for (let i = 0; i < digits; i++) {
		uuid.push(str[Math.floor(Math.random() * str.length)]);
	}
	return uuid.join('');
};
