import { CircleExpandButton } from "src/components/buttons";
import { PrimaryGradientText } from "src/components/text";
import TelegramGoldIcon from "src/assets/icons/svg/telegram-gold.svg";
import TelegramWhiteIcon from "src/assets/icons/svg/telegram-white.svg";
import TwitterGoldIcon from "src/assets/icons/svg/twitter-gold.svg";
import TwitterWhiteIcon from "src/assets/icons/svg/twitter-white.svg";
import DiscordGoldIcon from "src/assets/icons/svg/discord-gold.svg";
import DiscordWhiteIcon from "src/assets/icons/svg/discord-white.svg";
import FacebookGoldIcon from "src/assets/icons/svg/facebook-gold.svg";
import FacebookWhiteIcon from "src/assets/icons/svg/facebook-white.svg";
import GitlabGoldIcon from "src/assets/icons/svg/gitlab-gold.svg";
import GitlabWhiteIcon from "src/assets/icons/svg/gitlab-white.svg";
import UserWhiteIcon from "src/assets/icons/svg/user-white.svg";
import MailWhite from "src/assets/icons/svg/mail-white.svg";
import { Form } from "reactstrap";
import { HR } from "src/components/hr";
import { CInput } from "src/components/inputs/cinput";
export const Contact = () => {
	return (
		<>
			<div className="d-flex flex-row align-items-center justify-content-center">
				<div className="col-8">
					<div className="d-flex flex-row align-items-center justify-content-center">
						<div className="mt-5"></div>
						<PrimaryGradientText>Contact</PrimaryGradientText>
					</div>
					<div className="mt-5"></div>
					<div className="row">
						<div className="col-lg-6">
							<p className="text-white" style={{ opacity: 0.5 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
								ultrices sed in arcu hendrerit consequat velit, interdum tellus.{" "}
							</p>
							<div>
								<CircleExpandButton
									color="primary"
									outline={true}
									icon={<img src={TelegramGoldIcon} alt="telegram-gold.svg" />}
									hoverIcon={
										<img src={TelegramWhiteIcon} alt="telegram-white.svg" />
									}
									text="Telegram"
								/>
								<CircleExpandButton
									color="primary"
									outline={true}
									icon={<img src={TwitterGoldIcon} alt="twitter-gold.svg" />}
									hoverIcon={
										<img src={TwitterWhiteIcon} alt="twitter-white.svg" />
									}
									text="Twitter"
								/>
								<CircleExpandButton
									color="primary"
									outline={true}
									icon={<img src={FacebookGoldIcon} alt="facebook-gold.svg" />}
									hoverIcon={
										<img src={FacebookWhiteIcon} alt="facebook-white.svg" />
									}
									text="Facebook"
								/>
								<CircleExpandButton
									color="primary"
									outline={true}
									icon={<img src={DiscordGoldIcon} alt="discord-gold.svg" />}
									hoverIcon={
										<img src={DiscordWhiteIcon} alt="discord-white.svg" />
									}
									text="Discord"
								/>
								<CircleExpandButton
									color="primary"
									outline={true}
									icon={<img src={GitlabGoldIcon} alt="gitlab-gold.svg" />}
									hoverIcon={
										<img src={GitlabWhiteIcon} alt="gitlab-white.svg" />
									}
									text="Gitlab"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<Form
								style={{
									background:
										"linear-gradient(180deg, #262522 0%, rgba(38, 37, 34, 0) 100%)",
									borderRadius: "16px",
									padding: "2em",
								}}
							>
								<div className="row d-flex flex-row align-items-center justify-content-center w-100">
									<div className="col-3">
										<HR />
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="flex flex-row align-items-center justify-content-center">
											<div className="mt-2 text-center">
												<PrimaryGradientText>
													Share Your Feedback
												</PrimaryGradientText>
											</div>
											<div className="mt-3"></div>
											<div
												className="w-100"
												style={{
													marginLeft: "50%",
													transform: "translateX(-30%)",
												}}
											>
												<CInput
													placeholder="Your Name"
													className="mt-3 col-7"
													type="text"
													outline="PRIMARY"
													leftIcon={
														<img src={UserWhiteIcon} alt="user-white.svg" />
													}
												/>
												<CInput
													placeholder="Your Email"
													className="mt-3 col-7"
													type="email"
													outline="PRIMARY"
													leftIcon={
														<img src={MailWhite} alt="user-white.svg" />
													}
												/>
												<CInput
													placeholder="Subject"
													className="mt-3 col-7"
													type="text"
													outline="PRIMARY"
												/>
												<CInput
													placeholder="Subject"
													className="mt-3 col-7"
													type="textarea"
													outline="PRIMARY"
												/>
											</div>
										</div>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5"></div>
		</>
	);
};
