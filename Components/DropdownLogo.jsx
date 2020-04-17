//@ts-nocheck
import React from "react";
import styled from "styled-components";

const Span = styled.p`
	border-style: solid;
	border-width: 2px;
	border-color: #fff;
	width: 35px;
	height: 0;
	margin: 0;
	border-radius: 10px;
`;

const Div = styled.div`
	margin: 0;
	margin-top: 20px;
	margin-right: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 20px;
`;

const DropdownLogo = (props) => {
	const { clicked } = props;
	return (
		<Div onClick={clicked}>
			<Span></Span>
			<Span></Span>
			<Span></Span>
		</Div>
	);
};

export default DropdownLogo;
