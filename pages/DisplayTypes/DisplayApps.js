import React from 'react'
import Image from 'next/image';




export default function DisplayApps (props){


    return(

    <div className='explorebody'>

        <div className="appExploreDiv">

            <div className='appsdiv'>

                <div className='app'>
                    <div className='appsquare'>
                        <Image
                            src={props.chain.logo}
                            alt='chain App Logo'
                            className="appLogo"
                        />
                    </div>
                    <p className='appTitle'> Osmosis</p>
                </div>

            </div>

            <div className='appsdiv'>

                <div className='app'>
                    <div className='appsquare'>
                        <img
                            src={props.chain.logo}
                            alt='chain App Logo'
                            className="appLogo"
                        />
                    </div>
                    <p className='appTitle'> Osmosis</p>
                </div>

            </div>

        </div>

    </div>

    )
}