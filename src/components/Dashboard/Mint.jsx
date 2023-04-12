import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { MintForm } from "../mintform";
import styles from "../../style";


const Mint = () => {

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
        <MintForm />
      </div>
      <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
              <div className=" flex flex-col justify-start">
                <p className={`${styles.paragraph}  max-w-[450px]`}> </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
              <p className={`${styles.paragraph} `}>
                Copyright Ⓒ 2023 Chrysus. 2022, All Rights Reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Section>
  )
}

export default Mint

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color: black;
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