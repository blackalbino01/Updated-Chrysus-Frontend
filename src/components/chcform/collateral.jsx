import React from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
import { Link } from "react-router-dom";
// import { COLORS } from "src/assets/styles/theme";
import styles from "../../style";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import OrderTab from "../Future/OrderTab";
import TradeTab from "../Future/TradeTab";
import { useEffect, useState, useRef } from "react";
import Toltip from "../buttons/toltip";
import { Lending } from "./lending";
import { Borrow } from "./borrow";
import { Button } from "react-bootstrap";
import { BorrowCHC } from "./borrowCHC";
import { Lend } from "./Lend";
// import { FiAlertCircle } from "react-icons/fi";

const orderTable = [
  {
    email: "samantha@mail.com",
    title: "Samanta William",
    price: "$75,00",
    status: "Paid",
    statusChange: "success",
  },
  {
    email: "tony@gmail.com",
    title: "Tony Soap",
    price: "$80,00",
    status: "Unpaid",
    statusChange: "danger",
  },
  {
    email: "demo@mail.com",
    title: "Nela Vita",
    price: "$90,00",
    status: "Paid",
    statusChange: "success",
  },
  {
    email: "karen@mail.com",
    title: "Karen Hope",
    price: "$70,00",
    status: "Pending",
    statusChange: "warning",
  },
  {
    email: "nadia@mail.com",
    title: "Nadia Edja",
    price: "$76,00",
    status: "Unpaid",
    statusChange: "danger",
  },
  {
    email: "samantha@mail.com",
    title: "Samanta William",
    price: "$75,00",
    status: "Paid",
    statusChange: "success",
  },
  {
    email: "tony@gmail.com",
    title: "Tony Soap",
    price: "$80,00",
    status: "Unpaid",
    statusChange: "danger",
  },
  {
    email: "demo@mail.com",
    title: "Nela Vita",
    price: "$90,00",
    status: "Paid",
    statusChange: "success",
  },
  {
    email: "karen@mail.com",
    title: "Karen Hope",
    price: "$70,00",
    status: "Pending",
    statusChange: "warning",
  },
  {
    email: "nadia@mail.com",
    title: "Nadia Edja",
    price: "$76,00",
    status: "Unpaid",
    statusChange: "danger",
  },
];

const Eth = [
  {
    Collateral: "aETH",
    Interest: "%",
    LIQ: "110%",
    Utilization: "%",
    Balance: "0",
  },
];

const Dai = [
  {
    Collateral: "aETH",
    Interest: "%",
    LIQ: "110%",
    Utilization: "%",
    Balance: "0",
  },
];

// const tabDataBlog = [
// 	{ Date: 'ETH', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
// 	{ Date: 'DAI', Trade: '%', Status: '110%', Price: '%', Amount: '0' }
// ];
export const Collateral = () => {
  const [visible, setvisible] = useState(false);
  const [data, setData] = useState(
    document.querySelectorAll("#status_wrapper tbody tr")
  );
  const sort = 6;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (let i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#status_wrapper tbody tr"));
    //chackboxFun();
  }, [test]);

  // Active pagginarion

  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  const checkboxFun = (type) => {
    setTimeout(() => {
      const checkbox = document.querySelectorAll(".order-history input");
      const motherCheckBox = document.querySelector(".sorting_asc input");
      for (let i = 0; i < checkbox.length; i++) {
        const element = checkbox[i];
        if (type === "all") {
          if (motherCheckBox.checked) {
            element.checked = true;
          } else {
            element.checked = false;
          }
        } else {
          if (!element.checked) {
            motherCheckBox.checked = false;
            break;
          } else {
            motherCheckBox.checked = true;
          }
        }
      }
    }, 200);
  };

  const Eth = [
    {
      Collateral: "ETH",
      Interest: "%",
      LIQ: "110%",
      Utilization: "%",
      Balance: "0",
    },
  ];

  const Dai = [
    {
      Collateral: "DAI",
      Interest: "%",
      LIQ: "110%",
      Utilization: "%",
      Balance: "0",
    },
  ];

  return (
    <>
      <Tab.Container defaultActiveKey="Navbuy">
        <div className={`${styles.flexCenter} `}>
          <nav className="w-full flex justify-between items-center navbar">
            <div className="buy-sell">
              <div
                style={{
                  background:
                    "linear-gradient(153.13deg, #846424 17.05%, #EDC452 49.23%, #846424 82.83%)",
                  padding: "1px",
                }}
              >
                <div
                  style={{
                    background: "#1A1917",
                    boxShadow:
                      "0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.14)",
                  }}
                >
                  <Nav
                    className="nav nav-tabs"
                    eventKey="nav-tab2"
                    role="tablist"
                  >
                    <Nav.Link
                      as="button"
                      className="nav-link"
                      eventKey="Navbuy"
                      type="button"
                    >
                      Lending
                    </Nav.Link>
                    <Nav.Link
                      as="button"
                      className="nav-link"
                      eventKey="Navsell"
                      type="button"
                    >
                      Borrow
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="Navbuy">
            <Tab.Container defaultActiveKey="Navbuymarket">
              <Tab.Content id="nav-tabContent1">
                <Tab.Pane eventKey="Navbuymarket" />
                <Tab.Pane eventKey="Navbuylimit" />
              </Tab.Content>
              <div className="text-center">
                <div className="sell-element">
                  <Lending />
                </div>
              </div>
            </Tab.Container>
          </Tab.Pane>
          <Tab.Pane eventKey="Navsell">
            <Tab.Container defaultActiveKey="Navsellmarket">
              <Tab.Content id="nav-tabContent2">
                <Tab.Pane id="Navsellmarket" />
                <Tab.Pane id="Navselllimit" />
              </Tab.Content>
              <div className="sell-element">
                <Borrow />
              </div>
            </Tab.Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
