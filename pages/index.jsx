import React from "react";

import Layout from "../Layouts/Layout";
import InfoCard, {
	BeforeHeading,
	CardHeading,
	Hr,
	CardContent,
	CardA,
} from "../Components/InfoCard";
import Link from "next/link";

const lorem =
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sedy eirmod temp";

export default () => {
	return (
		<Layout title="Welcome!">
			<InfoCard>
				<BeforeHeading>Hey, I'm</BeforeHeading>
				<CardHeading>Jujhaar Singh</CardHeading>
				<Hr />
				<CardContent>{lorem}</CardContent>
				<Link href="/projects">
					<CardA>See More!</CardA>
				</Link>
			</InfoCard>
		</Layout>
	);
};
