//@ts-nocheck
import React from "react";
import styled from "styled-components";

const Span1 = styled.p`
	border-style: solid;
	border-width: 2px;
	border-color: #fff;
	width: 35px;
	height: 0;
	margin: 0;
	border-radius: 10px;
	transition: 0.2s ease-in-out all;
	position: absolute;
	right: 60px;
	top: 17px;
	&.open {
		top: 27px;
		transform: translateY(11px);
		transform: rotateZ(-45deg);
	}
`;

const Span2 = styled.p`
	border-style: solid;
	border-width: 2px;
	border-color: #fff;
	width: 35px;
	height: 0;
	margin: 0;
	border-radius: 10px;
	transition: 0.2s ease-in-out all;
	position: absolute;
	right: 60px;
	top: 27px;
	&.open {
		transform: translateX(-17.5px);
		width: 0;
	}
`;

const Span3 = styled.p`
	border-style: solid;
	border-width: 2px;
	border-color: #fff;
	width: 35px;
	height: 0;
	margin: 0;
	border-radius: 10px;
	transition: 0.2s ease-in-out all;
	position: absolute;
	right: 60px;
	top: 37px;

	&.open {
		top: 27px;
		transform: translateY(-11px);
		transform: rotateZ(45deg);
	}
`;

const Div = styled.div`
	margin: 0;
	margin-top: 16px;
	margin-right: 40px;
	display: block;
	flex-direction: column;
	justify-content: space-between;
	height: 20px;
	text-align: center;

	&.open {
		display: block;
	}

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

const DropdownLogo = (props) => {
	const { clicked, isOpen } = props;
	return (
		<Div
			className={isOpen ? "open" : ""}
			ref={props.dropdownLogoRef}
			onClick={clicked}>
			<Span1 className={isOpen ? "open" : ""}></Span1>
			<Span2 className={isOpen ? "open" : ""}></Span2>
			<Span3 className={isOpen ? "open" : ""}></Span3>
		</Div>
	);
};

export default DropdownLogo;
