import { AiOutlineLoading } from "react-icons/ai";
import React from "react";
import Container from "../container/Container";

const Loading = () => {
	return (
		<div className="h-[100vh] ">
			<Container>
				<div className="loading-wrapper animate-spin  flex justify-center items-center my-[200px]  ">
					{" "}
					<AiOutlineLoading className="text-[50px] text-[#155CFF]" />
				</div>
			</Container>
		</div>
	);
};

export default Loading;
