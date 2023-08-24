import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import DownArrowIcon from "../../public/images/down.png"
import PlusIcon from "../../public/images/plus-icon.svg"


import StablesImage from "/Users/diegotorres/RocketshipV2/public/images/stables.png"
import PFP from "/Users/diegotorres/RocketshipV2/public/images/pfp.jpeg"

import Osmologo from "/Users/diegotorres/RocketshipV2/public/images/osmologo.png";
import OsmosisTypeface from "/Users/diegotorres/RocketshipV2/public/images/OsmosisTypeface.svg"


// import GaugeChart from 'react-gauge-chart'
// import PieChart from "/Users/diegotorres/RocketshipV2/pages/Strategy/piechart.js"
// import DonutChart from 'react-donut-chart';


import styles from '/Users/diegotorres/RocketshipV2/pages/Strategy/strategyPage.module.css';





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

                    <div className={styles.StratContent}>

                        <p> up to 9% yield</p>


                        <Image
                            src={StablesImage}
                            height={100}
                            width={100}
                        />

                        <div className={styles.explorediv}>
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


    <div className="explorebody">

                <div className={styles.StrategyArticle}>
                    
                    <div className={styles.ArticleCoverPhoto}>
                        <Image
                            src={PFP}
                            height={125}
                            width={125}
                        />
                        <div className={styles.ArticleCoverPhotoDetails}>
                            <p> ⋯ </p>
                        </div>
                    </div>


                    <div className={styles.ArticleContent}>
                        <div className={styles.ArticleHeader}>
                            <h1 className={styles.ArticleTitle}> Lend $JUNO on Kujira </h1>
                            <div className={styles.ArticleTags}>
                                <div className={styles.tag}>
                                    <p className={styles.tagtext}> Lending </p>
                                </div>
                                <div className={styles.tag}>
                                    <Image
                                        src={Osmologo}
                                        height={25}
                                        width={25}
                                    />
                                    <p className={styles.tagtext}> $JUNO </p>
                                </div>
                                <div className={styles.tag}>
                                    <Image
                                        src={OsmosisTypeface}
                                        height={30}
                                        width={90}
                                    />
                                    {/* <p className={styles.tagtext}> Kujira </p> */}
                                </div>
                            </div>

                        </div>
                        <p className={styles.ArticleText}>
                            The choice is yours anon...

                            Stake $JUNO for 30% APR & 28 day lockup

                            or...

                            Lend it on ghost for much higher APR and no lockup with interest earned every 3 seconds.
                        </p>
                    </div>

                    <div className={styles.RiskAndYield}>
                        <h1> 108% APR</h1>
                        <div>
                        {/* <GaugeChart
                            id="gauge-chart1"
                            width={100}
                            height={50}
                        /> */}
                            <p> High Risk </p>
                        </div>
                    </div>
                    

                    <div className={styles.articleOptions}>
                        <div className={styles.SaveArticle}>
                            {/* <Image
                                src={PlusIcon}
                                height={75}
                                width={75}
                            /> */}

                        </div>
                        <div className={styles.expandArticle}>
                            <Image
                                src={DownArrowIcon}
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>


                </div>


    </div>

</>
  );
}
