import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import StablesImage from "/Users/diegotorres/RocketshipV2/public/images/stables.png"

import styles from '/Users/diegotorres/RocketshipV2/pages/Strategy/strategyPage.module.css';

// import PieChart from "/Users/diegotorres/RocketshipV2/pages/Strategy/piechart.js"

// import DonutChart from 'react-donut-chart';



export default function Header (props) {



  return (
<>
    {/* <div>

    </div> */}
    <div className={styles.StratHeader}>
        <p className={styles.StrategiesTitle}>
            STRATEGIES
        </p>
    </div>

    <div className={styles.StrategyDiv}>


        <div className={styles.Strategiesdivs}>
            
            <div className={styles.Strategies}>


                <div className={styles.Strat}>
                    <div className={styles.stratTitlediv}>
                        <p className={styles.stratTitle}> Stablecoins</p>
                    </div>
                    <div>
                        <p> up to 9% yield</p>

                    </div>
                    <div className={styles.explore}>

                        <Image
                            src={StablesImage}
                            height={100}
                            width={100}
                        />

                        <div>
                            <p> Explore > </p>
                        </div>
                    </div>
                </div>





            </div>

            <div className={styles.portfolio}>

                <div className={styles.porfolioTitle}>
                    <h1 className={styles.porfolioTitleText}> Portfolio </h1>
                    <h1 className={styles.porfolioTitleValue}> $2,344</h1>
                </div>

                <div className={styles.AssetHealthBar}>
                    <div className={` ${styles.Assetbar} ${styles.tokensbar}`}>
                        <p className={styles.barsubtitle}> Tokens</p>
                    </div>
                    <div className={` ${styles.Assetbar} ${styles.nftsbar}`}>
                        <p className={styles.barsubtitle}> NFTs</p>
                    </div>
                    <div className={` ${styles.Assetbar} ${styles.debtbar}`}>
                        <p className={styles.barsubtitle}> Debt</p>
                    </div>
                </div>

                {/* <PieChart
                /> */}  

                <div className={styles.piechartdiv}>

                    <div className={styles.pie}>
                    </div>


                    <div className={styles.Statsdiv}>
                        <div className={styles.Statrow}>
                            <div className={styles.statKey}/>
                            <p className={styles.stat}> 43% Staking </p>
                        </div>
                        <p className={styles.stat}> 12% LPing </p>
                        <p className={styles.stat}> 9% Lending </p>
                        <p className={styles.stat}> 4% Borrowing </p>
                        <p className={styles.stat}> 9% NFTs </p>
                    </div>
                    <div className={styles.rebalancediv}>
                        Rebalance
                    </div>



                </div>




            </div>

        </div>


    </div>

</>
  );
}
