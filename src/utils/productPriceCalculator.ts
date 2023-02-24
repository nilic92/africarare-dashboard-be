// import { IProcurementProduct } from 'models/procurement';

// const productPriceCalculator = (products: IProcurementProduct[], vatRate: number) => {
// 	const increaseBy = 1 + vatRate / 100;
// 	const productsWithPrices = products.map((product) => ({
// 		...product,
// 		priceNet: product.quantity * product.pricePerUnit,
// 		price: product.quantity * product.pricePerUnit * increaseBy,
// 	}));
// 	const priceNet = productsWithPrices.reduce((prevValue: number, product) => prevValue + product.priceNet, 0);
// 	const price = productsWithPrices.reduce((prevValue: number, product) => prevValue + product.price, 0);

// 	return {
// 		productsWithPrices,
// 		priceNet,
// 		price,
// 	};
// };

// export default productPriceCalculator;
