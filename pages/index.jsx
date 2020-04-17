import React from "react";
import styled from "styled-components";

import Layout from "../Layouts/Layout";

const Title = styled.h1`
	font-size: 50px;
	text-align: center;
`;

export default () => {
	return (
		<Layout>
			<Title>Welcome</Title>
		</Layout>
	);
};
