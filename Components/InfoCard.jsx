// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const Div = styled(animated.div)`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	width: 40%;
	min-width: 300px;
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
	font-weight: lighter;
`;

export const Hr = styled.div`
	height: 0;
	width: 99.5%;
	background-color: #0088ff;
	border: #0088ff solid 1.5px;
	margin-top: 30px;
`;

export const CardA = styled.a`
	color: #fff;
	padding: 5px 10px;
	margin: 0 5px;
	font-size: 16px;
	background-image: linear-gradient(to right, #0088ff 0%, #4fffd3 160%);
	border-radius: 30px;
	border: none;
	text-decoration: none;
	display: inline;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	&:hover {
		/* box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.2); */
		letter-spacing: 1px;
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
			tension: 100,
			fricton: 1,
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
