export const formatNumber = (cell: number | null | undefined, options?: Intl.NumberFormatOptions) => {
	if (cell !== null && cell !== undefined) {
		const formatOptions: Intl.NumberFormatOptions = {
			notation: 'standard',
			...options,
		};

		const formatter = new Intl.NumberFormat('sr-Latn-RS', formatOptions);
		return formatter.format(cell);
	}
	return '-';
};
