//@ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";

import DropdownLogo from "../Components/DropdownLogo";
import Dropdown from "../Components/Dropdown";

const Container = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	width: 100vw;
	height: 57px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #0088ff;
	color: #fff;
	padding: 0px 20px 0px 20px;
	font-family: "Bahnschrift";
	letter-spacing: -2px;
	z-index: 101;
`;

const BodyContainer = styled.div`
	margin-top: 100px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Logo = styled.h1`
	font-size: 34px;
	font-weight: bold;
	margin: 0;
	padding: 0;
	margin-top: 11px;
	font-stretch: condensed;
`;

const Layout = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const onDropdownLogoClick = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	return (
		<>
			<Container>
				<Logo>JS</Logo>
				<DropdownLogo clicked={onDropdownLogoClick} />
			</Container>
			<Dropdown isOpen={isOpen} />
			<BodyContainer>{props.children}</BodyContainer>
		</>
	);
};

export default Layout;
