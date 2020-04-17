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
	width: 100vw;
	height: 90vh;
	padding-top: 100px;
	padding-left: 20px;
	padding-right: 20px;
	transition: top ease-in-out 0.6s;
	border-bottom: solid #000 1px;

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
		<Link href={"/" + props.children}>
			<A>{props.children}</A>
		</Link>
	);
};

const Dropdown = (props) => {
	return (
		<Div className={props.isOpen ? "open" : ""}>
			<H1>Find Your Way Around...</H1>
			<LinkContainer>
				<MyLink>Home</MyLink>
				<MyLink>Projects</MyLink>
				<MyLink>Skills</MyLink>
				<MyLink>Contact</MyLink>
			</LinkContainer>
		</Div>
	);
};

export default Dropdown;
