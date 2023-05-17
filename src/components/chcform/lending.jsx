import React from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
import { Link } from 'react-router-dom';
// import { COLORS } from "src/assets/styles/theme";
import styles from "../../style";
import { Dropdown, Tab, Nav } from 'react-bootstrap';
import OrderTab from '../Future/OrderTab';
import TradeTab from '../Future/TradeTab';
import { useEffect, useState, useRef } from 'react';
import { Button } from "react-bootstrap";
import Toltip from "../buttons/toltip";
// import { FiAlertCircle } from "react-icons/fi";

const orderTable = [
    { email: 'samantha@mail.com', title: 'Samanta William', price: '$75,00', status: 'Paid', statusChange: 'success' },
    { email: 'tony@gmail.com', title: 'Tony Soap', price: '$80,00', status: 'Unpaid', statusChange: 'danger' },
    { email: 'demo@mail.com', title: 'Nela Vita', price: '$90,00', status: 'Paid', statusChange: 'success' },
    { email: 'karen@mail.com', title: 'Karen Hope', price: '$70,00', status: 'Pending', statusChange: 'warning' },
    { email: 'nadia@mail.com', title: 'Nadia Edja', price: '$76,00', status: 'Unpaid', statusChange: 'danger' },
    { email: 'samantha@mail.com', title: 'Samanta William', price: '$75,00', status: 'Paid', statusChange: 'success' },
    { email: 'tony@gmail.com', title: 'Tony Soap', price: '$80,00', status: 'Unpaid', statusChange: 'danger' },
    { email: 'demo@mail.com', title: 'Nela Vita', price: '$90,00', status: 'Paid', statusChange: 'success' },
    { email: 'karen@mail.com', title: 'Karen Hope', price: '$70,00', status: 'Pending', statusChange: 'warning' },
    { email: 'nadia@mail.com', title: 'Nadia Edja', price: '$76,00', status: 'Unpaid', statusChange: 'danger' },
];


