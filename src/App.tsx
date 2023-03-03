import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styles
// import "bootstrap/scss/bootstrap.scss";
import "src/assets/styles/styles.scss";
// Pages
import { Dashboard } from "src/pages/dashboard";
import { Showcase } from "src/pages/showcase";
import "src/App.scss";
import { Theme, ThemeLight, ThemeDark } from "src/types/ui";
import { MintCHC } from "src/pages/dashboard/mintchc";
import { Collateral as MintCollateral } from "src/pages/dashboard/mintchc/chcform/collateral";
import { Confirmation as LoanConfirmation } from "src/pages/dashboard/loanchc/chcform/confirmation";
import { Collateral as LoanCollateral } from "src/pages/dashboard/loanchc/chcform/collateral";
import { Vault as LoanVault } from "src/pages/dashboard/loanchc/chcform/vault";
import { DAI as LoanDAI } from "src/pages/dashboard/loanchc/chcform/dai";
import { Dash1 } from "src/pages/dashboard/dash1";
import { Dash2 } from "src/pages/dashboard/dash2";
import { Landing } from "src/pages/landing";
import { About } from "src/pages/landing/pages/about";
import { Services } from "src/pages/landing/pages/services";
import { Ecosystem } from "src/pages/landing/pages/ecosystem";
import { Whitepaper } from "src/pages/landing/pages/whitepaper";
import { FAQ } from "src/pages/landing/pages/faq";
import { Contact } from "src/pages/landing/pages/contact";
import { Home } from "src/pages/landing/pages/home";
function App() {
	const [theme, setTheme] = useState<Theme>("theme-dark");
	const themes: { theme_dark: ThemeDark; theme_light: ThemeLight } = {
		theme_dark: "theme-dark",
		theme_light: "theme-light",
	};
	if (theme === themes.theme_dark) {
		document.body.classList.add(themes.theme_dark);
		document.body.classList.remove(themes.theme_light);
	} else {
		document.body.classList.add(themes.theme_light);
		document.body.classList.remove(themes.theme_dark);
	}
	return (
		<>
			<div className={theme} style={{ overflow: "auto" }}>
				<Routes>
					<Route path="/">
						<Route path="" element={<Navigate to="landing" />} />
						<Route path="landing" element={<Landing />}>
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="services" element={<Services />} />
							<Route path="ecosystem" element={<Ecosystem />} />
							<Route path="whitepaper" element={<Whitepaper />} />
							<Route path="faq" element={<FAQ />} />
							<Route path="contact" element={<Contact />} />
						</Route>
						<Route path="dashboard" element={<Dashboard theme={theme} />}>
							<Route path="mint_chc" element={<MintCHC />}>
								<Route index element={<MintCollateral />} />
								<Route path="vault" element={<LoanVault />} />
								<Route path="dai" element={<LoanDAI />} />
								<Route path="confirmation" element={<LoanConfirmation />} />
							</Route>
							<Route path="loan_chc" element={<MintCHC />}>
								<Route index element={<LoanCollateral />} />
								<Route path="vault" element={<LoanVault />} />
								<Route path="dai" element={<LoanDAI />} />
								<Route path="confirmation" element={<LoanConfirmation />} />
							</Route>
							<Route path="dash1" element={<Dash1 />} />
							<Route path="dash2" element={<Dash2 />} />
						</Route>
					</Route>
					<Route path="/showcase" element={<Showcase />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
