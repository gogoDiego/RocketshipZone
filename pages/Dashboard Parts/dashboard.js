import React, { useEffect, useState } from "react";
import Image from 'next/image';

import OverviewDash from "../Dashboard Parts/OverviewDash.js";
import InfoDashboard from "../Dashboard Parts/InfoDash.js";
import AssetDashboard from "../Dashboard Parts/AssetDash.js";
import IBCDash from "../Dashboard Parts/IBCDash.js"
import StakeDashboard from "../Dashboard Parts/StakeDash.js"
import VoteDashboard from "../Dashboard Parts/voteDash.js"



import styles from '/Users/diegotorres/RocketshipV2/pages/Dashboard Parts/Dashboard.module.css';
import { Img } from "@chakra-ui/react";



export default function Dashboard (props){


    const [dashNav, setDashNav] = useState("Overview")
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 750) {
            setDashNav("Info");
          }
        };
    
        // Call the function initially and listen for window resize
        handleResize();
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


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
                            className={styles.ProjectDashboardLogo}
                        />
                    </div>

                    <div className={` ${styles.dashnav} ${styles.hideOnSmallScreen}`}>
                        <div
                            className={dashNav === "Overview" ? `${styles.selectedDashNav} ${styles.dashnavbtn} `: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("Overview")}
                        >
                            <p> Overview </p>
                        </div>
                        <div
                            className={dashNav === "Info" ? `${styles.selectedDashNav} ${styles.dashnavbtn}`: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("Info")}
                        >
                            <p> Info </p>
                        </div>
                        <div
                            className={dashNav === "Assets" ? `${styles.selectedDashNav} ${styles.dashnavbtn} `: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("Assets")}
                        >
                            <p> Assets </p>
                        </div>
                        <div
                            className={dashNav === "IBC" ? `${styles.selectedDashNav} ${styles.dashnavbtn} `: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("IBC")}
                        >
                            <p> IBC </p>
                        </div>
                        <div
                            className={dashNav === "Stake" ? `${styles.selectedDashNav} ${styles.dashnavbtn}`: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("Stake")}
                        >
                            <p> Stake </p>
                        </div>
                        <div
                            className={dashNav === "Vote" ? `${styles.selectedDashNav} ${styles.dashnavbtn}`: `${styles.unselectedDashNav} ${styles.dashnavbtn}`}
                            onClick={() => setDashNav("Vote")}
                        >
                            <p> Vote </p>
                        </div>

                    </div>

                    <p className={`${styles.linktreeDescription} ${styles.showOnSmallScreen}`}>
                        {props.chain.description}
                    </p>

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