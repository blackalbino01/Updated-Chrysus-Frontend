import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { CHCForm } from "../chcform";
export default function Loan() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <div className="grid">
      <div className="col-xl-12">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
							<div className="me-auto mb-3">
								<h2 className="fs-28 font-w600 text-white">
									{/* {usdprice * web3.utils.fromWei(balance, 'ether')?.substring(0, 7) + "...."} */}
								</h2>
							</div>
						</div>
						<div className="card-body">
							<div className="row sp20 mb-4 align-items-center">
								<div className="col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
									<div className="px-2 info-group">
										<p className="fs-18 mb-1"> Interest Rate</p>
										<h2 className="fs-28 font-w600 text-white">
											100.30
										</h2>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1" >Utilization Rate</p>
										<h3 className="fs-20 font-w600 text-white">
											10
											{/* <svg
												width={14}
												height={14}
												viewBox="0 0 14 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
													fill="#2BC155"
												/>
											</svg> */}
										</h3>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">Total Supplied</p>
										<h3 className="fs-20 font-w600 text-white">
											 1000
										</h3>
									</div>
                  <div className="px-2 info-group">
										<p className="fs-14 mb-1">Total Borrowd</p>
										<h3 className="fs-20 font-w600 text-white">
											 1000.21
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        <CHCForm />
      </div>
    </Section>
  );
}


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
    margin-top: 0rem;
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
