//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import DropdownLogo from "../Components/DropdownLogo";
import Dropdown from "../Components/Dropdown";
import NavItems from "../Components/NavItems";

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
	margin-top: 30px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	@media screen and (min-width: 700px) {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
	}
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
	margin-top: 110px;
	margin-bottom: 70px;
	@media screen and (min-width: 700px) {
		margin-top: 80px;
		margin-bottom: 0;
	}
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

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				!dropdownRef.current.contains(event.target) &&
				!dropdownLogoRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}
		// Bind the event listener
		document.addEventListener("click", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("click", handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		<>
			<Container>
				<Logo>JS</Logo>
				<NavItems />
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
			<PageTitle>{props.title}</PageTitle>
			<BodyContainer>{props.children}</BodyContainer>
		</>
	);
};

export default Layout;
