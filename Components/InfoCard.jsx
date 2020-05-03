import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

export const Div = styled(animated.div)`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	width: 40%;
	min-width: 340px;
	height: auto;
	padding: 30px 0;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	border-radius: 20px;
	box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.16);
	margin-bottom: 80px;
	margin-top: 10px;
`;

export const CardHeading = styled.h2`
	font-size: 32px;
	text-align: center;
	margin: 0;
	padding: 10px;
	font-weight: 900;
`;

export const BeforeHeading = styled.h3`
	font-size: 28px;
	text-align: center;
	margin: 0;
	padding: 0;
	font-weight: 400;
`;

export const Hr = styled.div`
	height: 0;
	width: 99.5%;
	background-color: #0088ff;
	border: #0088ff solid 1.5px;
	margin-top: 30px;
`;

export const CardA = styled.a`
	padding: 5px 10px;
	color: #000;
	margin: 0 5px;
	font-size: 16px;
	border-radius: 30px;
	border: 1px rgba(0, 136, 255, 0.3) solid;
	text-decoration: none;
	display: inline;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	&:hover {
		border: 1px rgba(0, 136, 255, 0) solid;
		box-shadow: 5px 5px 35px rgba(0, 136, 255, 0.4);
		color: #0088ff;
	}
`;

export const CardContent = styled.div`
	padding: 35px 30px;
	font-size: 16px;
	line-height: 1.6;
`;

const Card = (props) => {
	const springProps = useSpring({
		config: {
			mass: 4,
			tension: 200,
			fricton: 40,
		},
		opacity: 1,
		transform: `translateY(0px)`,
		from: {
			opacity: 0.3,
			transform: `translateY(20px)`,
		},
	});
	return <Div style={springProps}>{props.children}</Div>;
};

export default Card;
