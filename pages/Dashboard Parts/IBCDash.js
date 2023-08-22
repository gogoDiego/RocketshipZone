import React from "react";
import Image from 'next/image';


import DownArrowIcon from "../../public/images/down.png"
import SwitchIcon from "../../public/images/arrow-goes-left-right-icon.svg"
import SettingsGearIcon from "../../public/images/setting-icon.svg"


import styles from '../../pages/Dashboard Parts/ibc.module.css';


export default function OverviewDash (props,setExpanded){


    return(


    <div className={styles.dashcontent}>

        <div className={styles.overviewDash}>

            <div className={styles.bridgeDiv}>

            <div className={styles.IBCSubtitle}>
                <p className={styles.IBCSub}> Bridge Assets </p> 
                    <Image
                        src={SettingsGearIcon}
                        alt="Gear Icon Settings"
                        height={20}
                        width={20}
                        className={styles.IBCSetting}
                    />
            </div>

                <div className={styles.IBCFromDiv}>

                    <div className={styles.IBCChainSelector}>

                        <div className={` ${styles.IBCChainFromDiv} ${styles.fromchain} `}>
                            <Image
                                src={DownArrowIcon}
                                alt="Down Icon"
                                height={35}
                                width={35}
                                className={styles.IBCdownarrowicon}
                            />
                            <p className="selectChain"> Select Chain</p>
                        </div>
                        <div className={styles.IBCSwitchChains}>
                            <Image 
                                src={SwitchIcon} 
                                alt="swip Icon"
                                height={20}
                                width={20}
                                className={styles.SwitchChainIcon}
                            />
                        </div>
                        <div className={` ${styles.IBCChainFromDiv} ${styles.destinationchain} `}>
                            <Image
                                src={DownArrowIcon}
                                alt="down icon"
                                height={35}
                                width={35}
                                className={styles.IBCdownarrowicon}
                            />
                            <p className={styles.selectChain}> Select Chain</p>
                        </div>

                    </div>

                    <div className={styles.IBCAssetAmountFromDiv}>

                        <div className={styles.IBCAssetDiv}>
                            <Image 
                                src={DownArrowIcon}
                                alt="downicon"
                                height={35}
                                width={35}
                                className={styles.IBCdownarrowicon}
                            />
                            {/* <img src={props.props.chain.logo} alt="downicon" className="IBCAsseticon"/> */}
                            <p className={styles.selectChain}> Select Token</p>
                        </div>
                        <div className={styles.IBCAmountDiv}>
                            <p className={styles.selectChain}> Amount </p>
                        </div>
                    </div>
                </div>

                <div className={styles.StartBridging}>
                    <p> Begin Bridge Confirmation </p>
                </div>
            
            </div>

        </div>

        <hr className={styles.overviewDivider}/>

        <div className={styles.overviewToken}>  



        </div>



    </div>


    )
}