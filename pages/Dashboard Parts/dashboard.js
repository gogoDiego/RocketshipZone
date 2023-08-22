import React, { useEffect, useState } from "react";
import Image from 'next/image';

import OverviewDash from "../Dashboard Parts/OverviewDash.js";
import InfoDashboard from "../Dashboard Parts/InfoDash.js";
import AssetDashboard from "../Dashboard Parts/AssetDash.js";
import IBCDash from "../Dashboard Parts/IBCDash.js"
import StakeDashboard from "../Dashboard Parts/StakeDash.js"
import VoteDashboard from "../Dashboard Parts/voteDash.js"



import styles from '/Users/diegotorres/RocketshipV2/pages/Dashboard Parts/Dashboard.module.css';



export default function Dashboard (props){


    const [dashNav, setDashNav] = useState("Overview")
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        setExpanded(false);
      }, [dashNav]);
    

    return(

        <div className={styles.dashboarddiv}>

            <div className={expanded ? `${styles.expanded} ${styles.dashboard}` : styles.dashboard}>

                <div className={styles.dashheader}>
                    <div className={styles.dashtitle}>
                        <Image
                            src={props.chain.logoTypeface}
                            alt="typeface logo"
                            // height={90}
                            // width="auto"
                            className={styles.ProjectDashboardLogo}
                        />
                    </div>

                    <ul className={styles.dashnav}>
                        <li
                            className={dashNav === "Overview" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("Overview")}
                        > Overview </li>
                        <li
                            className={dashNav === "Info" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("Info")}
                        > Info </li>
                        <li
                            className={dashNav === "Assets" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("Assets")}
                        > Assets </li>
                        <li
                            className={dashNav === "IBC" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("IBC")}
                        > IBC </li>
                        <li
                            className={dashNav === "Stake" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("Stake")}
                        > Stake </li>
                        <li
                            className={dashNav === "Vote" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("Vote")}
                        > Vote </li>
                        {/* <li
                            className={dashNav === "NFT's" ? styles.selectedDashNav : styles.unselectedDashNav}
                            onClick={() => setDashNav("NFT's")}
                        > NFT's </li> */}
                    </ul>

                </div>


                {dashNav === "Overview" && 
                <OverviewDash
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setTargetSearch={props.setTargetSearch}
                />
                }

                {dashNav === "Info" && 
                <InfoDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setTargetSearch={props.setTargetSearch}
                />
                }

                {dashNav === "Assets" && 
                <AssetDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}

                />
                }

                {dashNav === "IBC" && 
                <IBCDash
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                }
{/* 
                {dashNav === "Stake" && 
                <StakeDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                } */}
{/* 
                {dashNav === "Stake" && 
                <StakeDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                } */}

                {/* {dashNav === "Vote" && 
                <VoteDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                } */}
                

            </div>

        </div>

    )
}