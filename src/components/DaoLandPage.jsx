import React from 'react'
import styles from "../style";
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Overview from './Overview';



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
                    <div>
                        <Tab.Container defaultActiveKey="Navbuy">
                            <div className={`${styles.flexCenter}`}>
                                <div className="buy-sell">
                                    <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
                                        <Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">Overview</Nav.Link>
                                        <Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">Purposal</Nav.Link>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content  >
                                <Tab.Pane eventKey="Navbuy" >
                                    <Tab.Container defaultActiveKey="Navbuymarket">
                                        <Tab.Content id="nav-tabContent1">
                                            <Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
                                            <Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
                                        </Tab.Content>
                                        <div className="text-center">
                                            <div className="sell-element">
                                                <Overview />
                                            </div>
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
                                            <h1>under construction</h1>
                                        </div>
                                    </Tab.Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                    {/* <div className="col-xl-2 ">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


export default DaoLandPage