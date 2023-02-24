export const isISODate = (text: string) => {
	if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(text)) return false;
	const d = new Date(text);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	return d instanceof Date && !isNaN(d) && d.toISOString() === text; // valid date
};
