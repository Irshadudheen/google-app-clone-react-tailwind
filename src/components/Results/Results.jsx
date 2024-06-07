import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ReactPlayer from 'react-player'
import { useResultContext } from '../../Contexts/ResultContextProvider'
import Loading from '../Loading/Loading'
import Navbar from '../Navbar/Navbar'
const Results = () => {
    const {getResults,result,searching,isLoading}=useResultContext();
    const location =useLocation();
    useEffect(()=>{
        getResults('query=JavaScript Mastery &limit=40 & related_keywords=true')
    },[])
    if(isLoading) return <Loading/>
    switch (location.pathname) {
        case '/search':
            return (
                
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {result?.results?.map(({url,title},index)=>(
                        <div className="md:w-2/5 w-full">
                            <a href={url} target='_blank' rel='noreferrer'>
                                <p className='text-sm'>
                                    {url.length >30 ? url.substring(0,30):url}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>

                        </div>

))}
                </div>

            )
            break;
        case '/images':
                return 'SEARCH'
                break;
        case '/news':
                return 'SEARCH'
                break;
        case '/videos':
            return 'SEARCH'
            break;
        default:
            break;
    }
  return (
    <div>
      Results
    </div>
  )
}

export default Results
