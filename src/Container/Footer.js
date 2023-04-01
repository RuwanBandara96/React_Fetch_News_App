import React from 'react'
import logo from '../images/logo.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
      <nav className='sticky top-0 w-full border border-b-1 z-50 '>
          <div className='container max-w-5xl'>
              <div className='flex flex-row py-1 items-center'>
                  <div className='basis-1/3 flex flex-row'>
                      <img src={logo} alt="logo" width="80" className='cursor-pointer ' /> 
                  </div>
                  <div className='basis-1/3 rounded text-lg justify-end items-center flex flex-row space-x-4 '>
                      <FacebookRoundedIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <InstagramIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <YouTubeIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <TwitterIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <LinkedInIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <PinterestIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
                      <WhatsAppIcon className='rounded-xl bg-green-900 text-white hover:cursor-pointer' fontSize='medium' />
 
                  </div>
                  <div className='basis-1/3 flex-row'>© 2023 SAMPLE by COMPANY</div>
              </div>
              
          </div>
          
    </nav>
  )
}

export default Footer