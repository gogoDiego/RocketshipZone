import React, { useState, useEffect } from 'react';
// import Image from 'next/image';


import styles from '/Users/diegotorres/RocketshipV2/pages/Strategy/strategyPage.module.css';

import DonutChart from 'react-donut-chart';



const data = [
    {
      "id": "atom",
      "label": "ATOM",
      "value": 875,
      "color": "#444444"
    },
    {
      "id": "akt",
      "label": "AKT",
      "value": 186,
      "color": "hsl(42, 70%, 50%)"
    },
    {
      "id": "scrt",
      "label": "SCRT",
      "value": 95,
      "color": "hsl(158, 70%, 50%)"
    },
    {
      "id": "usdc",
      "label": "USDC",
      "value": 36.1,
      "color": "hsl(280, 70%, 50%)"
    },
    {
      "id": "osmo",
      "label": "OSMO",
      "value": 34.4,
      "color": "hsl(81, 70%, 50%)"
    },
    {
      "id": "juno",
      "label": "JUNO",
      "value": 23.9,
      "color": "hsl(24, 70%, 50%)"
    },
];



export default function Piechart () {


  return (
    <div className={styles.piechart}>
        <DonutChart
            data={data}
        />
    </div>
  );
}
