import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SearchDropList from './searchDroplist';


import RocketIcon from "/Users/diegotorres/RocketshipV2/public/images/rocket.png"
import SearchIcon from "/Users/diegotorres/RocketshipV2/public/images/magnifying-glass.png"


import styles from '/Users/diegotorres/RocketshipV2/styles/header.module.css';




export default function Header (props) {


  const [targetSearch, setTargetSearch] = useState(props.targetSearch);


  useEffect(() => {
    setTargetSearch(props.targetSearch);
  }, [props.targetSearch]);


  const handleChange = (e) => {
    const value = e.target.value;
    setTargetSearch(value);
    props.setTargetSearch(value);
    props.handleSearch(value);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.headerdiv}>
        <div className={styles.logodiv}>
          <h1 className={styles.RocketshipTypeface}> Rocketship </h1>
          <span className={styles.rocketspan}>
            <Image
              className={styles.rocket}
              alt='Rocketship logo'
              height={50}
              width={50}
              src={RocketIcon}
            />
          </span>

        </div>

        <div className={styles.searchbtns}>
          <div className={styles.searchbar}>
            <input
              type="text"
              className={styles.searchinput}
              value={targetSearch}
              onChange={handleChange}
            />

            <Image
              className={styles.searchicon}
              alt='Rocketship logo'
              height={30}
              width={30}
              src={SearchIcon}
            />


          </div>
        </div>

        <div className={styles.walletdiv}>
          {/* <span className="material-icons" id="menuicon">
            menu
          </span> */}
        </div>
      </div>
    </div>
  );
}
