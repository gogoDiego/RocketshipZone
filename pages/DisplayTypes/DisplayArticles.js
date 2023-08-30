import React from 'react'
import Image from 'next/image';



import PlusIcon from "../../public/images/plus-icon.svg"


import styles from '/Users/diegotorres/RocketshipV2/pages/DisplayTypes/articles.module.css';





export default function DisplayArticles (props){


    console.log(props)


    return(

    <div className={styles.article}>

        <div className={styles.articleImgDiv}>
            <Image
                src={props.chain.coverPhoto}
                className={styles.articleImage}
                alt='coverphoto'
                // width={550}
                // height={200}
            />
        </div>

        <div className={styles.articleContents}>

                <div className={styles.articleTypefaceLogo}>
                    <Image
                        src={props.chain.logoTypeface}
                        alt='articleTypeface'
                        // width={250}
                        // height={50}
                    />
                </div>

                <div className={styles.articleTagsDiv}>

                    {props.chain.tags.slice(0, 2).map((tag, index) => (
                    <div 
                        className={styles.articleTags}
                        key={index}
                        >
                        <p>{tag}</p>
                    </div>
                ))}
                </div>

                <p className={styles.articleDescription}> {props.chain.articleDescription} </p>

                <div className={styles.articleButtonDiv}>
                    <button
                        className={styles.articleButton}
                        onClick={() => props.setTargetChainID(props.chain.id)}
                    >
                        <p> Explore </p>
                    </button>

                    {/* <Image
                        src={PlusIcon}
                        alt='plus icon'
                        className={styles.PlusIcon}
                        width={25}
                        height={25}
                    /> */}
                    
                </div>

        </div>

    </div>


    )
}