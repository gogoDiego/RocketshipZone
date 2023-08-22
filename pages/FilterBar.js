import React from 'react'
import Image from 'next/image';


import SearchDropList from '/Users/diegotorres/RocketshipV2/pages/searchDroplist.js';

//icons
import RowIcon from "../public/images/2-row-icon.svg"
import AppIcon from "../public/images/four-squares-icon.svg"
import ArticleIcon from "../public/images/article-icon.svg"


let CategoriesOptions = ["das", "dsf"];


import styles from '../styles/filterbar.module.css';


const pagesnav = "< 1/1 >"



export default function FilterBar (){


    return(      

    <div className={styles.filterbardiv}>

        <div className={styles.filterbar}>

            <div className={styles.filtering}>

                <div className={styles.displaysetting}>

                    <div className={` ${styles.displaytype} ${styles.rowicondiv}`}>
                        <Image
                            src={RowIcon}
                            alt='display row icon'
                            height={20}
                            width={20}
                            className={` ${styles.rowicon} ${styles.displaytypeicon}`}
                        />
                    </div>


                    <div className={` ${styles.displaytype} ${styles.appicondiv}`}>
                        <Image
                            src={AppIcon}
                            alt='display app icon'
                            height={20}
                            width={20}
                            className={`${styles.appicon} ${styles.displaytypeicon}`}
                        />
                    </div>
                    <div className={`${styles.displaytype} ${styles.articleicondiv}`} >
                        <Image
                            src={ArticleIcon}
                            alt='display Articles icon'
                            height={30}
                            width={30}
                            className={`${styles.articleicon} ${styles.displaytypeicon}`}
                        />
                    </div>

                </div>

                <div className={styles.pagenav}>
                    <p> {pagesnav} </p>
                </div>

                <SearchDropList
                    options={CategoriesOptions}
                    placeholder="Rows"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

            </div>

            {/* <div className={styles.navigation}>

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Ecosystem"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Categories"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Filter"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

            </div> */}

        </div>

    </div>



    )
}