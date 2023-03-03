import { H3, H4, H5, H6, P, Body, THead, Collateral } from "src/components/typography";
export const Showcase = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<h1 style={{ textDecoration: "underline" }}>Typography</h1>
					<H3>H3 Page Heading</H3>
					<H4>H4 Section Heading</H4>
					<H5>H5 Title</H5>
					<H6>H6 Title</H6>
					<P>Paragraph</P>
					<Body>Body Text, Table Body</Body>
					<THead>Table Heading</THead>
					<Collateral>Collateral</Collateral>
				</div>
			</div>
		</>
	);
};
