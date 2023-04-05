import React from 'react'
import styles from "../style";
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const listData = [
    {}, {}, {},
    {}, {}, {},
    {}, {}, {},
    {}, {},
];

const DaoLandPage = () => {
    return (
        <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <div className=''>
                    <div className="col-xl-2 ">
                        <div className="row">
                            <div className="col-xl-12 col-sm-6">
                                <div className="card h-auto">
                                    <div className="card-body px-0 pt-1">
                                        <Tab.Container defaultActiveKey="Navbuy">
                                            <div className="">
                                                <div className="buy-sell">
                                                    <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
                                                        <Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">Overview</Nav.Link>
                                                        <Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">Purposal</Nav.Link>
                                                    </Nav>
                                                </div>
                                                <Tab.Content  >
                                                    <Tab.Pane eventKey="Navbuy" >
                                                        <Tab.Container defaultActiveKey="Navbuymarket">
                                                            <Tab.Content id="nav-tabContent1">
                                                                <Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
                                                                <Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
                                                            </Tab.Content>
                                                            <div className="sell-element">
                                                                <h1>Buy</h1>
                                                            </div>
                                                        </Tab.Container>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Navsell">
                                                        <Tab.Container defaultActiveKey="Navsellmarket">
                                                            <Tab.Content id="nav-tabContent2">
                                                                <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                                                <Tab.Pane id="Navselllimit" ></Tab.Pane>
                                                            </Tab.Content>
                                                            <div className="sell-element">
                                                                <h1>Sell</h1>
                                                            </div>
                                                        </Tab.Container>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </Tab.Container>
                                        {/* <Tab.Container defaultActiveKey="Navbuy">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Navbuy" >
                                                    <Tab.Container defaultActiveKey="Navbuymarket">
                                                        <div className="limit-sell">
                                                            <Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
                                                                <Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
                                                                <Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
                                                            </Nav>
                                                        </div>
                                                        <Tab.Content id="nav-tabContent1">
                                                            <Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
                                                            <Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
                                                        </Tab.Content>
                                                        <div className="sell-element">
                                                            <h1 className='text-white'>overview</h1>
                                                        </div>
                                                    </Tab.Container>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Navsell">
                                                    <Tab.Container defaultActiveKey="Navsellmarket">
                                                        <div className="limit-sell">
                                                            <Nav className="nav nav-tabs">
                                                                <Nav.Link as="button" eventKey="Navsellmarket" type="button">market order</Nav.Link>
                                                                <Nav.Link as="button" eventKey="Navselllimit" type="button" >limit order</Nav.Link>
                                                            </Nav>
                                                        </div>
                                                        <Tab.Content id="nav-tabContent2">
                                                            <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                                            <Tab.Pane id="Navselllimit" ></Tab.Pane>
                                                        </Tab.Content>
                                                        <div className="sell-element">
                                                            <h1 className='text-white'>purposal</h1>
                                                        </div>
                                                    </Tab.Container>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container> */}

                                        {/* <li className='mb-3'>
                                            <div className="limit-sell"
                                                style={{
                                                    width: "280px"
                                                }}
                                            >
                                                <Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
                                                    <Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
                                                    <Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
                                                </Nav>
                                            </div>
                                            <Tab.Content id="nav-tabContent2">
                                                <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                                <Tab.Pane id="Navselllimit" ></Tab.Pane>
                                            </Tab.Content>
                                        </li> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div
                    style={{
                        background:
                            "linear-gradient(153.13deg, #846424 17.05%, #EDC452 49.23%, #846424 82.83%)",
                        borderRadius: "40px",
                        padding: "1px",
                    }}
                >
                    <div
                        style={{
                            background: "#1A1917",
                            boxShadow:
                                "0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.14)",
                            borderRadius: "40px",
                        }}
                    >
                        {options.map((option) => {
                            if (option.value === _selected.value) {
                                return (
                                    <Button
                                        color="primary"
                                        style={{
                                            background:
                                                "linear-gradient(270deg, #FFD558 0.26%, #846424 99.99%, #846424 100%)",
                                            border: "1px solid #262522",
                                            boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.25)",
                                            borderRadius: "40px",
                                            letterSpacing: "1px",
                                            color: "#000000",
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            fontSize: "12px",
                                            lineHeight: "16px",
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                );
                            } else {
                                return (
                                    <Button
                                        color="primary"
                                        style={{
                                            background: "transparent",
                                            border: "1px solid transparent",
                                            boxShadow: "none",
                                            borderRadius: "40px",
                                            outline: "none",
                                            letterSpacing: "1px",
                                            color: "#F2CB54",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "12px",
                                            lineHeight: "16px",
                                        }}
                                        onClick={() => {
                                            _setSelected(option);
                                            setSelected(option);
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                );
                            }
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default DaoLandPage