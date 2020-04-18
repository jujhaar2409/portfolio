//@ts-nocheck
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Div = styled.div`
	background-color: #fff;
	z-index: 100;
	position: fixed;
	top: -100%;
	left: 0;
	width: 90vw;
	height: auto;
	padding-top: 100px;
	padding-left: 20px;
	padding-right: 20px;
	transition: top ease-in-out 0.6s;
	border-radius: 50px;
	box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);

	&.open {
		top: 0%;
	}
`;

const H1 = styled.h1`
	padding: 0;
	margin: 0;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 50px;
	font-weight: bolder;
	line-height: 0.95;
	z-index: 100;
`;

const A = styled.a`
	color: #0088ff;
	font-size: 30px;
	font-weight: bold;
	display: block;
	padding: 0;
	margin: 0;
	margin-bottom: 45px;
`;

const LinkContainer = styled.div`
	width: 100%;
	margin-top: 68px;
`;

const MyLink = (props) => {
	return (
		<Link
			href={
				props.children != "Home"
					? "/" + props.children.toLowerCase()
					: "/"
			}>
			<A onClick={props.clicked}>{props.children}</A>
		</Link>
	);
};

const Dropdown = (props) => {
	return (
		<Div ref={props.dropdownRef} className={props.isOpen ? "open" : ""}>
			<H1>Find Your Way Around...</H1>
			<LinkContainer>
				<MyLink clicked={props.clicked}>Home</MyLink>
				<MyLink clicked={props.clicked}>Projects</MyLink>
				<MyLink clicked={props.clicked}>Skills</MyLink>
				<MyLink clicked={props.clicked}>Contact</MyLink>
			</LinkContainer>
		</Div>
	);
};

export default Dropdown;
