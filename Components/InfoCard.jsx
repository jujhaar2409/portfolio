// @ts-nocheck
import React from "react";
import styled from "styled-components";

const Div = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	width: 300px;
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
	width: 99%;
	background-color: #0088ff;
	border: #0088ff solid 1.5px;
	margin-top: 30px;
`;

export const CardA = styled.a`
	color: #fff;
	height: 35px;
	width: auto;
	padding: 5px 10px;
	font-size: 16px;
	background-color: #0088ff;
	border-radius: 30px;
	border: none;
	text-decoration: none;
`;

export const CardContent = styled.div`
	padding: 35px 30px;
	font-size: 16px;
	line-height: 1.6;
`;

const Card = (props) => {
	return <Div>{props.children}</Div>;
};

export default Card;
