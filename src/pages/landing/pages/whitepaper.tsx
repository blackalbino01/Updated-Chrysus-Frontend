import { PrimaryGradientText } from "src/components/text";
import { PrimaryGradientButton } from "src/components/buttons";

export const Whitepaper = () => {
	return (
		<>
			<div className="mt-5 mb-5"></div>
			<div className="mt-5 mb-5 pt-5 pb-5 d-flex flex-column align-items-center justify-content-center">
				{/* <PrimaryGradientText>Whitepaper</PrimaryGradientText> */}
				<p style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "100px", marginBottom: "60px" }}>Whitepaper </p>
				<div className="mt-5"></div>
				<p className="text-white text-center col-8">
					Decentralized networks - a network that is distributed worldwide for computers that share
					normal open source software Agreements - have enabled billions of people to connect then
					share information quickly, securely and with zero consumer costs. What the world means
					they were deep, and they continue. As HTTPS, SMTP and SIP are allowed for free information
					sharing and communication, crypto assets and blockchain technologies will allow people to
					know the value of the exchange and transactions with each other in the same way: quickly,
					globally, safely and at low cost. The open internet exchange rate can change and we have
					covered the earth deeply, finally eliminating economic barriers to installation and
					empowerment of a better and more inclusive global market connecting everyone in the world.
					The world economy is open, shared, inclusive, far and wide, evenly distributed, and
					powerful not only few are the gatekeepers chosen, but for all who will connect. Some of
					the main advantages of cryptocurrencies are: low transaction costs, unlimited countries,
					transfer and flexibility, Anonymous ownership and transaction, pseudo-- anonymity, real
					time transparency, and protection from the problems of the banking system. Current
					definitions Common limited uses of cryptocurrencies include: price fluctuations,
					inadequate marketing understanding of technology,
					as well as adequate easofuse for non-technical users.
				</p>
			</div>
			<div className="text-center">
				<PrimaryGradientButton
					className="text-uppercase "
					onClick={() => { }}
				>
					Read More
				</PrimaryGradientButton>
			</div>
			<div className="mt-5 pt-5"></div>
		</>
	);
};
