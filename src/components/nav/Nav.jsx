import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import notification from "../../img/notification.svg";
import banch from "../../img/banch.svg";
import logo from "../../img/logo.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Switch, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/themeSlice";
import { useEffect } from "react";

const Nav = () => {
	const length = useSelector((state) => state.cart.products.length);
	const theme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const items = [
		{
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.antgroup.com"
				>
					1st menu item
				</a>
			),
			key: "0",
		},
		{
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.aliyun.com"
				>
					2nd menu item
				</a>
			),
			key: "1",
		},
		{
			type: "divider",
		},
		{
			label: "3rd menu item（disabled）",
			key: "3",
			disabled: true,
		},
	];

	const { Search } = Input;

	const onSearch = () => {
		console.log("search");
	};

	const handleThemeChange = (checked) => {
		dispatch(changeTheme(checked ? "light" : "dark"));
	};

	return (
		<header
			className={`site-header sticky top-0 bg-white dark:bg-gray-800 dark:text-white   z-50 pb-[5px] shadow-sm`}
		>
			<Container>
				<div className="header__top top flex justify-between items-center border-b-2 pb-[10px]">
					<div className="flex space-x-[20px]">
						<p className="top__text items-center">
							hi!
							<Link to="/login" className="text-blue-600 underline">
								Sign in
							</Link>{" "}
							or{" "}
							<Link to="/" className="text-blue-600 underline">
								register
							</Link>
						</p>
						<ul className="top__list space-x-4 flex items-center">
							<li className="top__item">
								<Link className=" hover:text-blue-600 duration-200 ease-linear">
									Daily Deals
								</Link>
							</li>
							<li className="top__item">
								<Link className=" hover:text-blue-600 duration-200 ease-linear">
									Brand Outlet
								</Link>
							</li>
							<li className="top__item">
								<Link className=" hover:text-blue-600 duration-200 ease-linear">
									Help & Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className=" flex">
						<ul className="top__list space-x-4 flex items-center">
							<li className="top__item hover:text-blue-600 duration-200 ease-linear">
								<Link>Sell</Link>
							</li>
							<li className="top__item">
								<Link
									to="/"
									className=" hover:text-blue-600 duration-200 ease-linear"
								>
									Watch list
								</Link>
							</li>
							<li className="top__item">
								<Link className=" hover:text-blue-600 duration-200 ease-linear">
									My eBay
								</Link>
							</li>

							<li className="top__item">
								<Link to="/cart">
									<div className="relative">
										<AiOutlineShoppingCart className="text-2xl" />
										{length > 0 && (
											<span className="absolute top-[-15px] right-[-15px] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
												{length}
											</span>
										)}
									</div>
								</Link>
							</li>
						</ul>
						<Space direction="vertical" className="ml-3">
							<Switch
								checkedChildren="light"
								unCheckedChildren="dark"
								checked={theme === "light"}
								onChange={handleThemeChange}
							/>
						</Space>
					</div>
				</div>
				<div className="header__bottom bottom pt-[10px] flex items-center justify-between">
					<Link to="/">
						<img src={logo} alt="logo" className="mr-[20px]" />
					</Link>
					<Dropdown
						className="mr-[50px]"
						menu={{
							items,
						}}
					>
						<a onClick={(e) => e.preventDefault()}>
							<Space className="sdrop">
								Shop by category
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
					<Space direction="vertical">
						<Search
							className="w-[1000px]"
							placeholder="Search for anything"
							allowClear
							enterButton="Search"
							size="large"
							onSearch={onSearch}
						/>
					</Space>
					<p className="ml-[20px] search__text">Advanced</p>
				</div>
			</Container>
		</header>
	);
};

export default Nav;
