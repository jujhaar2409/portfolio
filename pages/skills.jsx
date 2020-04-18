// @ts-nocheck
import React from "react";

import Layout from "../Layouts/Layout";
import InfoCard, { CardHeading, Hr } from "../Components/InfoCard";
import List, { ListItem } from "../Components/List";
import { skills } from "../data";

const lorem =
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sedy eirmod temp";

export default () => {
	return (
		<Layout title="Skills">
			{skills.map((skill) => {
				return (
					<InfoCard>
						<CardHeading>{skill.title}</CardHeading>
						<Hr />
						{skill.list.map((item) => (
							<List>
								<ListItem>{item}</ListItem>
							</List>
						))}
					</InfoCard>
				);
			})}
		</Layout>
	);
};
