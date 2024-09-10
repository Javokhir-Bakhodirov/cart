import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/loading/Loading";

const Cart = lazy(() => import("./cart/Cart"));
const Products = lazy(() => import("./products/Products"));

const RouteController = () => {
	return useRoutes([
		{
			path: "/cart",
			element: (
				<Suspense fallback={<Loading />}>
					<Cart />
				</Suspense>
			),
		},
		{
			path: "/",
			element: (
				<Suspense fallback={<Loading />}>
					<Products />
				</Suspense>
			),
		},
	]);
};

export default RouteController;
