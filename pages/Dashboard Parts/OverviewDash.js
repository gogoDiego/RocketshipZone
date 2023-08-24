import React, { useEffect, useState, useCallback } from "react";
import Image from 'next/image';



import DownArrow from "../../public/down-Arrow-icon.png";

import WebsiteIcon from "../../public/images/icons8-website-50.png";
import TwitterIcon from "../../public/images/icons8-twitter.svg";
import TelegramIcon from "../../public/images/icons8-telegram.svg";
import GithubIcon from "../../public/images/icons8-github.svg";

import TradingViewChart from "./tradingViewChart.js"

import "/Users/diegotorres/RocketshipV2/pages/Dashboard Parts/OverviewDash.js"





import styles from '../../pages/Dashboard Parts/overview.module.css';





export default function OverviewDash (props){


    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState("Price");
    const [chartTime, setChartTime] = useState("D");



    const fetchAssetPriceData = async (coingeckoAPILink) => {
        const apiUrl = coingeckoAPILink;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const prices = data.prices.map((price) => ({
            time: new Date(price[0]).toISOString().slice(0, 10),
            value: price[1],
        }));
        return prices.slice(0, -1);
    };
      
    useEffect(() => {
        const main = async () => {
            const assetPriceData = await fetchAssetPriceData(props.props.chain.apiPriceLink);
            return assetPriceData;
        };

        async function fetchData() {
            const data = await main();
            setChartData(data);
        }

        fetchData();
    }, [props.props.chain.apiPriceLink]);

      

      
      


      const openResource = (resourceType) => {
        window.open(props.props.chain[resourceType], "_blank");
      };




    return(


    <div className={styles.dashcontent}>

    <div className={styles.dashContentDiv}>

        <div className={styles.overviewDash}>

        
            <div className={styles.overviewSubtitle}>
            <p className={`${styles.overviewSub} ${styles.headlinegradent}`}>
                {props.props.chain.subTitle}
            </p>
                {/* <p className="overviewProjectEst"> · {props.props.chain.est}</p> */}
            </div>

            <div className={styles.overviewTags}>
                {props.props.chain.tags.slice(0, 3).map((tag, index) => (
                    <div 
                        className={styles.overviewTag}
                        key={index}
                        onClick={()=> props.setTargetSearch(tag)}
                        >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>


            <div className={styles.overviewDescription}>
                <p> {props.props.chain.description} </p>
            </div>

                <div className={styles.overviewprojectResources}>
                    <div className={styles.resourcesIcon}>
                        <Image
                            src={WebsiteIcon}
                            alt="website icon"
                            width={30}
                            height={30}
                            onClick={()=> openResource("website")} />
                    </div>
                    <div className={styles.resourcesIcon}>
                        <Image
                            src={TwitterIcon}
                            alt="twitter icon"
                            width={30}
                            height={30}
                            onClick={()=> openResource("twitter")}
                        />
                    </div>
                    <div className={styles.resourcesIcon}>
                        <Image
                            src={TelegramIcon}
                            alt="telegram icon"
                            width={30}
                            height={30}
                            onClick={()=> openResource("telegram")}
                        />
                    </div>
                    <div className={styles.resourcesIcon}>
                        <Image
                            src={GithubIcon}
                            alt="github icon"
                            onClick={()=> openResource("github")}
                        />
                    </div>
                </div>
            


        
            <div className={styles.readmoreDiv} onClick={() => props.setExpanded(!props.expanded)}>
                
                <div className={styles.readmoreDiv1}>
                    <p className={styles.readmore}> {props.expanded ? "Less": "More"} Info </p>
                    <Image
                        src={DownArrow}
                        alt="down arrow icon"
                        height={20}
                        width={20}
                        className={`${styles.downArrowIcon} ${props.expanded ? styles.flipped : ""}`}
                    />

                </div>




            </div>

        </div>
        

        <hr className={styles.overviewDivider} />


        <div className={styles.overviewToken}>  

            <div className={styles.overviewStatsdiv}>

                {chartType === "Price" &&
                <div className={styles.overviewStats}>

                    <h1 className={styles.overviewTicker}> {props.props.chain.ticker} </h1>

                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> Price </p>
                        <p className={styles.StatNum}> ${props.props.chain.price} </p>
                    </div>

                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> MCap </p>
                        <p className={styles.StatNum}> {props.props.chain.mCap} </p>
                    </div>
                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> TVL </p>
                        <p className={styles.StatNum}> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }

                {chartType === "Vol" &&
                <div className={styles.overviewStats}>

                    <h1 className={styles.overviewTicker}> {props.props.chain.ticker} </h1>

                    <div className={styles.overviewStatRow}>
                    <p className={styles.StatSubtitle}> Daily Vol </p>
                        <p className={styles.StatNum}> ${props.props.chain.price} </p>
                    </div>

                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> Daily % Change  </p>
                        <p className={styles.StatNum}> {props.props.chain.mCap} </p>
                    </div>
                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> Daily $ Change </p>
                        <p className={styles.StatNum}> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }

                {chartType === "Liquidity" &&
                <div className={styles.overviewStats}>

                    <h1 className={styles.overviewTicker}> {props.props.chain.ticker} </h1>

                    <div className={styles.overviewStatRow}>
                    <p className={styles.StatSubtitle}> Liquidity </p>
                        <p className={styles.StatNum}> ${props.props.chain.price} </p>
                    </div>

                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> Daily % Change </p>
                        <p className={styles.StatNum}> {props.props.chain.mCap} </p>
                    </div>
                    <div className={styles.overviewStatRow}>
                        <p className={styles.StatSubtitle}> Daily $ Change </p>
                        <p className={styles.StatNum}> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }


                


                <div className={styles.overviewChartDiv}>

                    <div className={styles.ChartOptions}>

                    <div className={styles.ChartType}>
                        <div
                            className={chartType === "Vol" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartType("Vol")}
                        >
                            <p> Vol </p>
                        </div>
                        <div
                            className={chartType === "Price" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartType("Price")}
                        >
                            <p> Price </p>
                        </div>
                        <div
                            className={chartType === "Liquidity" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartType("Liquidity")}
                        >
                            <p> Liquidity </p>
                        </div>
                    </div>


                    <div className={styles.ChartTime}>
                        <div
                            className={chartTime === "D" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartTime("D")}
                        >
                            <p> D </p>
                        </div>
                        <div
                            className={chartTime === "W" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartTime("W")}
                        >
                            <p> W </p>
                        </div>
                        <div
                            className={chartTime === "M" ? `${styles.ChartTypeButton} ${styles.selectedChartSetting}` : styles.ChartTypeButton}
                            onClick={() => setChartTime("M")}
                        >
                            <p> M </p>
                        </div>
                    </div>


                    </div>

                    {/* <TradingViewChart data={chartData} className={styles.dashboardChart} /> */}
                    {chartData && <TradingViewChart data={chartData} className={styles.dashboardChart} />}
                </div>

            </div>

        </div>

        

        
    </div>

                        {props.expanded && (
                    <div className={styles.StatsRowDiv}>
                        <div className={styles.StatsBlock}>
                        <p className={styles.blockStatText}>Validators</p>
                        <h3 className={styles.blockStatNumber}>175</h3>
                        </div>
                        <div className={styles.Stats2BlockWide}>
                        <p className={styles.blockStatText}>Block Height</p>
                        <h3 className={styles.blockStatNumber}>10,323,211</h3>
                        </div>
                        <div className={styles.StatsBlock}>
                        <p className={styles.blockStatText}>Block Times</p>
                        <h3 className={styles.blockStatNumber}>7s</h3>
                        </div>
                        <div className={styles.StatsBlock}>
                        <p className={styles.blockStatText}>Block Explorer</p>
                        <h3 className={styles.blockStatNumber}>→</h3>
                        </div>
                    </div>
                    )}


    </div>


    )
}