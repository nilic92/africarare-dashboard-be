export const calculateExcise = (bottle: number, alocoholPrecentage: number) => {
	const excisePerLiter = 46250 / 100;
	return excisePerLiter * bottle * (alocoholPrecentage / 100);
};
