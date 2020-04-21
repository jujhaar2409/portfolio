// @ts-nocheck
import React from "react";
import { useTrail } from "react-spring";

import Layout from "../Layouts/Layout";
import { Div, CardHeading, Hr } from "../Components/InfoCard";
import List, { ListItem } from "../Components/List";
import { skills } from "../data";

export default () => {
	const trail = useTrail(skills.length, {
		config: {
			mass: 4,
			tension: 300,
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
		<Layout title="Skills">
			{trail.map((anime, index) => {
				return (
					<Div style={anime}>
						<CardHeading>{skills[index].title}</CardHeading>
						<Hr />
						<List>
							{skills[index].list.map((item) => (
								<ListItem>{item}</ListItem>
							))}
						</List>
					</Div>
				);
			})}
		</Layout>
	);
};
