import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import Layout from "../Layouts/Layout";
import { Div, Hr } from "../Components/InfoCard";

const ContactType = styled.h1`
	color: #0088ff;
	font-size: 25px;
	padding-left: 35px;
`;

const ContactInfo = styled.p`
	font-size: 19px;
	font-weight: bold;
	padding-left: 55px;
	padding-bottom: 40px;
`;

const ContactLink = styled.a`
	font-size: 20px;
	padding-left: 35px;
	padding-top: 90px;
	color: #0088ff;
	text-decoration: none;
`;

const MyDiv = styled.div`
	padding: 0;
	margin-top: 25px;
`;

const MyInfoCard = styled(animated(Div))`
	text-align: left;
`;

export default () => {
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
	return (
		<Layout title="Contact">
			<MyInfoCard style={springProps}>
				<ContactType>Email</ContactType>
				<ContactInfo>example@mail.com</ContactInfo>
				<ContactType>Phone</ContactType>
				<ContactInfo>32420482903</ContactInfo>
				<Hr />
				<MyDiv>
					<ContactLink href="https://github.com/jujhaar2409">
						My Github Page
					</ContactLink>
				</MyDiv>
			</MyInfoCard>
		</Layout>
	);
};
