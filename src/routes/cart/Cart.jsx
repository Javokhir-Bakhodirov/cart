import React from "react";
import Container from "../../components/container/Container";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";

const Cart = () => {
	const products = useSelector((state) => state.cart.products);

	const calculateSubtotal = () => {
		return products
			.reduce((acc, product) => acc + product.price * product.quantity, 0)
			.toFixed(2);
	};

	const calculateTax = (subtotal) => {
		return (subtotal * 0.12).toFixed(2);
	};

	const calculateTotal = () => {
		const subtotal = calculateSubtotal();
		const tax = calculateTax(subtotal);
		return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
	};
	return (
		<section className="cart-section pt-[50px]  dark:text-gray-100 pb-[150px] h-[100vh] ">
			<Container>
				<h1>Cart</h1>
				<div className="cart-summary bg-white border border-gray-300 p-6 rounded-md shadow-md mt-10">
					<div className="cart-summary__item flex justify-between text-gray-700 mb-3">
						<span className="cart-summary__label font-medium">Subtotal:</span>
						<span className="cart-summary__value font-medium">
							${calculateSubtotal()}
						</span>
					</div>
					<div className="cart-summary__item flex justify-between text-gray-700 mb-3">
						<span className="cart-summary__label font-medium">Tax (12%):</span>
						<span className="cart-summary__value font-medium">
							${calculateTax(calculateSubtotal())}
						</span>
					</div>
					<div className="cart-summary__item flex justify-between text-gray-900 font-semibold text-lg border-t pt-3">
						<span className="cart-summary__label">Total:</span>
						<span className="cart-summary__value">${calculateTotal()}</span>
					</div>
				</div>

				<ul className="grid grid-cols-4 gap-10 mt-10">
					{products.map((product) => (
						<Card key={product.id} product={product} cardType="cart" />
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Cart;
