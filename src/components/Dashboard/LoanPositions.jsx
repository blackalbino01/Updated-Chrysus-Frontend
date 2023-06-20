import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import styles from "../../style";
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderTab from '../Future/OrderTab';
import TradeTab from '../Future/TradeTab';
import Footer from '../Footer';
import { B, CP, D } from "../../assets";



const LoanPositions = () => {

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

  // const Dai = [
  //   { Pool: 'DAI', Collateral: '267%', Browser: "$152.7", Credit: "123%", Debt: "123%" },
  // ];
  const Dai = [
    { Collateral: 'CHC/DAI', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
];
const Eth = [
  { Collateral: 'CHC/ETH', Interest: '%', LIQ: '110%', Utilization: '%', Balance: '0' },
];
  return (
    <Section>
      {/* <div className="page-content mt-5">
        <div className="col-xl-12 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" >
          <div className="style-1 box-hover"
            style={{
              backgroundColor: "#211f21",
              borderRadius: "16px",
              color: "#846424",
            }}
          >
            <div className=" justify-between items-center">
            </div>
            <Tab.Container defaultActiveKey="All">
              <div className=" border-0 pb-2 flex-wrap">
                <h4 className="heading text-center pt-4">All Positions</h4>
              </div>
              <div className="card-body pt-0 pb-0">
                <Tab.Content >
                  <Tab.Pane eventKey="All">
                    <div className="table-responsive dataTabletrade ">
                      <div id="status_wrapper" className="dataTables_wrapper no-footer">
                        <table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
                          <thead>
                            <tr className='text-white'>
                              <th>Pool</th>
                              <th>Collateral Value</th>
                              <th>Browser Credit</th>
                              <th>Collateral Credit </th>
                              <th>Debt Ratio </th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody className='text-white'>
                            {Dai.map((item, index) => (
                              <tr key={index}>
                                <td>{item.Pool}</td>
                                <td>{item.Collateral}</td>
                                <td>{item.Browser}</td>
                                <td>{item.Credit}</td>
                                <td>{item.Debt}</td>
                                <td>
                                  <Link to={"/accounts/liquidate"}>
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
                                      }}>Liquidate </span>
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
                              className="paginate_button previous text-white mt-2"
                              onClick={() =>
                                activePag.current > 0 &&
                                onClick(activePag.current - 1)
                              }
                            >
                              <i>
                                <svg style={{ width: "15px", height: "15px", marginTop: "13" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
                              </i>
                            </Link>
                            <span className='text-white'>
                              {paggination.map((number, i) => (
                                <Link
                                style={{
                                  fontSize:"10px",
                                }}
                                  key={i}
                                  className={`paginate_button  ${activePag.current === i ? "current" : ""
                                    } `}
                                  onClick={() => onClick(i)}
                                >
                                  {number}
                                </Link>
                              ))}
                            </span>

                            <Link
                              className="paginate_button next text-white mt-2"
                              onClick={() =>
                                activePag.current + 1 < paggination.length &&
                                onClick(activePag.current + 1)
                              }
                            >
                              <i>
                                <svg style={{ width: "15px", height: "15px", marginTop: "12", marginLeft:"10px"  }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
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
        </div>
      </div> */}
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
                              <th>Pool</th>
                              <th>Borrow</th>
                              <th>Current Value</th>
                              <th>Debit Ratio</th>
                              <th>APY</th>
                              <th className='text-center'>Action</th>
                            </tr>
                          </thead>
                          <tbody className='text-white'>
                            {Eth.map((item, index) => (
                              <tr key={index}>
                                <td>{item.Collateral}</td>
                                <td>{item.Interest}</td>
                                <td>{item.LIQ}</td>
                                <td>{item.Utilization}</td>
                                <td>{item.Balance}</td>
                                <td>
                                  <Link>
                                    <span className="badge cursor-pointer"
                                      // onClick={() => setModalShowDAI(true)}
                                      style={{
                                        height: "22px",
                                        width: "80px",
                                        color: "#846424",
                                        textTransform: "uppercase",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "10px",
                                        backgroundColor: "#1A1917",
                                        borderRadius: "16px",
                                        border: "1px solid transparent",
                                        borderColor: "#846424",

                                      }}>Withdraw</span>
                                  </Link>
                                  <Link to={"/accounts/loan/lend"}>
                                    <span className="badge cursor-pointer ml-2"
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
                                <td>
                                  <Link>
                                    <span className="badge cursor-pointer"
                                      // onClick={() => setModalShowDAI(true)}
                                      style={{
                                        height: "22px",
                                        width: "80px",
                                        color: "#846424",
                                        textTransform: "uppercase",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "10px",
                                        backgroundColor: "#1A1917",
                                        borderRadius: "16px",
                                        border: "1px solid transparent",
                                        borderColor: "#846424",

                                      }}>Withdraw</span>
                                  </Link>
                                  <Link to={"/accounts/loan/lend"}>
                                    <span className="badge cursor-pointer ml-2"
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
          <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }} />
          <div className="mt-4" />
          <div className="w-100 d-flex flex-row justify-content-start p-3" />
        </div>
      </div>
      <div className="mt-5" />
      <div className="pt-5" />
      <div className="pt-5" />
      <div className="pb-5" />
    </Section>
  )
}

export default LoanPositions

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color:  #121212;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;