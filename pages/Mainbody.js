import React, { useEffect, useState } from 'react';

//Components
import Header from "./Header";
import Sidebar from "./sidebar.js"

import Dashboard from "/Users/diegotorres/RocketshipV2/pages/Dashboard Parts/dashboard.js"
import DisplayArticles from "/./pages/DisplayTypes/DisplayArticles.js"

import Strategy from "/Users/diegotorres/RocketshipV2/pages/Strategy/strategy.js"

// import DisplayApps from "./displayApps.js"
// import DisplayRows from './displayRows.js'

import FilterBar from '../pages/FilterBar.js'
import Chains from "./Database.js";
import { color } from 'framer-motion';



import styles from '/Users/diegotorres/RocketshipV2/pages/Strategy/strategyPage.module.css';





export default function MainDashboard (){

    const [modes, setModes] = useState("Home");

    const [targetSearch, setTargetSearch] = useState("Cosmos Ecosystem");
    const [targetChainID, setTargetChainID] = useState(0);
    const [targetChain, setTargetChain] = useState(Chains[targetChainID]);


    useEffect(() => {
      setTargetChain(Chains[targetChainID]);
    }, [targetChainID]);



    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = Object.entries(targetChain.cssSheet)
          .map(([selector, styles]) => {
            const cssProperties = Object.entries(styles)
              .map(([property, value]) => `${property}: ${value};`)
              .join(' ');
            return `${selector} { ${cssProperties} }`;
          })
          .join(' ');
      
        document.head.appendChild(styleElement);
      
        return () => {
          document.head.removeChild(styleElement);
        };
      }, [targetChain]);



      const chainTags = Chains.map(chain => ({
        id: chain.id,
        tags: chain.tags
      }));
    
      const tagIds = chainTags
        .map((chain) => {
          const matchingTags = chain.tags.filter((tag) =>
            tag.toLowerCase().includes(targetSearch.toLowerCase())
          );
          return matchingTags.map((tag) => chain.id);
        })
        .flat();



        const handleSearch = (value) => {
          setTargetSearch(value);
        };


    return(

        <div id="mainbody">

          <Header
            targetSearch={targetSearch}
            setTargetSearch={setTargetSearch}
            handleSearch={handleSearch}
          />

          <Sidebar
            props={Chains}
            setModes={setModes}
          />


        {modes == "Home" &&
        <>
          <Dashboard
              chain={targetChain}
              setTargetSearch={setTargetSearch}
          />
        
        <div className="explorebody">
            <div className="articlediv">

                {tagIds.map((id) => (
                    <DisplayArticles
                        key={id}
                        chain={Chains.find((chain) => chain.id === id)}
                        setTargetChainID={setTargetChainID}
                    />)
                    )}

            </div>
        </div>

        </>
        }



        {modes == "Strategy" &&

        <>
            <Strategy
    
            />



        </>
        }



            {/* <DisplayApps
                chain={Chains[1]}
            /> */}
            {/* <DisplayRows/> */}

          {/* <FilterBar/> */}



        </div>
    )
}