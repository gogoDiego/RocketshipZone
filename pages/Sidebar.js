import React from "react";
import Image from 'next/image';


import Osmologo from "../public/images/osmologo.png";
import CosmosATOMLogo from "../public/images/brandmark.c15d55f6.png"

import HomeIcon from "../public/images/icons8-home.svg"
import StrategyIcon from "../public/images/chess.png"

import styles from '/Users/diegotorres/RocketshipV2/styles/sidebar.module.css';



export default function Sidebar (props,setModes){

    return(

    <div className={styles.sidebardiv}>

        <div className={styles.sidebar}>

            <Image
                src={HomeIcon}
                alt="home icon"
                height={40}
                width={40}
                className={styles.homeIcon}
                onClick={() => props.setModes("Home")}
            />

            <Image
                src={StrategyIcon}
                alt="Strategy icon"
                height={35}
                width={35}
                className={styles.StrategyIcon}
                onClick={() => props.setModes("Strategy")}

            />

            <hr className={styles.sidebarHr}/>

            <Image
                src={Osmologo}
                alt="project app icon"
                height={60}
                width={60}
                className={styles.sidebarApp}

            />

            <Image
                src={CosmosATOMLogo}
                height={60}
                width={60}
                alt="project app icon"
                className={styles.sidebarApp}
            />

            


        </div>

    </div>
    )
}