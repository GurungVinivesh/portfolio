import React from 'react'
// import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { imageData } from '@/data'
import DirectionAwareHover from './ui/direction-aware-hover'

const Certificates = () => {
  return (
    <div className='py-20' id="certificates">
        <h1 className='heading'>
           Some of my {' '}
            <span className='text-purple'>Certified Achievements</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10 mt-20'>
          <div className="grid grid-flow-row md:grid-flow-col auto-rows-max auto-cols-fr gap-4"
      style={{ gridAutoFlow: "dense" }}>

             {imageData.map((data) => (
               <DirectionAwareHover key={data.id} {...data}>
          {data.text}
        </DirectionAwareHover>
      ))}
    </div>
      </div>
    
    </div>
  )
}

export default Certificates