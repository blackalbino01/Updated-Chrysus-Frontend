// import { PrimaryGradientText } from "src/components/text";
import Navbar from "./Navbar";
import { ContentToggle } from "./toggles";
import styles from "../style";
import Footer from "./Footer";


const questions = [
	{ title: 'How does project Chrysus utilize the CHC/CGT tokens?', content: 'Project Chrysus utilizes the CHC/CGT tokens to incentivize users to participate in the network by providing rewards for completing tasks, such as validating transactions, storing data, and providing services. The tokens can also be used for buying services, such as data storage and access to a decentralized exchange. Additionally, users can stake CHC/CGT tokens to earn rewards from the Chrysus platform.' },
	{ title: 'How can I generate cash flow from the tokens?', content: 'Cash Flow generated from tokens depends on how the token is structured. For example, security tokens may generate cash flow through dividends, while utility tokens may generate cash flow through fees associated with the underlying product or service. Additionally, tokens may generate cash flow through appreciation in value if they are traded on an exchange.' },
	{ title: 'How does CHC peg maintenance work?', content: 'CHC peg maintenance works by using a system of automated market-makers that provide liquidity in the CHC token. This system helps to ensure that the CHC token remains pegged to a stable asset, such as a fiat currency, and helps maintain the tokens value. The automated market-makers also provide an efficient and cost-effective way to buy and sell CHC tokens, allowing users to quickly and safely convert their assets.' },
	{ title: 'What is an automated market maker?', content: 'An automated market maker (AMM) is an algorithm used in decentralized finance (DeFi) that automatically matches buyers and sellers to facilitate digital asset trading. AMMs are decentralized, meaning any single entity does not control them, and they use automated liquidity pools to facilitate trades. AMMs are typically more efficient than traditional exchanges, and they generally provide low fees.' },
	{ title: 'What happens when collateral is liquidated and what might cause the liquidation?', content: 'When collateral is liquidated, the lender (usually a bank or other financial institution) has taken possession of the collateral and sold it to recoup the loan amount. This usually happens when a borrower fails to make the required payments on a loan. Other liquidation causes can include a borrower failing to meet the terms of the loan agreement, a borrower becoming insolvent, or the collateral becoming worthless.' },
	{ title: 'How is Chrysus coin minted?', content: 'Chryscus coins are minted using a technique called "cold-striking". This process involves striking a blank metal disc with a die (a raised pattern or design) to create a relief image on one side of the coin. It is a slow and labor-intensive process, but it ensures the coins have great detail and accuracy.' },
];


export const FAQ = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<div className="mt-5 d-flex flex-column align-items-center justify-content-center">
				<div className="col-8">
					<div className="d-flex flex-column align-items-center justify-content-center">
						<p style={{ fontWeight: "600", fontSize: "54px", color: "#846424", marginTop: "30px", marginBottom: "20px" }}>FAQ's </p>
						<div className="mt-5" />
						<div className="w-100">
							{questions.map((data, ind) => (
								<div key={ind}>
									<ContentToggle
										title={data.title}
										content={data.content}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5" />
			<div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Footer/>
				</div>
			</div>
		</>
	);
};
