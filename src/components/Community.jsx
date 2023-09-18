import React from "react";
import { CircleExpandButton } from "./buttons";
import {
  TelegramGoldIcon,
  TelegramWhiteIcon,
  TwitterGoldIcon,
  TwitterWhiteIcon,
  FacebookGoldIcon,
  FacebookWhiteIcon,
  DiscordGoldIcon,
  DiscordWhiteIcon,
  Linkdin,
  Linkd,
} from "../assets";

const Community = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="w-100">
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
            }}
            className="text-baseAssets"
          >
            Join Our Community
          </span>
        </div>
        <div className="w-100 my-3 fontsize">
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            Our community is vibrant and welcoming to all who share our
            passions. <br />
            We foster meaningful relationships, learn from each other, and
            provide support and resources to help everyone achieve their goals.
            Join us in improving future.{" "}
          </p>
        </div>
      </div>
      <div className="col-lg-6 text-center">
        <div className="my-2" />
        <a target="_blank" href="https://t.me/chrysusofficial">
          <CircleExpandButton
            color="primary"
            outline
            icon={<img src={TelegramGoldIcon} alt="telegram-gold.svg" />}
            hoverIcon={<img src={TelegramGoldIcon} alt="telegram-white.svg" />}
            text={"Telegram"}
          />
        </a>
        <a target="_blank" href=" https://twitter.com/chrysus_coin01">
          <CircleExpandButton
            color="primary"
            outline
            icon={<img src={TwitterGoldIcon} alt="twitter-gold.svg" />}
            hoverIcon={<img src={TwitterGoldIcon} alt="twitter-white.svg" />}
            text="Twitter"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/chrysuscoin">
          <CircleExpandButton
            color="primary"
            outline
            icon={<img src={FacebookGoldIcon} alt="facebook-gold.svg" />}
            hoverIcon={<img src={FacebookGoldIcon} alt="facebook-white.svg" />}
            text="Facebook"
          />
        </a>
        <a target="_blank" href=" https://discord.gg/e7kfZPRa">
          <CircleExpandButton
            color="primary"
            outline
            icon={<img src={DiscordGoldIcon} alt="discord-gold.svg" />}
            hoverIcon={<img src={DiscordGoldIcon} alt="discord-white.svg" />}
            text="Discord"
          />
        </a>
        <a
          target="_blank"
          href=" https://www.linkedin.com/company/chrysus-gold-coin/"
        >
          <CircleExpandButton
            color="primary"
            outline
            icon={
              <img
                style={{ width: "30px", height: "20px" }}
                src={Linkdin}
                alt="linkd.svg"
              />
            }
            hoverIcon={
              <img
                src={Linkdin}
                style={{ width: "30px", height: "20px" }}
                alt="linkdin.svg"
              />
            }
            text="Linkdin"
          />
        </a>
      </div>
    </div>
  );
};

export default Community;
