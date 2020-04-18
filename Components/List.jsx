// @ts-nocheck
import React from "react";
import styled from "styled-components";

const ItemMarker = styled.span`
	border-radius: 100%;
	height: 10px;
	width: 10px;
	border: #0088ff solid 1px;
	display: inline-block;
	margin: 0;
	padding: 0;
`;

const ItemText = styled.p`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	display: inline-block;
	padding-top: 0;
	padding-bottom: 0;
	padding-left: 10px;
	font-size: 21px;
`;

const Ul = styled.ul`
	text-align: left;
`;

export const ListItem = (props) => {
	return (
		<div>
			<ItemMarker />
			<ItemText>{props.children}</ItemText>
		</div>
	);
};

const List = (props) => {
	return <Ul>{props.children}</Ul>;
};

export default List;
