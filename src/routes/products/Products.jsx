import React from "react";
import Container from "../../components/container/Container";

import apple from "../../img/sale.png";
import "./Products.css";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";

const Products = () => {
	const { data, loading, error } = useFetch("/products");

	if (loading) return <Loading />;

	if (error) return <p>Error: {error.message}</p>;
	return (
		<section className="sale-section pt-[50px] dark:bg-gray-800 dark:text-gray-100 pb-[150px] ">
			<Container>
				<div className="sale ">
					<h1 className="sale__title mb-[24px] dark:text-white">
						Featured Event
					</h1>
					<img src={apple} alt="" className="w-full" />
					<div className="sale__wrapper wrapper p-4 border-b-[1px] border-gray-500">
						<h2 className="wrapper__title">Up to 60% off Apple tech</h2>
						<p className="wrapper__text">Save on AirPods, iPhones, and more.</p>
					</div>
					<ul className="sale__list mt-[30px] grid grid-cols-5 gap-[35px]">
						{data.map((product) => (
							<Card key={product.id} product={product} cardType="full" />
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Products;
