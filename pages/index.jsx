//@ts-nocheck
import Link from "next/link";
import React from "react";

import { index } from "../content/data";
import InfoCard, {
	BeforeHeading,
	CardA,
	CardContent,
	CardHeading,
	Hr,
} from "../Components/InfoCard";
import Layout from "../Layouts/Layout";

const indexPageContent = index;

export default () => {
	return (
		<Layout title="Welcome!">
			<InfoCard>
				<BeforeHeading>Hey, I'm</BeforeHeading>
				<CardHeading>Jujhaar Singh</CardHeading>
				<Hr />
				<CardContent>{indexPageContent}</CardContent>
				<Link href="/projects">
					<CardA>See More!</CardA>
				</Link>
			</InfoCard>
		</Layout>
	);
};