const Eth = [
    { Collateral: 'aETH', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
];

const Dai = [
    { Collateral: 'aETH', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
];


// const tabDataBlog = [
// 	{ Date: 'ETH', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
// 	{ Date: 'DAI', Trade: '%', Status: '110%', Price: '%', Amount: '0' }
// ];
export const Lending = () => {
    const [visible, setvisible] = useState(false);
    const [data, setData] = useState(
        document.querySelectorAll("#status_wrapper tbody tr")
    );
    const sort = 6;
    const activePag = useRef(0);
    const [test, settest] = useState(0);

    // Active data
    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
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
    activePag.current === 0 && chageData(0, sort);
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
            const checkbox = document.querySelectorAll('.order-history input');
            const motherCheckBox = document.querySelector('.sorting_asc input');
            for (let i = 0; i < checkbox.length; i++) {
                const element = checkbox[i]
                if (type === 'all') {
                    if (motherCheckBox.checked) {
                        element.checked = true
                    } else {
                        element.checked = false
                    }
                } else {
                    if (!element.checked) {
                        motherCheckBox.checked = false
                        break
                    } else {
                        motherCheckBox.checked = true
                    }
                }
            }
        }, 200);
    }



    const Eth = [
        { Collateral: 'CHC/ETH', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
    ];

    const Dai = [
        { Collateral: 'CHC/DAI', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
    ];

    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card" style={{
                        backgroundColor: "#211f21",
                        borderRadius: "16px",
                        color: "#846424",
                    }}>
                        <div className="card-body">
                            <Tab.Container defaultActiveKey="All">
                                <div className="card-header border-0 pb-2 flex-wrap">
                                    <h4 className="heading ">Lending</h4>
                                    {/* <div style={{ position: "absolute", right: 30, top: 30 }}>
                                        <Toltip style={{ position: "absolute", right: 30, top: 30 }}>
                                            <Info />
                                        </Toltip>
                                    </div> */}
                                    {/* <Button
                                        type="button"
                                        style={{
                                            backgroundColor: "#1A1917",
                                            borderRadius: "16px",
                                            color: "#846424",
                                        }}
                                        className=" font-medium
                                             rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                        <a>Deposite</a>
                                    </Button> */}
                                    {/* <>
									<Nav className="order nav nav-tabs">
										<Nav.Link as="button" eventKey="All" type="button">Order</Nav.Link>
										<Nav.Link as="button" eventKey="Order" type="button">Order History</Nav.Link>
										<Nav.Link as="button" eventKey="Trade" type="button">Trade Histroy</Nav.Link>
									</Nav>
								</> */}
                                </div>
                                <div className="card-body pt-0 pb-0">
                                    <Tab.Content >
                                        <Tab.Pane eventKey="All">
                                            <div className="table-responsive dataTabletrade ">
                                                <div id="status_wrapper" className="dataTables_wrapper no-footer">
                                                    <table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
                                                        <thead>
                                                            <tr
                                                                style={{
                                                                    color: "#846424",
                                                                }}>
                                                                {/* <th className="sorting_asc">
																	<input type="checkbox" className="form-check-input" id="checkAll" required=""
																		onClick={() => checkboxFun('all')}
																	/>
																</th> */}
                                                                <th>Pool</th>
                                                                <th>Borrow</th>
                                                                <th>Current Value</th>
                                                                <th>Debit Ratio</th>
                                                                <th>APY</th>
                                                                {/* <th>Reward</th> */}
                                                                {/* className="text-end" */}
                                                                {/* <th>Borrow</th> */}
                                                                {/* <th>Borrow</th> */}
                                                                <th>Lend</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='text-white'>
                                                            {/* {tabDataBlog.map((item, index) => (
																<tr key={index}>
																	<td>{item.Date}</td>
																	<td>{item.Trade}</td>
																	<td>{item.Status}</td>
																	<td>{item.Price}</td>
																	<td>{item.Amount}</td>
																	<td>
																		<Link to={"/accounts/loan/dai"}>
																			<span class="badge cursor-pointer"
																				style={{
																					height: "22px",
																					width: "80px",
																					color: "black",
																					textTransform: "uppercase",
																					fontStyle: "normal",
																					fontWeight: "700",
																					fontSize: "10px",
																					background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
																					borderRadius: "40px",
																				}}>Borrow</span>
																		</Link>
																	</td>
																	<td>
																		<Link to={"/accounts/loan/dai"}>
																			<span class="badge cursor-pointer"
																				style={{
																					height: "22px",
																					width: "80px",
																					color: "black",
																					textTransform: "uppercase",
																					fontStyle: "normal",
																					fontWeight: "700",
																					fontSize: "10px",
																					background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
																					borderRadius: "40px",
																				}}>Loan</span>
																		</Link>
																	</td>
																</tr>
															))} */}
                                                            {Eth.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item.Collateral}</td>
                                                                    <td>{item.Interest}</td>
                                                                    <td>{item.LIQ}</td>
                                                                    <td>{item.Utilization}</td>
                                                                    <td>{item.Balance}</td>
                                                                    {/* <td>
                                                                        <Link to={"/accounts/loan/dai"}>
                                                                            <span className="badge cursor-pointer"
                                                                                style={{
                                                                                    height: "22px",
                                                                                    width: "80px",
                                                                                    color: "black",
                                                                                    textTransform: "uppercase",
                                                                                    fontStyle: "normal",
                                                                                    fontWeight: "700",
                                                                                    fontSize: "10px",
                                                                                    background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
                                                                                    borderRadius: "40px",
                                                                                }}>Borrow</span>
                                                                        </Link>
                                                                    </td> */}
                                                                    <td>
                                                                        <Link to={"/accounts/loan/lend"}>
                                                                            <span className="badge cursor-pointer"
                                                                                style={{
                                                                                    height: "22px",
                                                                                    width: "80px",
                                                                                    color: "black",
                                                                                    textTransform: "uppercase",
                                                                                    fontStyle: "normal",
                                                                                    fontWeight: "700",
                                                                                    fontSize: "10px",
                                                                                    background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
                                                                                    borderRadius: "40px",
                                                                                }}>Lend</span>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            {Dai.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item.Collateral}</td>
                                                                    <td>{item.Interest}</td>
                                                                    <td>{item.LIQ}</td>
                                                                    <td>{item.Utilization}</td>
                                                                    <td>{item.Balance}</td>
                                                                    {/* <td>
                                                                        <Link to={"/accounts/loan/dai"}>
                                                                            <span className="badge cursor-pointer"
                                                                                style={{
                                                                                    height: "22px",
                                                                                    width: "80px",
                                                                                    color: "black",
                                                                                    textTransform: "uppercase",
                                                                                    fontStyle: "normal",
                                                                                    fontWeight: "700",
                                                                                    fontSize: "10px",
                                                                                    background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
                                                                                    borderRadius: "40px",
                                                                                }}>Borrow</span>
                                                                        </Link>
                                                                    </td> */}
                                                                    <td>
                                                                        <Link to={"/accounts/loan/lend"}>
                                                                            <span className="badge cursor-pointer"
                                                                                style={{
                                                                                    height: "22px",
                                                                                    width: "80px",
                                                                                    color: "black",
                                                                                    textTransform: "uppercase",
                                                                                    fontStyle: "normal",
                                                                                    fontWeight: "700",
                                                                                    fontSize: "10px",
                                                                                    background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
                                                                                    borderRadius: "40px",
                                                                                }}>Lend</span>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="d-sm-flex text-white text-center justify-content-between align-items-center mt-3 mb-3">
                                                        <div className="dataTables_info">
                                                            Showing {activePag.current * sort + 1} to{" "}
                                                            {data.length > (activePag.current + 1) * sort
                                                                ? (activePag.current + 1) * sort
                                                                : data.length}{" "}
                                                            of {data.length} entries
                                                        </div>
                                                        <div
                                                            className="dataTables_paginate paging_simple_numbers mb-0"
                                                            id="application-tbl1_paginate"
                                                        >
                                                            <Link
                                                                className="paginate_button previous text-white"
                                                                style={{
                                                                    borderRadius: "16px",
                                                                }}
                                                                // to="/future"
                                                                onClick={() =>
                                                                    activePag.current > 0 &&
                                                                    onClick(activePag.current - 1)
                                                                }
                                                            >
                                                                {/* <i className="fa fa-angle-double-left" ></i> */}
                                                                <i>
                                                                    <svg style={{ width: "20px", height: "20px", marginTop: "12" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
                                                                </i>
                                                            </Link>
                                                            <span className='text-white'>
                                                                {paggination.map((number, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        // to="/future"
                                                                        className={`paginate_button  ${activePag.current === i ? "current" : ""
                                                                            } `}
                                                                        onClick={() => onClick(i)}
                                                                    >
                                                                        {number}
                                                                    </Link>
                                                                ))}
                                                            </span>

                                                            <Link
                                                                style={{

                                                                    borderRadius: "16px",
                                                                }}
                                                                className="paginate_button next text-white"
                                                                // to="/future"
                                                                onClick={() =>
                                                                    activePag.current + 1 < paggination.length &&
                                                                    onClick(activePag.current + 1)
                                                                }
                                                            >

                                                                {/* <i className="fa fa-angle-double-right" ></i> */}
                                                                <i>
                                                                    <svg style={{ width: "20px", height: "20px", marginTop: "12" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
                                                                </i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Order">
                                            <OrderTab />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Trade">
                                            <TradeTab />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}></div>
                        <div className="mt-4"></div>
                        <div className="w-100 d-flex flex-row justify-content-start p-3">

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
