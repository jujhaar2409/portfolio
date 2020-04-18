import React from "react";

import Layout from "../Layouts/Layout";
import InfoCard, {
	BeforeHeading,
	CardHeading,
	Hr,
	CardContent,
	CardA,
} from "../Components/InfoCard";
import List, { ListItem } from "../Components/List";

const lorem =
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sedy eirmod temp";

export default () => {
	return (
		<Layout title="Contact">
			<InfoCard>
				<List>
					<ListItem>email:</ListItem>
					<CardContent>example@mail.com</CardContent>
					<ListItem>phone:</ListItem>
					<CardContent>32420482903</CardContent>
				</List>
			</InfoCard>
		</Layout>
	);
};
