import { useEffect } from "react";
import { CLeftBar } from "src/widgets/cleftbar";
import { CNavbar } from "src/widgets/cnavbar";
import { useState } from "react";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { MintCHC } from "./mintchc";
import { CToggle } from "src/components/toggles";
// Pages

interface IDashboardProps {
	theme: "theme-light" | "theme-dark";
}

export const Dashboard = (props: IDashboardProps) => {
	const location = useLocation();
	const [_navbarTitle, _setNavbarTitle] = useState<string>();
	const [showToggle, setShowToggle] = useState<boolean>(false);
	useEffect(() => {
		if (location.pathname.split("/").includes("loan_chc")) setShowToggle(true);
		else setShowToggle(false);
	}, [location]);
	return (
		<div className="expanded-grid">
			<CLeftBar />
			{/* right section of content in dashboard */}
			<div
				className="d-flex flex-column"
				style={{ height: "100vh", overflow: "auto" }}
			>
				<div className="p-4">
					<CNavbar
						title="Mint CHC"
						theme={props.theme === "theme-dark" ? "dark" : "light"}
						addons={[
							showToggle === true ? (
								<CToggle
									options={[
										{ value: "lend", label: "LEND" },
										{ value: "borrow", label: "BORROW" },
									]}
									setSelected={() => {}}
								/>
							) : null,
						]}
					/>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const steps = [
	"Select Collateral",
	"Vault Management",
	"Generate DAI",
	"Confirmation",
];
