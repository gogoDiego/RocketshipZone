import React, { useState } from "react";
import Image from 'next/image';

import YoutubeEmbed from "../Dashboard Parts/YoutubeEmbed.js";
// import TwitterEmbed from "./twitterEmbed";
// import MediumEmbed from "./mediumArticleEmbed";

import DownArrow from "../../public/images/down.png"

import WebsiteIcon from "../../public/images/icons8-website-50.png"
import TwitterIcon from "../../public/images/icons8-twitter.svg"
import TelegramIcon from "../../public/images/icons8-telegram.svg"
import GithubIcon from "../../public/images/icons8-github.svg"


import styles from '../../pages/Dashboard Parts/info.module.css';



export default function InfoDashboard (props){


    const openResource = (resourceType) => {
        window.open(props.props.chain[resourceType], "_blank");
      };


    const [article] = useState("Introduction")



    return(


    <div className={styles.dashcontent}>

    <div className={styles.dashContentDiv}>


        <div className={styles.InfoReadingresources}>
            


            <div className={styles.tableandtext}>

                <div className={styles.infoTableContents}>

                {/* {Object.keys(props.props.chain.textContent).map((title) => (
                    <p className={article === title ? "tableContentsBullet selectedArticle": "tableContentsBullet"} onClick={()=> setArticle(title)}>
                    {title}
                    </p>
                ))} */}

                <div className={styles.tableContentsBullet1}>
                    <p className={styles.InfoTitle}> Introduction </p>
                    <div className={styles.infotitleArrow}>
                        {/* <img src={DownArrow} className="resourcesIcon " /> */}
                        <p className={styles.InfoTitle}> + </p>

                    </div>
                </div>


                </div>

                <div className={styles.infoprojectResources}>
                <div className={styles.resourcesIcon}>
                    <Image
                        src={WebsiteIcon}
                        alt="website Icon"
                        onClick={()=> openResource("website")}
                    />
                </div>
                <div className={styles.resourcesIcon}>
                    <Image
                        src={TwitterIcon}
                        alt="twitter Icon"
                        onClick={()=> openResource("twitter")}
                    />
                </div>
                <div className={styles.resourcesIcon}>
                    <Image
                        src={TelegramIcon}
                        alt="telegram Icon"
                        onClick={()=> openResource("telegram")}
                    />
                </div>
                <div className={styles.resourcesIcon}>
                    <Image
                        src={GithubIcon}
                        alt="github Icon"
                        onClick={()=> openResource("github")}
                    />
                </div>
                {/* <div>
                    <img src={WebsiteIcon} className="resourcesIcon" onClick={()=> openResource("website")} />
                </div>
                <div>
                    <img src={TwitterIcon} className="resourcesIcon" onClick={()=> openResource("twitter")} />
                </div>
                <div>
                    <img src={TelegramIcon} className="resourcesIcon" onClick={()=> openResource("telegram")} />
                </div>
                <div>
                    <img src={GithubIcon} className="resourcesIcon" onClick={()=> openResource("github")}   />
                </div> */}
                <div>

                    <Image
                        src={DownArrow}
                        alt="down arrow icon"
                        height={20}
                        width={20}
                        className={`${styles.downArrowIcon}  ${styles.flop} `}
                    />

                </div>
            </div>


            </div>

            <p className={styles.infoText}>
                {props.props.chain.textContent[article]}
            </p>


        </div>










        <div className={styles.infoResourcesSlide}>

            <div className={styles.ResourceSlideShow}>


                <div className={styles.Displayingslide}>
                    <YoutubeEmbed/>
                    {/* <TwitterEmbed/> */}
                    {/* <MediumEmbed/> */}

                    <div className={styles.slideFadedescription}>
                        <p className={styles.ResourceSlideDescription}> 
                            Video: Osmosis Explained 
                        </p>
                    </div>
                </div>

                <div className={styles.verticalSelctionsSlider}>                    
                    <Image
                        src={DownArrow}
                        alt="downarrow icon"
                        className={`${styles.downArrowIcon} ${styles.upArrow}`}
                    />
                    <div className={styles.resourceTile}>
                    </div>
                    <div className={styles.resourceTile}>
                    </div>
                    <div className={styles.resourceTile}>
                    </div>
                    <div className={styles.resourceTile}>
                    </div>
                        <Image 
                            src={DownArrow}
                            alt="downarrow icon"
                            className={`${styles.downArrowIcon} ${styles.downArrow}`}
                        />
                </div>

            </div>


        </div>






            {/* {props.props.chain.textContent} */}




    </div>
    </div>


    )
}