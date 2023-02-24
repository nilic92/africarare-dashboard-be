import { formatNumber } from './numberFormatter';

export const quantityFormatter = ({
	quantity,
	unit,
}: {
	quantity: number | null | undefined;
	unit: string | null | undefined;
}) => {
	if (isNaN(quantity as number) || !unit) return '-';
	return `${formatNumber(quantity)} ${unit}`;
};
