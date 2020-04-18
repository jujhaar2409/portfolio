//@ts-nocheck
import React, { useState, useRef } from "react";
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

const PageTitle = styled.h1`
	font-size: 50px;
	text-align: center;
	margin-top: 140px;
	margin-bottom: 70px;
`;

const Main = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
`;

const Layout = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef();
	const dropdownLogoRef = useRef();

	const onDropdownLogoClick = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	const clickOutsideDropdown = (e) => {
		if (e.target !== dropdownRef && isOpen) {
			onDropdownLogoClick();
		}
	};

	return (
		<>
			<Main onClick={clickOutsideDropdown} />
			<Container>
				<Logo>JS</Logo>
				<DropdownLogo
					dropdownLogoRef={dropdownLogoRef}
					clicked={onDropdownLogoClick}
				/>
			</Container>
			<Dropdown
				dropdownRef={dropdownRef}
				isOpen={isOpen}
				clicked={onDropdownLogoClick}
			/>
			<BodyContainer>
				<PageTitle>{props.title}</PageTitle>
				{props.children}
			</BodyContainer>
		</>
	);
};

export default Layout;
