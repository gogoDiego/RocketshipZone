import React from 'react'

//Icons
import PlusIcon from "../../public/images/plus-icon.svg"
import GearIcon from "../../public/images/gear-icon.svg"
import Osmologo from "../../public/images/osmologo.png"


export default function DisplayRows (){


    return(

            <div className='explorebody'>

                <div className='rowsdiv' >

                    <div className='toptitlerow'>
                        <p className='rowRank rowTitle'> # </p>
                        <p className='rowName rowTitle'> Project </p>
                        <p className='rowCategory rowTitle'> Category </p>
                        <p className='rowPrice rowTitle'> Price </p>
                        <p className='rowTvl rowTitle'> TVL </p>
                        <p className='rowMarketCap rowTitle'> MarketCap </p>
                        <p className='plusicon'> <img src={GearIcon} alt='setting gear icon'/> </p>
                    </div>

                    <hr/>

                    <div className='rowitem'>
                    
                        <div className='rowItemRank rowItemTitle'> <p> 1 </p> </div>
                        <div className='rowItemNamediv rowItemTitle'>
                            <img src={Osmologo} alt="project logo" className='rowItemLogo'/>
                            <p className='rowItemName'> Osmosis </p> 
                        </div>
                        <div className='rowItemCategory rowItemTitle'> <p> DeFi </p> </div>
                        <div className='rowItemPrice rowItemTitle'> <p> $1.2 </p> </div>
                        <div className='rowItemTvl rowItemTitle'> <p> $163.28m </p> </div>
                        <div className='rowItemMarketCap rowItemTitle'> <p> $453,449,152 </p> </div>
                        <div className='rowItemBookmarket rowItemTitle'> <img src={PlusIcon} alt='plus icon'/> </div>

                    </div>

                    <hr/>



                </div>

            </div>
 
    )
}