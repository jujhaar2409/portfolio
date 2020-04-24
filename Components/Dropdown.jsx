//@ts-nocheck
import React, { useState, useEffect } from "react";
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
	transition: top ease-in-out 0.4s;
	border-radius: 20px;
	box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);

	&.open {
		top: 0%;
	}

	@media screen and (min-width: 700px) {
		display: none;
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
	display: grid;
	padding-right: 0;
	margin-right: auto;
	padding: 0;
	margin: 0;
	margin-bottom: 45px;

	&.selected {
		text-decoration: underline;
	}
`;

const LinkContainer = styled.div`
	width: 100%;
	margin-top: 68px;
`;

const MyLink = (props) => {
	const [classname, setClassname] = useState("");
	useEffect(() => {
		let loc = window.location.pathname.split("/")[1];
		if (loc === "" && props.children.toLowerCase() === "home") {
			setClassname("selected");
		} else if (loc === props.children.toLowerCase()) {
			setClassname("selected");
		} else {
			setClassname("");
		}
	}, []);

	return (
		<Link
			href={
				props.children != "Home"
					? "/" + props.children.toLowerCase()
					: "/"
			}>
			<A className={classname} onClick={props.clicked}>
				{props.children}
			</A>
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
