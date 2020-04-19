// @ts-nocheck
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const A = styled.a`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	padding: 14px 0 4px 0;
	text-align: center;
	margin: 0;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	width: 115px;

	&:hover {
		letter-spacing: 0.5px;
	}
`;

const LinkContainer = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	margin-left: auto;
	margin-right: 35px;
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

const NavItems = () => {
	return (
		<LinkContainer>
			<MyLink>Home</MyLink>
			<MyLink>Projects</MyLink>
			<MyLink>Skills</MyLink>
			<MyLink>Contact</MyLink>
		</LinkContainer>
	);
};

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

export default NavItems;
