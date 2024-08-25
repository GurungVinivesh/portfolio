import React from 'react'
import Maigcbutton from './ui/Maigcbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px]' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let us discuss how i can help you achive your goals.
            </p>
            <a href="mailto:gurungvini01@gmail.com">
                <Maigcbutton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
            
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Vinivesh_Gurung</p>
        </div>
        <div className='flex items-center md:gap-3 mt-6 gap-6'>
            {socialMedia.map((profile)=> (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-100'>
                    <img 
                    src={profile.img} 
                    alt={profile.id}
                    href={profile.link}
                    width={20} 
                    height={20}
                    />
                </div>
            ))}
        </div>
        </div>
    </footer>
  )
}

export default Footer
