import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import ref from "../../img/ref.svg";
import star from "../../img/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { removeFromCart } from "../../redux/cartSlice";
import { notification } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = ({ product, cardType }) => {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.cart.products);

	const calculateQuantity = () => {
		return products
			.reduce((acc, product) => acc + product.quantity, 0)
			.toFixed(2);
	};
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < Math.round(rating); i++) {
			stars.push(
				<img
					className="text-gold "
					key={i}
					src={star}
					alt="star"
					width={18}
					height={18}
				/>
			);
		}
		return stars;
	};

	const handleAddToCart = (product) => {
		dispatch(addToCart({ ...product, quantity: 1 }));
	};
	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};

	const calculateSubtotal = () => {
		return (product.price * product.quantity).toFixed(2);
	};
	return (
		<li
			data-card-type={cardType}
			className="card grid grid-cols-1 dark:bg-slate-400 rounded-[10px] overflow-hidden items-center justify-center  text-center"
		>
			<Link to={`/products/${product.id}`} className="card__link">
				<img src={product.images[0]} className="card__img" alt="" />
			</Link>
			<div className="p-3">
				<p className="card__text line-clamp-2">{product.title}</p>
				<p className="productCard__rating hidden  items-center mb-1">
					<span className="stars flex mr-5">{renderStars(product.rating)}</span>{" "}
					{product.rating}/<span>5</span>
				</p>
				<p className="card__price">${product.price}</p>
				<p className="card__was text-black opacity-45 hidden text-start">
					Was:{" "}
					<span className="line-through">
						${Math.floor(product.price + 20)}
					</span>
				</p>
				<p className="card__ship">Free shipping</p>
				<p className="card__sale opacity-45 hidden">
					<span className="line-through span mr-[10px]">
						${Math.floor(product.price + 20)}
					</span>{" "}
					-
					<span>
						{Math.floor(
							((product.price + 20 - product.price) / (product.price + 20)) *
								100
						)}
						% OFF
					</span>
				</p>
				<p className="card__ref hidden">
					{" "}
					<img src={ref} alt="" />
					eBay Refurbished
				</p>

				<div className="hidden_wrapper mt-[40px] flex items-center justify-between">
					<p className="hidden__text">SPONSORED</p>
					<button className="" onClick={() => handleAddToCart(product)}>
						<AiOutlineShoppingCart className="text-2xl" />
					</button>
				</div>
				<div className="cart__wrapper">
					<p className="card__price">${product.price}</p>
					<p className="card__subtotal">Subtotal: ${calculateSubtotal()}</p>
					<div className="cart-exist flex items-center justify-between w-[150px] mt-4">
						<button
							className="btn px-[24px] py-[8px] rounded-md text-white bg-blue-600"
							onClick={() => handleRemoveFromCart(product)}
						>
							-
						</button>
						<p>{product.quantity}</p>
						<button
							className="btn px-[24px] py-[8px] rounded-md text-white bg-blue-600"
							onClick={() => handleAddToCart(product)}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Card;
